import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import { User } from 'src/users/entities/user.entity';

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
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
}

// id: string;
// createdBy: string;
// createdAt: Date;
// updateAt: Date;
// question: string;
// answer: string;
// level: Level;
// theme: string[];
