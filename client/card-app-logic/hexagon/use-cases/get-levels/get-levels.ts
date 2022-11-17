import { AppThunk } from "../../../store";
import { ILevel } from "../../models/Card";
import { fetchLevels } from "../../reducers/cardSlice";

export const fetchLevelsList =
  (): AppThunk =>
  async (dispatch, _, { cardGateway }) => {
    const response: ILevel[] = await cardGateway.getLevelsList();
    dispatch(fetchLevels(response));
  };
