import { CardPostResponse, ICard, ILevel, ITag } from "../models/Card";
import { CardPost } from "../models/CardPost";

export interface CardGateway {
  createCard(card: CardPost): Promise<CardPostResponse>;
  getCardList(): Promise<ICard[]>;
  getLevelsList(): Promise<ILevel[]>;
  getTagList(): Promise<ITag[]>;
}
