import {
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  Param,
  Patch,
  Post,
  Request,
} from '@nestjs/common';
import { WorkoutPlanService } from './workout-plan.service';
import { CreateWorkoutPlanDto } from './dto/create-workout-plan.dto';
import { UpdateWorkoutPlanDto } from './dto/update-workout-plan.dto';
import { PhysicalTherapistService } from '../physical-therapist/physical-therapist.service';

type ReqWithUser = { user: { sub: number } };

@Controller('workout-plan')
export class WorkoutPlanController {
  constructor(
    private readonly workoutPlanService: WorkoutPlanService,
    private readonly physicalTherapistService: PhysicalTherapistService,
  ) {}

  private async ptIdOrThrow(userId: number): Promise<number> {
    const pt = await this.physicalTherapistService.findByUserId(userId);
    if (!pt) {
      throw new ForbiddenException('Only PTs can manage workout plans');
    }
    return pt.id;
  }

  @Post()
  async create(@Request() req: ReqWithUser, @Body() dto: CreateWorkoutPlanDto) {
    const ptId = await this.ptIdOrThrow(req.user.sub);
    return this.workoutPlanService.create(dto, ptId);
  }

  @Get()
  async findAll(@Request() req: ReqWithUser) {
    const ptId = await this.ptIdOrThrow(req.user.sub);
    return this.workoutPlanService.findAllForPt(ptId);
  }

  @Get(':id')
  async findOne(@Request() req: ReqWithUser, @Param('id') id: string) {
    const ptId = await this.ptIdOrThrow(req.user.sub);
    return this.workoutPlanService.findOneOwned(+id, ptId);
  }

  @Patch(':id')
  async update(
    @Request() req: ReqWithUser,
    @Param('id') id: string,
    @Body() dto: UpdateWorkoutPlanDto,
  ) {
    const ptId = await this.ptIdOrThrow(req.user.sub);
    return this.workoutPlanService.update(+id, dto, ptId);
  }

  @Delete(':id')
  async remove(@Request() req: ReqWithUser, @Param('id') id: string) {
    const ptId = await this.ptIdOrThrow(req.user.sub);
    return this.workoutPlanService.remove(+id, ptId);
  }
}
