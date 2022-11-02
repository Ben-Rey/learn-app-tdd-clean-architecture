import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { initReduxStore } from "../card-app-logic/store/reduxStore";
import FakeCardGateway from "../card-app-logic/adapters/secondary/gateways/CardGateway.fake";
import { fakeCardList } from "../card-app-logic/helpers/data.fake";
import { Provider } from "react-redux";
import SidebarWithHeader from "../components/sidebar/Sidebar";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  pageProps: any;
};
const cardGateway = new FakeCardGateway();
cardGateway.setFakeCardList(fakeCardList);
const store = initReduxStore({ cardGateway });

function MyApp({ Component, pageProps }: AppPropsWithLayout): JSX.Element {
  // const getLayout = Component.getLayout ?? ((page: any) => page);

  // return getLayout(
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <SidebarWithHeader>
          <Component {...pageProps} />
        </SidebarWithHeader>
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
