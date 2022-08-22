import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cakes')
export class Cake {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  forUntil: string;

  @Column()
  image: string;
}
