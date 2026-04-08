import {IsArray, IsInt, IsNotEmpty, IsString} from "class-validator";

export class CreateWorkoutPlanDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsArray()
    @IsInt({ each: true })
    workoutIds: number[];
}
