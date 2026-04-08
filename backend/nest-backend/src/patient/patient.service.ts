import {
  NotFoundException,
  BadRequestException,
  Injectable } from '@nestjs/common';

import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Patient } from "./entities/patient.entity";

@Injectable()
export class PatientService {

  constructor(
      @InjectRepository(Patient)
      private patientRepository: Repository<Patient>,
  ) {}

  async create(createPatientDto: CreatePatientDto) {
    return await this.patientRepository.save(createPatientDto);
  }

  async findAll() {
    return this.patientRepository.find();
  }

  async findOne(id: number) {
    const patient = await this.patientRepository.findOneBy({id});

    if(!patient)
    {
      throw new NotFoundException('No patient found');
    }

    return patient;
  }

  async update(id: number, updatePatientDto: UpdatePatientDto) {
    const patient = await this.patientRepository.findOneBy({ id });

    if (!patient) {
      return null;
    }

    Object.assign(patient, updatePatientDto);
    return await this.patientRepository.save(patient)
  }

  async remove(id: number) {
    const patientDelete = await this.patientRepository.findOneBy({ id });

    if (!patientDelete) {
      return null;
    }
    return await this.patientRepository.remove(patientDelete);
  }
}
