import { Injectable } from '@nestjs/common';
import { UpdateCardDto } from './dto';
import { Card } from './interfaces/card.interface';

@Injectable()
export class CardsService {
  private cards: Card[] = [];

  create(_card: Card) {
    this.cards.push(_card);
    return _card;
  }

  findAll(): Card[] {
    return this.cards;
  }

  findOne(_id: string): Card {
    return this.cards.find((card) => card.id === _id);
  }

  update(_id: string, _card: UpdateCardDto) {
    this.cards = this.cards.map((card) => {
      if (card.id === _id) return { ...card, ..._card };
    });
  }

  removeOne(_id: string) {
    this.cards = this.cards.filter((card) => card.id !== _id);
  }
}
