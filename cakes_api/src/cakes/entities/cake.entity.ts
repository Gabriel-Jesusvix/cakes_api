import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export class Cake {
  name: string;
  description: string;
  forUntil: string;
  image: string;
}
