import { Module } from '@nestjs/common';
import { CakesController } from '../cakes/cakes.controller';
import { CakesService } from '../cakes/cakes-service.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cake } from './entities/cake.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cake])],
  controllers: [CakesController],
  providers: [CakesService],
})
export class CakesModule {}
