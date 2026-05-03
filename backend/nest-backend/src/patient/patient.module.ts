import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PatientService } from './patient.service';
import { PatientController } from './patient.controller';
import { Patient } from './entities/patient.entity';
import { PatientTherapistLink } from './entities/patient-therapist-link.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Patient, PatientTherapistLink])],
  controllers: [PatientController],
  providers: [PatientService],
  exports: [PatientService],
})
export class PatientModule {}
