import { Level } from 'src/cards/types';

export class UpdateCardDto {
  question: string;
  answer: string;
  level: Level;
  theme: string[];
}
