import { AppThunk } from "../../../store";
import { ITag } from "../../models/Card";
import { fetchTags } from "../../reducers/cardSlice";

export const fetchTagList =
  (): AppThunk =>
  async (dispatch, _, { cardGateway }) => {
    const response: ITag[] = await cardGateway.getTagList();
    dispatch(fetchTags(response));
  };
