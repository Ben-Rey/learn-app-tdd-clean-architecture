import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Card } from './card.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @ManyToMany((type) => Card, (card) => card.category)
  card: Card[];
}
