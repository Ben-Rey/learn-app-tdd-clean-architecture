import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CreateCardDto, UpdateCardDto } from './dto';
import { Card } from './entities/card.entity';
import { ICard } from './interfaces/card.interface';

@Injectable()
export class CardsService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(Card) private cardRepository: Repository<Card>,
  ) {}

  private cards: Card[] = [];

  async create(_card: CreateCardDto) {
    return this.dataSource
      .createQueryBuilder()
      .insert()
      .into(Card)
      .values([_card])
      .execute();
  }

  async findAll() {
    return await this.cardRepository.find();
  }

  findOne(id: string) {
    return this.cardRepository.findOneOrFail({
      where: {
        id: id,
      },
    });
  }

  async update(_id: string, _card: UpdateCardDto) {
    return this.cardRepository
      .createQueryBuilder()
      .update(Card)
      .set(_card)
      .where('id = :id', { id: _id })
      .execute();
  }

  removeOne(_id: string) {
    return this.cardRepository
      .createQueryBuilder()
      .delete()
      .from(Card)
      .where('id = :id', { id: _id })
      .execute();
  }
}
