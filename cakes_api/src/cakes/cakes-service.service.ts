import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCakesDto } from './dto/create-cakes.dto';
import { UpdateCakesDto } from './dto/update-cakes.dto';
import { Cake } from './entities/cake.entity';

@Injectable()
export class CakesService {
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

  async updateCake(id: string, cakesDto: UpdateCakesDto) {
    const cakes = await this.cakeRepository.preload({
      id: +id,
      ...UpdateCakesDto,
    });

    if (!cakes) {
      throw new NotFoundException('Bolo não encontrado');
    }

    return this.cakeRepository.save(cakes);
  }

  async deleteCake(id: string) {
    const cake = await this.cakeRepository.findOne(id);
    if (!cake) {
      throw new NotFoundException('Bolo não encontrado');
    }

    return this.cakeRepository.remove(cake);
  }
}
