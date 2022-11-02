import { AppThunk } from "../../../store/reduxStore";
import { CardPostResponse, ICard } from "../../models/Card";
import { addNewCard, fetchCards } from "../../reducers/cardSlice";

export const createNewCard =
  (card: ICard): AppThunk =>
  async (dispatch, _, { cardGateway }) => {
    const response: CardPostResponse = await cardGateway.createCard(card);
    dispatch(addNewCard(response));
  };
