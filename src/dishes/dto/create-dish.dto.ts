import { ApiProperty } from '@nestjs/swagger';
import { CreateCommentDto } from './create-comment.dto'
import {Schema} from "@nestjs/mongoose";

@Schema()
export class CreateDishDto {
    @ApiProperty()
    readonly id: number;
    @ApiProperty()
    readonly name: string;
    @ApiProperty()
    readonly image: string;
    @ApiProperty()
    readonly category: string;
    @ApiProperty()
    readonly label: string;
    @ApiProperty()
    readonly price: number;
    @ApiProperty()
    readonly description: string;
    @ApiProperty()
    readonly comments: CreateCommentDto[];
}