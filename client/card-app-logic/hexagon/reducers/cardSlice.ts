import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICard, ILevel, ITag } from "../models/Card";

interface CardState {
  cardList: ICard[];
  levels: ILevel[];
  tags: ITag[];
}

const initialState = { cardList: [], levels: [], tags: [] } as CardState;

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    fetchCards(state, action: PayloadAction<ICard[]>) {
      state.cardList = action.payload;
    },
    addNewCard(state, action: PayloadAction<ICard>) {
      state.cardList.push(action.payload);
    },
    fetchLevels(state, action: PayloadAction<ILevel[]>) {
      state.levels = action.payload;
    },
    fetchTags(state, action: PayloadAction<ITag[]>) {
      state.tags = action.payload;
    },
  },
});

export const { addNewCard, fetchCards, fetchLevels, fetchTags } =
  cardSlice.actions;
export default cardSlice.reducer;
