import {Model} from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Dish } from './schemas/dish.schema';
import { CreateDishDto } from './dto/create-dish.dto';

@Injectable()
export class DishesService {
    constructor(@InjectModel(Dish.name) private dishModel: Model<Dish>) {}

    async create(createDishDto: CreateDishDto): Promise<Dish> {
        const createdDish = new this.dishModel(createDishDto);
        return createdDish.save();
    }

    async findAll(): Promise<Dish[]> {
        return this.dishModel.find({}, { projection: { _id: 0, __v: 0 } }).exec();
    }

    async findOne(id: number): Promise<Dish> {
        return this.dishModel.findOne({id: id}, { _id: 0, __v: 0 }).exec();
    }
}
