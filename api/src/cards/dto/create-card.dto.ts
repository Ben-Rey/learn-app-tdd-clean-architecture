import { Category } from '../entities/category.entity';
import { Level } from '../types/';

export class CreateCardDto {
  id: string;
  createdBy: string;
  question: string;
  answer: string;
  level: Level;
  theme: string[];
  category: () => string;
}
