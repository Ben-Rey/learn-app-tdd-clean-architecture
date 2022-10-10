export type Level = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface ICard {
  id: string;
  createdBy: string;
  createdAt: Date;
  updateAt: Date;
  question: string;
  answer: string;
  level: Level;
  theme: string[];
  category: string[];
}
