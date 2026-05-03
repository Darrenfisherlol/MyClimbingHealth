import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PhysicalTherapist } from './entities/physical-therapist.entity';

@Injectable()
export class PhysicalTherapistService {
  constructor(
    @InjectRepository(PhysicalTherapist)
    private readonly ptRepository: Repository<PhysicalTherapist>,
  ) {}

  async findByUserId(userId: number): Promise<PhysicalTherapist | null> {
    return this.ptRepository.findOneBy({ userId });
  }

  async findByJoinCode(raw: string): Promise<PhysicalTherapist | null> {
    const joinCode = raw.trim().toUpperCase();
    return this.ptRepository.findOneBy({ joinCode });
  }

  async findAll(): Promise<PhysicalTherapist[]> {
    return this.ptRepository.find({
      relations: [
        'user',
        'patientLinks',
        'patientLinks.patient',
        'patientLinks.patient.user',
      ],
    });
  }

  async findOne(id: number): Promise<PhysicalTherapist> {
    const pt = await this.ptRepository.findOne({
      where: { id },
      relations: [
        'user',
        'patientLinks',
        'patientLinks.patient',
        'patientLinks.patient.user',
      ],
    });
    if (!pt) {
      throw new NotFoundException('PT not found');
    }
    return pt;
  }
}
