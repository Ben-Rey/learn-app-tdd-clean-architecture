import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CardPostResponse, ICard } from "../models/Card";

interface CardState {
  cardList: ICard[];
}

const initialState = { cardList: [] } as CardState;

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    fetchCards(state, action: PayloadAction<ICard[]>) {
      state.cardList = action.payload;
    },
    addNewCard(state, action: PayloadAction<CardPostResponse>) {
      const currentState = current(state);
    },
  },
});

export const { addNewCard, fetchCards } = cardSlice.actions;
export default cardSlice.reducer;
