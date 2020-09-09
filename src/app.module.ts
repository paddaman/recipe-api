import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DishesModule } from './dishes/dishes.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/restaurant'),
            DishesModule]
})
export class AppModule {}
