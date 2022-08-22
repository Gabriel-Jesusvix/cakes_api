import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CakesModule } from './cakes/cakes.module';

@Module({
  imports: [CakesModule, TypeOrmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
