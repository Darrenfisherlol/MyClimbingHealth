import {
  NotFoundException,
  BadRequestException,
  Injectable,} from '@nestjs/common';

import { CreateTeaDto } from './dto/create-tea.dto';
import { UpdateTeaDto } from './dto/update-tea.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tea } from './entities/tea.entity';

@Injectable()
export class TeaService {

  constructor(
      @InjectRepository(Tea)
      private teasRepository: Repository<Tea>,
  ) {}

  async create(createTeaDto: CreateTeaDto) {
    // if(createTeaDto.description || createTeaDto.name)
    // {
    //   throw new BadRequestException('Name or desc is required');
    // }
    return await this.teasRepository.save(createTeaDto);
  }

  async findAll() {
    return this.teasRepository.find();
  }

  async findOne(id: number) {
    const tea =  await this.teasRepository.findOneBy({ id });

    if (!tea) {
      throw new NotFoundException('Tea not found');
    }
    return tea;
  }

  async update(id: number, updateTeaDto: UpdateTeaDto) {
    const tea = await this.teasRepository.findOneBy({ id });

    if (!tea) return null;

    Object.assign(tea, updateTeaDto);
    return await this.teasRepository.save(tea)
  }

  async remove(id: number) {
    const teaDelete = await this.teasRepository.findOneBy({ id });

    if (!teaDelete) {
      return null;
    }
    return await this.teasRepository.remove(teaDelete);
  }
}
