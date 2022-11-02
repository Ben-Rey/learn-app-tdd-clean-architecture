import { ICard } from "../hexagon/models/Card";

export interface AppState {
  cards: {
    cardList: ICard[];
  };
  cardGame: {
    cardList: ICard[];
    currentCardIndex: number;
  };
}
