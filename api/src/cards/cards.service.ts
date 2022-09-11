import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CreateCardDto, UpdateCardDto } from './dto';
import { Card } from './entities/card.entity';
import { ICard } from './interfaces/card.interface';

@Injectable()
export class CardsService {
  constructor(private dataSource: DataSource) {}

  private cards: Card[] = [];

  create(_card: CreateCardDto) {
    // this.cards.push(_card);
    return _card;
  }

  async findAll() {
    const cards: ICard[] = await this.dataSource.manager.find('cards');
    console.table(cards);

    return cards;
  }

  findOne(_id: string): Card {
    return this.cards.find((card) => card.id === _id);
  }

  update(_id: string, _card: UpdateCardDto) {
    // this.cards = this.cards.map((card) => {
    //   if (card.id === _id) return { ...card, ..._card };
    // });
  }

  removeOne(_id: string) {
    this.cards = this.cards.filter((card) => card.id !== _id);
  }
}
