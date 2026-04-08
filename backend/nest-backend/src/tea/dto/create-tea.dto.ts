import {IsString, IsNotEmpty} from 'class-validator';

export class CreateTeaDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    type: string;

    @IsString()
    @IsNotEmpty()
    description: string;
}
