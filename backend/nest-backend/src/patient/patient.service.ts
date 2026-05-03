import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Patient } from './entities/patient.entity';
import { PatientTherapistLink } from './entities/patient-therapist-link.entity';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient)
    private readonly patientRepository: Repository<Patient>,
    @InjectRepository(PatientTherapistLink)
    private readonly linkRepository: Repository<PatientTherapistLink>,
  ) {}

  async findByUserId(userId: number): Promise<Patient | null> {
    return this.patientRepository.findOne({
      where: { userId },
      relations: ['therapistLinks', 'therapistLinks.physicalTherapist'],
    });
  }

  async findAll(): Promise<Patient[]> {
    return this.patientRepository.find({
      relations: ['user', 'therapistLinks', 'therapistLinks.physicalTherapist'],
    });
  }

  async findOne(id: number): Promise<Patient> {
    const patient = await this.patientRepository.findOne({
      where: { id },
      relations: ['user', 'therapistLinks', 'therapistLinks.physicalTherapist'],
    });
    if (!patient) {
      throw new NotFoundException('No patient found');
    }
    return patient;
  }

  async linkToTherapist(
    patientId: number,
    physicalTherapistId: number,
  ): Promise<PatientTherapistLink> {
    const existing = await this.linkRepository.findOne({
      where: { patientId, physicalTherapistId },
    });
    if (existing) {
      return existing;
    }
    return this.linkRepository.save(
      this.linkRepository.create({
        patientId,
        physicalTherapistId,
      }),
    );
  }
}
