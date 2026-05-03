import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

import { WorkoutPlan } from './entities/workout-plan.entity';
import { Workout } from '../workout/entities/workout.entity';
import { CreateWorkoutPlanDto } from './dto/create-workout-plan.dto';
import { UpdateWorkoutPlanDto } from './dto/update-workout-plan.dto';

@Injectable()
export class WorkoutPlanService {
    constructor(
        @InjectRepository(WorkoutPlan)
        private readonly workoutPlanRepository: Repository<WorkoutPlan>,
        @InjectRepository(Workout)
        private readonly workoutRepository: Repository<Workout>,
    ) {}

    async create(dto: CreateWorkoutPlanDto, physicalTherapistId: number) {
        const workouts = await this.resolveOwnedWorkouts(
            dto.workoutIds,
            physicalTherapistId,
        );
        const plan = this.workoutPlanRepository.create({
            name: dto.name,
            physicalTherapistId,
            workouts,
        });
        return this.workoutPlanRepository.save(plan);
    }

    async findAllForPt(physicalTherapistId: number) {
        return this.workoutPlanRepository.find({
            where: { physicalTherapistId },
            relations: ['workouts'],
            order: { id: 'ASC' },
        });
    }

    async findOneOwned(id: number, physicalTherapistId: number) {
        const plan = await this.workoutPlanRepository.findOne({
            where: { id, physicalTherapistId },
            relations: ['workouts'],
        });
        if (!plan) {
            throw new NotFoundException('Workout plan was not found');
        }
        return plan;
    }

    async update(
        id: number,
        dto: UpdateWorkoutPlanDto,
        physicalTherapistId: number,
    ) {
        const plan = await this.findOneOwned(id, physicalTherapistId);
        if (dto.name !== undefined) plan.name = dto.name;
        if (dto.workoutIds !== undefined) {
            plan.workouts = await this.resolveOwnedWorkouts(
                dto.workoutIds,
                physicalTherapistId,
            );
        }
        return this.workoutPlanRepository.save(plan);
    }

    async remove(id: number, physicalTherapistId: number) {
        const plan = await this.findOneOwned(id, physicalTherapistId);
        await this.workoutPlanRepository.remove(plan);
    }

    /** Loads workouts by id and rejects any that aren't owned by this PT. */
    private async resolveOwnedWorkouts(
        ids: number[] | undefined,
        physicalTherapistId: number,
    ): Promise<Workout[]> {
        if (!ids?.length) return [];
        const workouts = await this.workoutRepository.find({
            where: { id: In(ids), physicalTherapistId },
        });
        if (workouts.length !== ids.length) {
            throw new BadRequestException(
                'Some workouts were not found or do not belong to you',
            );
        }
        return workouts;
    }
}
