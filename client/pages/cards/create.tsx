import {
  Input,
  FormLabel,
  FormControl,
  Center,
  VStack,
  HStack,
  Button,
  Tag,
  TagCloseButton,
  TagLabel,
  Select,
} from "@chakra-ui/react";
import React, { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ILevel, ITag } from "../../card-app-logic/hexagon/models/Card";
import { CardPost } from "../../card-app-logic/hexagon/models/CardPost";
import { fetchLevelsList } from "../../card-app-logic/hexagon/use-cases/get-levels/get-levels";
import { fetchTagList } from "../../card-app-logic/hexagon/use-cases/get-tags/get-tags";
import { AppDispatch, AppState } from "../../card-app-logic/store";

interface Tag {
  name: string;
  color: string;
}

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

export default function CreateCard() {
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
    console.log("here");
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

  return (
    <>
      <Center marginTop={"40px"} padding="15px" borderRadius={"15px"}>
        <VStack
          spacing={2}
          border="1px"
          borderColor="gray.200"
          boxShadow={"lg"}
          padding={5}
          borderRadius={15}
        >
          <FormControl padding={3} borderRadius={15}>
            <FormLabel>Question</FormLabel>
            <Input
              type="text"
              value={newCard.question || ""}
              onChange={(e) => onQuestionChange(e.target.value)}
            />
          </FormControl>

          <FormControl
            paddingLeft="10px"
            borderRadius={"15px"}
            paddingBottom="10px"
            paddingRight="10px"
          >
            <FormLabel>Réponse</FormLabel>
            <Input
              type="text"
              value={newCard.answer || ""}
              onChange={(e) => onAnswerChange(e.target.value)}
            />
          </FormControl>

          <HStack spacing={4}>
            {levels.map((level) => (
              <Button
                onClick={() => handleClickLevel(level)}
                key={level.niveau}
                isActive={level.id === newCard.level?.id}
                border="1px solid gray"
              >
                {level.id}
              </Button>
            ))}
          </HStack>

          <Select placeholder="Choose Tag" onChange={handleClickTag}>
            {tags.map((tag, index) => {
              if (!newCard.tag.includes(tag))
                return (
                  <option key={tag.name} value={index}>
                    {tag.name}
                  </option>
                );
            })}
          </Select>
          <HStack spacing={4}>
            {newCard.tag.map((tag) => (
              <Tag size="md" key={tag.name} colorScheme={tag.color}>
                <TagLabel>{tag.name}</TagLabel>
                <TagCloseButton onClick={() => handleClickRemoveTag(tag)} />
              </Tag>
            ))}
          </HStack>
        </VStack>
      </Center>
    </>
  );
}
