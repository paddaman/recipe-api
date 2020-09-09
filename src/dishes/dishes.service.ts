import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Dish } from './schemas/dish.schema';
import { CreateDishDto } from './dto/create-dish.dto';

@Injectable()
export class DishService {
    constructor(@InjectModel(Dish.name) private dishModel: Model<Dish>) {}

    async create(createDishDto: CreateDishDto): Promise<Dish> {
        const createdDish = new this.dishModel(createDishDto);
        return createdDish.save();
    }

    async findAll(): Promise<Dish[]> {
        return this.dishModel.find().exec();
    }
}
