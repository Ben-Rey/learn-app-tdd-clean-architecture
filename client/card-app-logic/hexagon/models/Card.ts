interface CardPostResponseId {
  id: string;
}
export interface CardPostResponse {
  identifiers: CardPostResponseId[];
}

export type Level = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface ICard {
  id: string;
  createdBy: string;
  createdAt?: Date | string;
  updateAt?: Date | string;
  question: string;
  answer: string;
  level: Level;
  tag: string[];
  category: string[];
  vote: number;
  isActive: boolean;
}
