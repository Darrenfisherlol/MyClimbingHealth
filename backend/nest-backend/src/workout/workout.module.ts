import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { WorkoutService } from './workout.service';
import { WorkoutController } from './workout.controller';
import { Workout } from './entities/workout.entity';
import { PhysicalTherapistModule } from '../physical-therapist/physical-therapist.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Workout]),
        PhysicalTherapistModule,
    ],
    controllers: [WorkoutController],
    providers: [WorkoutService],
    exports: [WorkoutService],
})
export class WorkoutModule {}
