import {Patient} from "../../patient/entities/patient.entity";
import {IsNotEmpty, IsString} from "class-validator";

export class CreatePhysicalTherapistDto {
    @IsString()
    @IsNotEmpty()
    name: string;
}
