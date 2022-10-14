import FakeCardGateway from "../../../adapters/secondary/gateways/fakeCardGateway";

const fakeReturn = {
  identifiers: [
    {
      id: "9bb53266-002a-47c7-9b66-cc13bc4cf991",
    },
  ],
};

describe("Create card", () => {
  let cardGateway: FakeCardGateway;

  beforeEach(() => {
    cardGateway = new FakeCardGateway();
  });

  it("should create a card", async () => {
    expect(await cardGateway.createCard()).toStrictEqual(fakeReturn);
  });
});
