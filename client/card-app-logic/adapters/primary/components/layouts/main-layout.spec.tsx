import MainLayout from "./main-layout";
import { render, screen } from "../../../../../test-utils";

const page = <></>;

describe("MainLayout", () => {
  it("should render a navbar", async () => {
    await render(<MainLayout>{page}</MainLayout>);
    await screen.getByTestId("nav-main-layout");
  });
});
