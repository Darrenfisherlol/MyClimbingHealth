import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

/** Self-update only (PATCH /users/me). Role is not user-editable on purpose. */
export class UpdateUserDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  @MinLength(8)
  password?: string;
}
