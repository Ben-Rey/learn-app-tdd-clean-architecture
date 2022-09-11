import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  OneToOne,
  JoinTable,
} from 'typeorm';
import { User } from '../../users/user.entity';
import { Category } from './category.entity';

@Entity()
export class Card {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => User)
  createdBy: string;

  @Column({ type: 'date' })
  createdAt: string;

  @Column({ type: 'date' })
  updateAt: string;

  @Column()
  question: string;

  @Column()
  answer: string;

  @Column()
  level: string;

  @ManyToMany(() => Category, (category) => category.card)
  @JoinTable()
  category: Category[];

  @Column({ default: true })
  isActive: boolean;
}
