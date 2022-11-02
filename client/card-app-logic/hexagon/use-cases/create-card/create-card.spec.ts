import FakeCardGateway from "../../../adapters/secondary/gateways/CardGateway.fake";
import { initReduxStore, ReduxStore } from "../../../store/reduxStore";
import { createNewCard } from "./create-card";
import { fakeCardList, fakepostCardReturn } from "../../../helpers/data.fake";

describe("Create card", () => {
  let cardGateway: FakeCardGateway;
  let store: ReduxStore;

  beforeEach(() => {
    cardGateway = new FakeCardGateway();
    store = initReduxStore({ cardGateway });
  });

  it("should create a card", async () => {
    cardGateway.setFakeCardPostResponse(fakepostCardReturn);
    await store.dispatch(createNewCard(fakeCardList[0]));
    expect(await cardGateway.createCard()).toStrictEqual(fakepostCardReturn);
  });
});
