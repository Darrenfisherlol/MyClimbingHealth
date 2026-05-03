import {
  IsString,
  IsNotEmpty,
  IsInt,
  IsPositive,
  IsEmail,
} from 'class-validator';

export class CreatePatientDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsInt()
  @IsPositive()
  physicalTherapistId: number;
}
