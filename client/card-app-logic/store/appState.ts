import { ICard, ILevel, ITag } from "../hexagon/models/Card";

export interface AppState {
  cards: {
    cardList: ICard[];
    levels: ILevel[];
    tags: ITag[];
  };
  cardGame: {
    cardList: ICard[];
    currentCardIndex: number;
  };
}
