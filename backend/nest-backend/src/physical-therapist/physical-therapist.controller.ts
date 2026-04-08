import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PhysicalTherapistService } from './physical-therapist.service';
import { CreatePhysicalTherapistDto } from './dto/create-physical-therapist.dto';
import { UpdatePhysicalTherapistDto } from './dto/update-physical-therapist.dto';

@Controller('physical-therapist')
export class PhysicalTherapistController {
  constructor(private readonly physicalTherapistService: PhysicalTherapistService) {}

  @Post()
  async create(@Body() createPhysicalTherapistDto: CreatePhysicalTherapistDto) {
    return await this.physicalTherapistService.create(createPhysicalTherapistDto);
  }

  @Get()
  async findAll() {
    return await this.physicalTherapistService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.physicalTherapistService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePhysicalTherapistDto: UpdatePhysicalTherapistDto) {
    return await this.physicalTherapistService.update(+id, updatePhysicalTherapistDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.physicalTherapistService.remove(+id);
  }
}
