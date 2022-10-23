import { CardGateway } from "../../../hexagon/gateways/cardGateway";
import { CardPostResponse, ICard } from "../../../hexagon/models/Card";

export default class FakeCardGateway implements CardGateway {
  private _cardPostResponse: CardPostResponse | null = null;
  private _cardList: ICard[] = [];

  getCardList(): Promise<ICard[]> {
    return new Promise((resolve) => {
      resolve(this._cardList);
    });
  }

  createCard(): Promise<CardPostResponse> {
    return new Promise((resolve) => {
      resolve(this._cardPostResponse!);
    });
  }

  setFakeCardPostResponse(cardPostResponse: CardPostResponse) {
    this._cardPostResponse = cardPostResponse;
  }

  setFakeCardList(cardList: ICard[]) {
    this._cardList = cardList;
  }
}
