import { IsString } from 'class-validator';
export class CreateCakesDto {
  @IsString()
  name: string;
  @IsString()
  description: string;
  @IsString()
  forUntil: string;
  @IsString()
  image: string;
}
