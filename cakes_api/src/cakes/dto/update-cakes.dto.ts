import { PartialType } from '@nestjs/mapped-types';
import { CreateCakesDto } from './create-cakes.dto';

export class UpdateCakesDto extends PartialType(CreateCakesDto) {}
