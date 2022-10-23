import { CardPostResponse, ICard } from "../models/Card";

export interface CardGateway {
  createCard(card: ICard): Promise<CardPostResponse>;
  getCardList(): Promise<ICard[]>;
}
