import FakeCardGateway from "../../../adapters/secondary/gateways/CardGateway.fake";
import { initReduxStore, ReduxStore } from "../../../store/reduxStore";
import { AppState } from "../../../store/AppState";
import { createNewCard, fetchCardList } from "./create-card";
import { fakeCardList, fakepostCardReturn } from "../../../helpers/data.fake";

describe("Create card", () => {
  let cardGateway: FakeCardGateway;
  let store: ReduxStore;
  let initialState: AppState;

  beforeEach(() => {
    cardGateway = new FakeCardGateway();
    store = initReduxStore({ cardGateway });
    initialState = store.getState();
  });

  it("should fetch a list of card", async () => {
    cardGateway.setFakeCardList(fakeCardList);
    await store.dispatch(fetchCardList());

    expect(store.getState()).toEqual({
      ...initialState,
      cards: {
        cardList: fakeCardList,
      },
    });
  });

  it("should create a card", async () => {
    cardGateway.setFakeCardPostResponse(fakepostCardReturn);
    await store.dispatch(createNewCard(fakeCardList[0]));
    expect(await cardGateway.createCard()).toStrictEqual(fakepostCardReturn);
  });
});
