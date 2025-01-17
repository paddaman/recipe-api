import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDto {
    @ApiProperty()
    readonly id: number;
    @ApiProperty()
    readonly rating: number;
    @ApiProperty()
    readonly comment: string;
    @ApiProperty()
    readonly author: string;
    @ApiProperty()
    readonly date: Date;
}