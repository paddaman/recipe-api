import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DishesService } from './dishes.service';
import { CreateDishDto } from './dto/create-dish.dto';
import { Dish } from './schemas/dish.schema';

@ApiBearerAuth()
@ApiTags('dishes')
@Controller('dishes')
export class DishesController {
    constructor(private readonly dishesService: DishesService) {}

    @Post()
    @ApiOperation({ summary: 'Create a dish' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async create(@Body() createDishDto: CreateDishDto): Promise<CreateDishDto> {
        return await this.dishesService.create(createDishDto);
    }

    @Get()
    @ApiResponse({status: 200, description: 'The found all records', type: CreateDishDto, isArray: true})
    async findAll(): Promise<CreateDishDto[]> {
        return await this.dishesService.findAll();
    }

    @Get(':id')
    @ApiResponse({status: 200, description: 'The found record', type: CreateDishDto})
    async findOne(@Param('id') id: string): Promise<CreateDishDto> {
        return await this.dishesService.findOne(id);
    }
}