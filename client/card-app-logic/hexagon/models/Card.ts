interface CardPostResponseId {
  id: string;
}
export interface CardPostResponse {
  identifiers: CardPostResponseId[];
}

export interface ILevel {
  id: number;
  niveau: string;
  color: string;
}

export interface ITag {
  id: number;
  name: string;
  color: string;
}

export interface ICard {
  id: string;
  createdBy: string;
  createdAt?: Date | string;
  updateAt?: Date | string;
  question: string;
  answer: string;
  level: ILevel;
  tag: string[];
  category: string[];
  vote: number;
  isActive: boolean;
}
