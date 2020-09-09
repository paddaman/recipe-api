import {Prop, raw, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Dish extends Document {

    @Prop()
    id: number;

    @Prop()
    name: string;

    @Prop()
    image: string;

    @Prop()
    category: string;

    @Prop()
    label: string;

    @Prop()
    price: number;

    @Prop()
    description: string;

    @Prop(raw([{
        id: {type: Number},
        rating: {type: Number},
        comment: {type: String},
        author: {type: String},
        date: {type: Date}
    }]))
    comments: Record<string, any>[];
}

export const DishSchema = SchemaFactory.createForClass(Dish);