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

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP(6)' })
  createdAt: Date;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP(6)' })
  updateAt: string;

  @Column()
  question: string;

  @Column()
  answer: string;

  @Column()
  level: number;

  @ManyToMany(() => Category)
  @JoinTable()
  category: Category[];

  @Column({ default: true })
  isActive: boolean;
}
