import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  BadRequestException,
  NotFoundException,
  Patch,
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
  async findAll() {
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

  @Patch(':id')
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
      return this.cardsService.remove(id);
    } catch (error) {
      throw new NotFoundException();
    }
  }
}
