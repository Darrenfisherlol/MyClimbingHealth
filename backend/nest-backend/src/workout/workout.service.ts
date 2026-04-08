import {Injectable, NotFoundException} from '@nestjs/common';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';
import {InjectRepository} from "@nestjs/typeorm";

import {In, Repository} from "typeorm";
import {Workout} from "./entities/workout.entity";
import {WorkoutPlan} from "../workout-plan/entities/workout-plan.entity";

@Injectable()
export class WorkoutService {

  constructor(
      @InjectRepository(WorkoutPlan)
      private readonly workoutPlanRepository: Repository<WorkoutPlan>,
      @InjectRepository(Workout)
      private readonly workoutRepository: Repository<Workout>,
  ) {}
  async create(createWorkoutDto: CreateWorkoutDto) {
    const {name, workoutPlanIds} = createWorkoutDto;

    const workouts = workoutPlanIds?.length
        ? await this.workoutRepository.findBy({ id: In(workoutPlanIds) })
        : [];

    const workoutPlan = this.workoutPlanRepository.create({ name, workouts });
    return await this.workoutPlanRepository.save(workoutPlan);
  }

  async findAll() {
    return await this.workoutRepository.find();
  }

  async findOne(id: number) {
    const workout =  await this.workoutRepository.findOneBy({ id });

    if (!workout) {
      throw new NotFoundException('Workout was not found');
    }
    return workout;
  }

  async update(id: number, updateWorkoutDto: UpdateWorkoutDto) {
    const workout = await this.workoutRepository.findOneBy({ id });

    if (!workout) {
      return null;
    }
    //
    // many to many fix
    //
    Object.assign(workout, updateWorkoutDto);
    return await this.workoutRepository.save(workout)
  }

  async remove(id: number) {
    const workout = await this.workoutRepository.findOneBy({ id });

    if (!workout) {
      return null;
    }
    return await this.workoutRepository.remove(workout);
  }
}
