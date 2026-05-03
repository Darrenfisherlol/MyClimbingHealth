import { Controller, Get, Param } from '@nestjs/common';
import { PatientService } from './patient.service';

@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Get()
  async findAll() {
    return await this.patientService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.patientService.findOne(+id);
  }
}
