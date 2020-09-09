import {Model} from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Dish } from './schemas/dish.schema';
import { CreateDishDto } from './dto/create-dish.dto';

@Injectable()
export class DishesService {
    constructor(@InjectModel(Dish.name) private dishModel: Model<Dish>) {}

    async create(createDishDto: CreateDishDto): Promise<CreateDishDto> {
        const createdDish = new this.dishModel(createDishDto);
        return createdDish.save();
    }

    async findAll(): Promise<CreateDishDto[]> {
        return this.dishModel.find({}, { __v: 0 }).exec();
    }

    async findOne(id: string): Promise<CreateDishDto> {
        return this.dishModel.findById(id, { __v: 0 }).exec();
    }
}
