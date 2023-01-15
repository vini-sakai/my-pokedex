import { UseCasesModule } from '@application/usecases/usecases.module';
import { MongoModule } from '@infra/mongo/mongo.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [AppModule, UseCasesModule, MongoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
