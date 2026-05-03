import { IsArray, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateWorkoutPlanDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    /** IDs of workouts to include in this plan. All must belong to the calling PT. */
    @IsOptional()
    @IsArray()
    @IsInt({ each: true })
    workoutIds?: number[];
}
