import {Prop, Schema} from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema()
export class Comment extends Document {
    @Prop()
    readonly id: number;
    @Prop()
    readonly rating: number;
    @Prop()
    readonly comment: string;
    @Prop()
    readonly author: string;
    @Prop()
    readonly date: Date;
}