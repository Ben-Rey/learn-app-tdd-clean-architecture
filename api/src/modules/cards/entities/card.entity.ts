import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  OneToOne,
  JoinTable,
} from 'typeorm';
import { User } from '../../users/user.entity';
import { Category } from '../../categories/entities/category.entity';

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

  @Column()
  vote: number;

  @ManyToMany(() => Category)
  // @JoinTable({
  //   name: 'cards_categories', // table name for the junction table of this relation
  //   joinColumn: {
  //     name: 'question',
  //     referencedColumnName: 'id',
  //   },
  //   inverseJoinColumn: {
  //     name: 'category',
  //     referencedColumnName: 'id',
  //   },
  // })
  category: Category[];

  @Column({ default: true })
  isActive: boolean;
}
