import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICard } from "../models/Card";

interface CardGameState {
  cardList: ICard[];
  currentCardIndex: number;
}

const initialState: CardGameState = {
  cardList: [],
  currentCardIndex: 0,
};

const cardGameSlice = createSlice({
  name: "card-game",
  initialState: initialState,
  reducers: {
    initCardGame(state, action: PayloadAction<ICard[]>) {
      state.cardList = action.payload;
    },
    previous(state) {
      if (state.currentCardIndex === 0) return;
      state.currentCardIndex -= 1;
    },
    next(state) {
      if (state.currentCardIndex === state.cardList.length - 1) return;
      state.currentCardIndex += 1;
    },
  },
});

export const { initCardGame, next, previous } = cardGameSlice.actions;
export default cardGameSlice.reducer;
