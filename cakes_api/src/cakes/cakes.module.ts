import { Module } from '@nestjs/common';
import { CakesController } from '../cakes/cakes.controller';
import { CakesServiceService } from '../cakes/cakes-service.service';

@Module({
  controllers: [CakesController],
  providers: [CakesServiceService],
})
export class CakesModule {}
