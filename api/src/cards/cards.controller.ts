import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { CardsService } from './cards.service';
import { CreateCardDto, UpdateCardDto } from './dto';

@Controller('cards')
export class CardsController {
  constructor(private cardsService: CardsService) {}

  @Post()
  async create(@Body() createCardDto: CreateCardDto) {
    try {
      return await this.cardsService.create(createCardDto);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  @Get()
  async getAll() {
    return await this.cardsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.cardsService.findOne(id);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCardDto: UpdateCardDto) {
    try {
      return await this.cardsService.update(id, updateCardDto);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.cardsService.removeOne(id);
    } catch (error) {
      throw new NotFoundException();
    }
  }
}
