import {Injectable, NotFoundException} from '@nestjs/common';
import { CreateWorkoutPlanDto } from './dto/create-workout-plan.dto';
import { UpdateWorkoutPlanDto } from './dto/update-workout-plan.dto';
import {InjectRepository} from "@nestjs/typeorm";

import {Repository} from "typeorm";
import {WorkoutPlan} from "./entities/workout-plan.entity";

@Injectable()
export class WorkoutPlanService {

  constructor(
    @InjectRepository(WorkoutPlan)
    private readonly workoutPlanRepository: Repository<WorkoutPlan>,) {
  }
  async create(createWorkoutPlanDto: CreateWorkoutPlanDto) {
    return await this.workoutPlanRepository.save(createWorkoutPlanDto);
  }

  async findAll() {
    return await this.workoutPlanRepository.find();
  }

  async findOne(id: number) {
    const pt =  await this.workoutPlanRepository.findOneBy({ id });

    if (!pt) {
      throw new NotFoundException('Workout plan was not found');
    }
    return pt;
  }

  async update(id: number, updateWorkoutPlanDto: UpdateWorkoutPlanDto) {
    const wp = await this.workoutPlanRepository.findOneBy({ id });

    if (!wp) {
      return null;
    }
    //
    // many to many fix
    //
    Object.assign(wp, updateWorkoutPlanDto);
    return await this.workoutPlanRepository.save(wp)
  }

  async remove(id: number) {
    const wp = await this.workoutPlanRepository.findOneBy({ id });

    if (!wp) {
      return null;
    }
    return await this.workoutPlanRepository.remove(wp);
  }
}
