import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Workout } from './entities/workout.entity';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';

@Injectable()
export class WorkoutService {
    constructor(
        @InjectRepository(Workout)
        private readonly workoutRepository: Repository<Workout>,
    ) {}

    async create(dto: CreateWorkoutDto, physicalTherapistId: number) {
        const workout = this.workoutRepository.create({
            name: dto.name,
            physicalTherapistId,
        });
        return this.workoutRepository.save(workout);
    }

    async findAllForPt(physicalTherapistId: number) {
        return this.workoutRepository.find({
            where: { physicalTherapistId },
            order: { id: 'ASC' },
        });
    }

    async findOneOwned(id: number, physicalTherapistId: number) {
        const workout = await this.workoutRepository.findOneBy({
            id,
            physicalTherapistId,
        });
        if (!workout) {
            throw new NotFoundException('Workout was not found');
        }
        return workout;
    }

    async update(
        id: number,
        dto: UpdateWorkoutDto,
        physicalTherapistId: number,
    ) {
        const workout = await this.findOneOwned(id, physicalTherapistId);
        if (dto.name !== undefined) workout.name = dto.name;
        return this.workoutRepository.save(workout);
    }

    async remove(id: number, physicalTherapistId: number) {
        const workout = await this.findOneOwned(id, physicalTherapistId);
        await this.workoutRepository.remove(workout);
    }
}
