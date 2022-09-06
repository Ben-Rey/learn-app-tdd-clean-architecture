import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('cards')
export class CardsController {
  @Post()
  create(): string {
    return 'This action adds a new card';
  }

  @Get()
  getAll(): string {
    return 'Get all cards';
  }

  //   @Get(':id')
  //   findOne(@Param() params): string {
  //     console.log(params.id);
  //     return `This action returns a #${params.id} card`;
  //   }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} card`;
  }

  //   @Get('ab*cd')
  //   findAll() {
  //     return 'This route uses a wildcard';
  //   }
}
