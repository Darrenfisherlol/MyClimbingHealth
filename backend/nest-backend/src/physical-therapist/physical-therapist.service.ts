import {
  NotFoundException,
  BadRequestException,
  Injectable } from '@nestjs/common';

import { CreatePhysicalTherapistDto } from './dto/create-physical-therapist.dto';
import { UpdatePhysicalTherapistDto } from './dto/update-physical-therapist.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PhysicalTherapist } from "./entities/physical-therapist.entity";

@Injectable()
export class PhysicalTherapistService {
  constructor(
      @InjectRepository(PhysicalTherapist)
      private ptRepository: Repository<PhysicalTherapist>,
  ) {}
  async create(createPhysicalTherapistDto: CreatePhysicalTherapistDto) {
    return await this.ptRepository.save(createPhysicalTherapistDto);
  }

  async findAll() {
    return this.ptRepository.find();
  }

  async findOne(id: number) {
    const pt =  await this.ptRepository.findOneBy({ id });

    if (!pt) {
      throw new NotFoundException('PT not found');
    }
    return pt;
  }

  async update(id: number, updatePhysicalTherapistDto: UpdatePhysicalTherapistDto) {
    const pt = await this.ptRepository.findOneBy({ id });

    if (!pt) {
      return null;
    }

    // mass assign issue?? pipeline validation? DTO validation??
    Object.assign(pt, updatePhysicalTherapistDto);
    return await this.ptRepository.save(pt)
  }

  async remove(id: number) {
    const ptDelete = await this.ptRepository.findOneBy({ id });

    if (!ptDelete) {
      return null;
    }
    return await this.ptRepository.remove(ptDelete);
  }
}
