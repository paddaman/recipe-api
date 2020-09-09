import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Comment } from './comment.schema'

@Schema({versionKey: false})
export class Dish extends Document {
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
    @Prop()
    comments: Comment[];
}

export const DishSchema = SchemaFactory.createForClass(Dish);