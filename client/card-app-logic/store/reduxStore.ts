import {
  Action,
  AnyAction,
  configureStore,
  Store,
  ThunkAction,
  ThunkDispatch,
} from "@reduxjs/toolkit";
import { CurriedGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import { CardGateway } from "../hexagon/gateways/cardGateway";
import { AppState } from "./appState";
import cards from "../hexagon/reducers/cardSlice";
import cardGame from "../hexagon/reducers/gameSlice";

interface Dependencies {
  cardGateway: CardGateway;
}

export const initReduxStore = (dependencies: Partial<Dependencies>) => {
  return configureStore({
    reducer: {
      cards,
      cardGame,
    },
    devTools: true,
    middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware<AppState>) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: dependencies,
        },
      }),
  });
};

export type ReduxStore = Store<AppState> & {
  dispatch: ThunkDispatch<AppState, Dependencies, Action>;
};

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  Dependencies,
  AnyAction
>;

export type AppDispatch = ThunkDispatch<AppState, Dependencies, Action>;
