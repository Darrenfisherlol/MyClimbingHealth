import { Controller, Get, Param } from '@nestjs/common';
import { PhysicalTherapistService } from './physical-therapist.service';

@Controller('physical-therapist')
export class PhysicalTherapistController {
  constructor(private readonly physicalTherapistService: PhysicalTherapistService) {}

  @Get()
  async findAll() {
    return await this.physicalTherapistService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.physicalTherapistService.findOne(+id);
  }
}
