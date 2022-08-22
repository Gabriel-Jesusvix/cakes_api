import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCakesDto } from './dto/create-cakes.dto';
import { Cake } from './entities/cake.entity';

@Injectable()
export class CakesServiceService {
  constructor(
    @InjectRepository(Cake)
    private readonly cakeRepository: Repository<Cake>,
  ) {}

  findAll() {
    return this.cakeRepository.find();
  }

  findByCake(id: string) {
    const cakes = this.cakeRepository.findOne({
      where: id,
    });

    if (!cakes) {
      throw new NotFoundException('Bolo não encontrado');
    }
    return cakes;
  }

  createCake(cakesDto: CreateCakesDto) {
    const cakes = this.cakeRepository.create(cakesDto);
    if (cakes.name === '') {
      throw new HttpException('Por favor, preencha todos os campos', 404);
    }
    return this.cakeRepository.save(cakes);
  }
}
