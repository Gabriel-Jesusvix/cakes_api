import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CakesController } from './cakes/cakes.controller';

@Module({
  imports: [],
  controllers: [AppController, CakesController],
  providers: [AppService],
})
export class AppModule {}
