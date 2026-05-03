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
import { WorkoutService } from './workout.service';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';
import { PhysicalTherapistService } from '../physical-therapist/physical-therapist.service';

type ReqWithUser = { user: { sub: number } };

@Controller('workout')
export class WorkoutController {
  constructor(
    private readonly workoutService: WorkoutService,
    private readonly physicalTherapistService: PhysicalTherapistService,
  ) {}

  private async ptIdOrThrow(userId: number): Promise<number> {
    const pt = await this.physicalTherapistService.findByUserId(userId);
    if (!pt) {
      throw new ForbiddenException('Only PTs can manage workouts');
    }
    return pt.id;
  }

  @Post()
  async create(@Request() req: ReqWithUser, @Body() dto: CreateWorkoutDto) {
    const ptId = await this.ptIdOrThrow(req.user.sub);
    return this.workoutService.create(dto, ptId);
  }

  @Get()
  async findAll(@Request() req: ReqWithUser) {
    const ptId = await this.ptIdOrThrow(req.user.sub);
    return this.workoutService.findAllForPt(ptId);
  }

  @Get(':id')
  async findOne(@Request() req: ReqWithUser, @Param('id') id: string) {
    const ptId = await this.ptIdOrThrow(req.user.sub);
    return this.workoutService.findOneOwned(+id, ptId);
  }

  @Patch(':id')
  async update(
    @Request() req: ReqWithUser,
    @Param('id') id: string,
    @Body() dto: UpdateWorkoutDto,
  ) {
    const ptId = await this.ptIdOrThrow(req.user.sub);
    return this.workoutService.update(+id, dto, ptId);
  }

  @Delete(':id')
  async remove(@Request() req: ReqWithUser, @Param('id') id: string) {
    const ptId = await this.ptIdOrThrow(req.user.sub);
    return this.workoutService.remove(+id, ptId);
  }
}
