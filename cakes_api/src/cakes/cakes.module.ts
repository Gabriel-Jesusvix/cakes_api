import { Module } from '@nestjs/common';
import { CakesController } from '../cakes/cakes.controller';
import { CakesServiceService } from '../cakes/cakes-service.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cake } from './entities/cake.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cake])],
  controllers: [CakesController],
  providers: [CakesServiceService],
})
export class CakesModule {}
