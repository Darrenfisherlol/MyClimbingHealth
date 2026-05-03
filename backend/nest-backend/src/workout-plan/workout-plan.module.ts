import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { WorkoutPlanService } from './workout-plan.service';
import { WorkoutPlanController } from './workout-plan.controller';
import { WorkoutPlan } from './entities/workout-plan.entity';
import { Workout } from '../workout/entities/workout.entity';
import { PhysicalTherapistModule } from '../physical-therapist/physical-therapist.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([WorkoutPlan, Workout]),
        PhysicalTherapistModule,
    ],
    controllers: [WorkoutPlanController],
    providers: [WorkoutPlanService],
    exports: [WorkoutPlanService],
})
export class WorkoutPlanModule {}
