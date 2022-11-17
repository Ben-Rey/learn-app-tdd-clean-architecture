import FakeCardGateway from "../../../adapters/secondary/gateways/CardGateway.fake";
import { fakeCardList } from "../../../helpers/data.fake";
import { AppState } from "../../../store/appState";
import { ReduxStore, initReduxStore } from "../../../store/reduxStore";
import { fetchCardList } from "./get-cards";

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
        ...initialState.cards,
        cardList: fakeCardList,
      },
    });
  });
});
