import {
  Injectable,
  UnauthorizedException,
  ConflictException,
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';
import { UserService } from '../users/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { DataSource } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { PhysicalTherapist } from '../physical-therapist/entities/physical-therapist.entity';
import { Patient } from '../patient/entities/patient.entity';
import { PatientTherapistLink } from '../patient/entities/patient-therapist-link.entity';
import { RegisterPtDto } from './dto/register-pt.dto';
import { RegisterPatientDto } from './dto/register-patient.dto';
import { generateJoinCode } from '../common/join-code.util';
import { PhysicalTherapistService } from '../physical-therapist/physical-therapist.service';
import { PatientService } from '../patient/patient.service';

export type AuthProfile = {
  userId: number;
  email: string;
  name: string;
  role: 'PT' | 'PATIENT';
  physicalTherapist: { id: number; joinCode: string } | null;
  patient: {
    id: number;
    therapists: { id: number; joinCode: string }[];
  } | null;
};

@Injectable()
export class AuthService {
  private readonly saltRounds = 10;

  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
    private readonly dataSource: DataSource,
    private readonly physicalTherapistService: PhysicalTherapistService,
    private readonly patientService: PatientService,
  ) {}

  async signIn(email: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.usersService.findOneEmail(email);
    if (!user) {
      throw new UnauthorizedException();
    }

    const ok = await bcrypt.compare(pass, user.password);
    if (!ok) {
      throw new UnauthorizedException();
    }

    const payload = {
      sub: user.userId,
      email: user.email,
      role: user.role,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async registerPt(dto: RegisterPtDto): Promise<{ access_token: string }> {
    const existing = await this.usersService.findOneEmail(dto.email);
    if (existing) {
      throw new ConflictException('Email already registered');
    }

    const hashed = await bcrypt.hash(dto.password, this.saltRounds);

    await this.dataSource.transaction(async (manager) => {
      const userRepo = manager.getRepository(User);
      const ptRepo = manager.getRepository(PhysicalTherapist);

      const user = await userRepo.save(
        userRepo.create({
          name: dto.name,
          email: dto.email,
          password: hashed,
          role: 'PT',
        }),
      );

      let joinCode = generateJoinCode();
      while (await ptRepo.findOneBy({ joinCode })) {
        joinCode = generateJoinCode();
      }

      await ptRepo.save(
        ptRepo.create({
          userId: user.userId,
          joinCode,
        }),
      );
    });

    return this.signIn(dto.email, dto.password);
  }

  async registerPatient(
    dto: RegisterPatientDto,
  ): Promise<{ access_token: string }> {
    const existing = await this.usersService.findOneEmail(dto.email);
    if (existing) {
      throw new ConflictException('Email already registered');
    }

    const pt = await this.physicalTherapistService.findByJoinCode(dto.ptCode);
    if (!pt) {
      throw new BadRequestException('Invalid PT code');
    }

    const hashed = await bcrypt.hash(dto.password, this.saltRounds);

    await this.dataSource.transaction(async (manager) => {
      const userRepo = manager.getRepository(User);
      const patientRepo = manager.getRepository(Patient);
      const linkRepo = manager.getRepository(PatientTherapistLink);

      const user = await userRepo.save(
        userRepo.create({
          name: dto.name,
          email: dto.email,
          password: hashed,
          role: 'PATIENT',
        }),
      );

      const patient = await patientRepo.save(
        patientRepo.create({
          userId: user.userId,
        }),
      );

      await linkRepo.save(
        linkRepo.create({
          patientId: patient.id,
          physicalTherapistId: pt.id,
        }),
      );
    });

    return this.signIn(dto.email, dto.password);
  }

  /** Logged-in patient adds another PT using their join code (same account). */
  async linkTherapist(userId: number, ptCode: string): Promise<AuthProfile> {
    const user = await this.usersService.findOneId(userId);
    if (!user || user.role !== 'PATIENT') {
      throw new ForbiddenException('Only patients can link to a PT');
    }

    const patient = await this.patientService.findByUserId(userId);
    if (!patient) {
      throw new BadRequestException('Patient profile missing');
    }

    const pt = await this.physicalTherapistService.findByJoinCode(ptCode);
    if (!pt) {
      throw new BadRequestException('Invalid PT code');
    }

    await this.patientService.linkToTherapist(patient.id, pt.id);

    return this.getProfile(userId);
  }

  async getProfile(userId: number): Promise<AuthProfile> {
    const user = await this.usersService.findOneId(userId);
    if (!user) {
      throw new UnauthorizedException();
    }

    const pt = await this.physicalTherapistService.findByUserId(userId);
    const patient = await this.patientService.findByUserId(userId);

    return {
      userId: user.userId,
      email: user.email,
      name: user.name,
      role: user.role,
      physicalTherapist: pt ? { id: pt.id, joinCode: pt.joinCode } : null,
      patient: patient
        ? {
            id: patient.id,
            therapists: (patient.therapistLinks ?? [])
              .filter((link) => link.physicalTherapist)
              .map((link) => ({
                id: link.physicalTherapist.id,
                joinCode: link.physicalTherapist.joinCode,
              })),
          }
        : null,
    };
  }
}
