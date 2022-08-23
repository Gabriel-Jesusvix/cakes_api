import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { CakesService } from './cakes-service.service';
import { CreateCakesDto } from './dto/create-cakes.dto';
import { UpdateCakesDto } from './dto/update-cakes.dto';

@Controller('catalog')
export class CakesController {
  constructor(private readonly cakesService: CakesService) {}

  @Get('list')
  findAll() {
    return this.cakesService.findAll();
  }

  @Get('list:id')
  findById(@Param('id') id: string) {
    return this.cakesService.findByCake(id);
  }

  @Post()
  create(@Body() createCakeDto: CreateCakesDto) {
    return this.cakesService.createCake(createCakeDto);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() createCakeDto: UpdateCakesDto) {
    return this.cakesService.updateCake(id, createCakeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cakesService.deleteCake(id);
  }
}
