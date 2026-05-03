import { IsNotEmpty, IsString } from 'class-validator';

export class LinkPtDto {
  @IsString()
  @IsNotEmpty()
  ptCode: string;
}
