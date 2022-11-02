import { AppThunk } from "../../../store";
import { ICard } from "../../models/Card";
import { fetchCards } from "../../reducers/cardSlice";

export const fetchCardList =
  (): AppThunk =>
  async (dispatch, _, { cardGateway }) => {
    const response: ICard[] = await cardGateway.getCardList();
    dispatch(fetchCards(response));
  };
