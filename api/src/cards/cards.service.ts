import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { CreateCardDto, UpdateCardDto } from './dto';
import { Card } from './entities/card.entity';

@Injectable()
export class CardsService {
  constructor(
    @InjectRepository(Card) private cardRepository: Repository<Card>,
  ) {}

  async create(_card: CreateCardDto): Promise<InsertResult> {
    return this.cardRepository
      .createQueryBuilder()
      .insert()
      .into(Card)
      .values([_card])
      .execute();
  }

  async findAll(): Promise<Card[]> {
    return await this.cardRepository.find();
  }

  findOne(_id: string): Promise<Card> {
    return this.cardRepository.findOneOrFail({
      where: {
        id: _id,
      },
    });
  }

  async update(_id: string, _card: UpdateCardDto): Promise<UpdateResult> {
    return this.cardRepository
      .createQueryBuilder()
      .update(Card)
      .set(_card)
      .where('id = :id', { id: _id })
      .execute();
  }

  remove(_id: string): Promise<DeleteResult> {
    return this.cardRepository
      .createQueryBuilder()
      .delete()
      .from(Card)
      .where('id = :id', { id: _id })
      .execute();
  }
}
