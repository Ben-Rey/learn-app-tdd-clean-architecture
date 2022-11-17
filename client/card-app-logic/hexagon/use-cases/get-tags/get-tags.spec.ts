import FakeCardGateway from "../../../adapters/secondary/gateways/CardGateway.fake";
import { fakeTagList } from "../../../helpers/data.fake";
import { initReduxStore, ReduxStore } from "../../../store/reduxStore";
import { fetchTagList } from "./get-tags";

describe("Get Levels", () => {
  let store: ReduxStore;
  let cardGateway: FakeCardGateway;

  beforeEach(() => {
    cardGateway = new FakeCardGateway();
    store = initReduxStore({ cardGateway });
  });

  it("should get levels", async () => {
    cardGateway.setFakeTagList(fakeTagList);
    await store.dispatch(fetchTagList());
    expect(store.getState().cards.tags).toBe(fakeTagList);
  });
});
