import { Level } from '../types/';

export class CreateCardDto {
  id: string;
  createdBy: string;
  createdAt: Date;
  updateAt: Date;
  question: string;
  answer: string;
  level: Level;
  theme: string[];
}
