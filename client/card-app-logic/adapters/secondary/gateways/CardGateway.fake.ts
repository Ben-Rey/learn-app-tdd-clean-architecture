import { CardGateway } from "../../../hexagon/gateways/cardGateway";
import {
  CardPostResponse,
  ICard,
  ILevel,
  ITag,
} from "../../../hexagon/models/Card";
import { CardPost } from "../../../hexagon/models/CardPost";

export default class FakeCardGateway implements CardGateway {
  private _cardPostResponse: CardPostResponse | null = null;
  private _cardList: ICard[] = [];
  private _levels: ILevel[] = [];
  private _tags: ITag[] = [];

  getCardList(): Promise<ICard[]> {
    return new Promise((resolve) => {
      resolve(this._cardList);
    });
  }

  createCard(card: CardPost): Promise<CardPostResponse> {
    return new Promise((resolve) => {
      resolve(this._cardPostResponse!);
    });
  }

  getLevelsList(): Promise<ILevel[]> {
    return new Promise((resolve) => {
      resolve(this._levels);
    });
  }

  getTagList(): Promise<ITag[]> {
    return new Promise((resolve) => {
      resolve(this._tags);
    });
  }

  setFakeCardPostResponse(cardPostResponse: CardPostResponse) {
    this._cardPostResponse = cardPostResponse;
  }

  setFakeCardList(cardList: ICard[]) {
    this._cardList = cardList;
  }

  setFakeLevelsList(levels: ILevel[]) {
    this._levels = levels;
  }

  setFakeTagList(tags: ITag[]) {
    this._tags = tags;
  }
}
