import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkoutPlanService } from './workout-plan.service';
import { CreateWorkoutPlanDto } from './dto/create-workout-plan.dto';
import { UpdateWorkoutPlanDto } from './dto/update-workout-plan.dto';

@Controller('workout-plan')
export class WorkoutPlanController {
  constructor(private readonly workoutPlanService: WorkoutPlanService) {}

  @Post()
  async create(@Body() createWorkoutPlanDto: CreateWorkoutPlanDto) {
    return await this.workoutPlanService.create(createWorkoutPlanDto);
  }

  @Get()
  async findAll() {
    return await this.workoutPlanService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.workoutPlanService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateWorkoutPlanDto: UpdateWorkoutPlanDto) {
    return await this.workoutPlanService.update(+id, updateWorkoutPlanDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.workoutPlanService.remove(+id);
  }
}
