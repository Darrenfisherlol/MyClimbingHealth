import { PartialType } from '@nestjs/mapped-types';
import { CreatePhysicalTherapistDto } from './create-physical-therapist.dto';

export class UpdatePhysicalTherapistDto extends PartialType(
  CreatePhysicalTherapistDto,
) {}
