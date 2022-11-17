import { AppThunk } from "../../../store/reduxStore";
import { CardPostResponse, ICard } from "../../models/Card";
import { CardPost } from "../../models/CardPost";
import { addNewCard, fetchCards } from "../../reducers/cardSlice";

export const createNewCard =
  (card: CardPost): AppThunk =>
  async (dispatch, _, { cardGateway }) => {
    await cardGateway.createCard(card);
  };
