import FakeCardGateway from "../../../adapters/secondary/gateways/CardGateway.fake";
import { fakeLevelList } from "../../../helpers/data.fake";
import { initReduxStore, ReduxStore } from "../../../store/reduxStore";
import { fetchLevelsList } from "./get-levels";

describe("Get Levels", () => {
  let store: ReduxStore;
  let cardGateway: FakeCardGateway;

  beforeEach(() => {
    cardGateway = new FakeCardGateway();
    store = initReduxStore({ cardGateway });
  });

  it("should get levels", async () => {
    cardGateway.setFakeLevelsList(fakeLevelList);
    await store.dispatch(fetchLevelsList());
    expect(store.getState().cards.levels).toBe(fakeLevelList);
  });
});
