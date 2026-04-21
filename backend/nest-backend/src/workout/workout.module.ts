import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";

import { WorkoutService } from './workout.service';
import { WorkoutController } from './workout.controller';
import {Workout} from "./entities/workout.entity";
import {WorkoutPlan} from "../workout-plan/entities/workout-plan.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Workout, WorkoutPlan])],
  controllers: [WorkoutController],
  providers: [WorkoutService],
})
export class WorkoutModule {}
