import FakeCardGateway from "../../../adapters/secondary/gateways/CardGateway.fake";
import { ReduxStore, AppState, initReduxStore } from "../../../store";
import { fakeCardList } from "../../../helpers/data.fake";
import { initCardGame, next, previous } from "../../reducers/gameSlice";

describe("Play Game", () => {
  let cardGateway: FakeCardGateway;
  let store: ReduxStore;
  let initialState: AppState;

  beforeEach(() => {
    cardGateway = new FakeCardGateway();
    store = initReduxStore({ cardGateway });
    initialState = store.getState();
  });

  it("should init a game by adding a set of gards", () => {
    store.dispatch(initCardGame(fakeCardList));
    expect(store.getState()).toEqual({
      ...initialState,
      cardGame: {
        cardList: fakeCardList,
        currentCardIndex: 0,
      },
    });
  });

  it("should increment curent state when next is called and decrement when prvious is called", () => {
    expect(store.getState().cardGame.currentCardIndex).toEqual(0);
    store.dispatch(next());
    expect(store.getState().cardGame.currentCardIndex).toEqual(1);
    store.dispatch(next());
    expect(store.getState().cardGame.currentCardIndex).toEqual(2);
    store.dispatch(previous());
    expect(store.getState().cardGame.currentCardIndex).toEqual(1);
    store.dispatch(previous());
    expect(store.getState().cardGame.currentCardIndex).toEqual(0);
    store.dispatch(previous());
    expect(store.getState().cardGame.currentCardIndex).toEqual(0);
  });
});
