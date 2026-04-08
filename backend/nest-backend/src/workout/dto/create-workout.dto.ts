import {IsArray, IsInt, IsNotEmpty, IsString} from "class-validator";

export class CreateWorkoutDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsArray()
    @IsInt({ each: true })
    workoutPlanIds: number[];
}
