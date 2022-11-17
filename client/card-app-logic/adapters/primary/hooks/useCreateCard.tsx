import { useReducer, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ILevel, ITag } from "../../../hexagon/models/Card";
import { CardPost } from "../../../hexagon/models/CardPost";
import { fetchLevelsList } from "../../../hexagon/use-cases/get-levels/get-levels";
import { fetchTagList } from "../../../hexagon/use-cases/get-tags/get-tags";
import { AppDispatch, AppState } from "../../../store";

const initialStateNewCard = {
  question: "",
  answer: "",
  level: null,
  tag: [],
  category: [],
};

function init(_initialStateNewCard: CardPost) {
  return _initialStateNewCard;
}

type newCardActionType =
  | "addTag"
  | "removeTag"
  | "changeLevel"
  | "changeQuestion"
  | "changeAnswer"
  | "reset";

function newCardReducer(
  state: CardPost,
  action: { type: newCardActionType; payload: any }
) {
  switch (action.type) {
    case "addTag":
      return { ...state, tag: [...state.tag, action.payload] };
    case "removeTag":
      const newTagList = state.tag.filter((tag) => tag !== action.payload);
      return { ...state, tag: newTagList };
    case "changeLevel":
      return { ...state, level: action.payload };
    case "changeQuestion":
      return { ...state, question: action.payload };
    case "changeAnswer":
      return { ...state, answer: action.payload };
    case "reset":
      init(action.payload);
    default:
      throw new Error();
  }
}

export default function useCreateCard() {
  const dispatch = useDispatch<AppDispatch>();
  const levels = useSelector((state: AppState) => state.cards.levels);
  const tags = useSelector((state: AppState) => state.cards.tags);
  const [newCard, dispatchNewCard] = useReducer(
    newCardReducer,
    initialStateNewCard,
    init
  );

  useEffect(() => {
    dispatch(fetchLevelsList());
    dispatch(fetchTagList());
  }, [dispatch]);

  function handleClickLevel(level: ILevel) {
    dispatchNewCard({ type: "changeLevel", payload: level });
  }

  function handleClickTag(event: React.ChangeEvent<HTMLSelectElement>) {
    const index = parseInt(event.target.value);
    dispatchNewCard({ type: "addTag", payload: tags[index] });
  }

  function handleClickRemoveTag(tagToRemove: ITag) {
    dispatchNewCard({ type: "removeTag", payload: tagToRemove });
  }

  function onQuestionChange(question: string) {
    dispatchNewCard({ type: "changeQuestion", payload: question });
  }

  function onAnswerChange(question: string) {
    dispatchNewCard({ type: "changeQuestion", payload: question });
  }

  return {
    handleClickLevel,
    handleClickTag,
    handleClickRemoveTag,
    onQuestionChange,
    onAnswerChange,
    newCard,
    levels,
    tags,
  };
}
