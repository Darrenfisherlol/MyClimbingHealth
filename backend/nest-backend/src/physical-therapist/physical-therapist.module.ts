import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PhysicalTherapistService } from './physical-therapist.service';
import { PhysicalTherapistController } from './physical-therapist.controller';
import { PhysicalTherapist } from './entities/physical-therapist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PhysicalTherapist])],
  controllers: [PhysicalTherapistController],
  providers: [PhysicalTherapistService],
  exports: [PhysicalTherapistService],
})
export class PhysicalTherapistModule {}
