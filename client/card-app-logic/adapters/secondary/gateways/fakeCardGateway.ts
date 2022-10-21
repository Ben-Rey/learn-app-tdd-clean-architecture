import { CardGateway } from "../../../hexagon/gateways/cardGateway";
import { CardPostResponse } from "../../../hexagon/models/postCard";

export default class FakeCardGateway implements CardGateway {
  private cardPostResponse: CardPostResponse | null = null;
  createCard(): Promise<CardPostResponse> {
    const fakeResult = new Promise<CardPostResponse>((resolve, reject) => {
      resolve(this.cardPostResponse!);
    });
    return fakeResult;
  }

  setFakeResponse(cardPostResponse: CardPostResponse) {
    this.cardPostResponse = cardPostResponse;
  }
}
