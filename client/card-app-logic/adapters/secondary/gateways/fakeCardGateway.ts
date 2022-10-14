import { CardGateway } from "../../../hexagon/gateways/cardGateway";
import { CardPostResponse } from "../../../hexagon/models/postCard";

export default class FakeCardGateway implements CardGateway {
  createCard(): Promise<CardPostResponse> {
    const fakeResult = new Promise<CardPostResponse>((resolve, reject) => {
      resolve({
        identifiers: [
          {
            id: "9bb53266-002a-47c7-9b66-cc13bc4cf991",
          },
        ],
      });
    });

    return fakeResult;
    // throw new Error("Method not implemented.");
  }
}
