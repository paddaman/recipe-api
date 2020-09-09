import { ApiProperty } from '@nestjs/swagger';
import { CreateCommentDto } from './create-comment.dto'

export class CreateDishDto {
    @ApiProperty()
    readonly _id: string;
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
    @ApiProperty({type: CreateCommentDto, isArray: true})
    readonly comments: CreateCommentDto[];
}