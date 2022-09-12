import { Level } from '../types';

export interface ICard {
  id: string;
  createdBy: string;
  createdAt: Date;
  updateAt: Date;
  question: string;
  answer: string;
  level: Level;
  theme: string[];
  category: string;
}
