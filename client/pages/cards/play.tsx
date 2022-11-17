import { Button, Flex, useColorModeValue } from "@chakra-ui/react";
import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fakeCardList } from "../../card-app-logic/helpers/data.fake";
import {
  initCardGame,
  previous,
  next,
} from "../../card-app-logic/hexagon/reducers/gameSlice";
import { AppDispatch, AppState } from "../../card-app-logic/store";
import Card from "../../components/card/GameCard";

const Play = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { cardList, currentCardIndex } = useSelector(
    (state: AppState) => state.cardGame
  );
  const [showAnswer, setShowAnswer] = useState(false);

  const islastCard = currentCardIndex === cardList.length - 1;
  const isFirstCard = currentCardIndex === 0;
  const toggleButtonLabel = showAnswer ? "Hidde Answer" : "Show Answer";

  const toggleAnswer = () => {
    setShowAnswer((prev) => !prev);
  };

  const selectCard = (action: ActionCreatorWithoutPayload) => {
    dispatch(action());
    setShowAnswer(false);
  };

  useEffect(() => {
    dispatch(initCardGame(fakeCardList));
  }, [dispatch]);

  return (
    <Flex
      flexDirection="column"
      align="center"
      bg={useColorModeValue("bg.light", "bg.dark")}
      height="full"
      p="10"
    >
      {cardList.length > 0 && (
        <Card card={cardList[currentCardIndex]} showAnswer={showAnswer} />
      )}
      <Flex width="50%" justify={"space-between"} mt={5}>
        <Button onClick={toggleAnswer}>{toggleButtonLabel}</Button>
        <Button onClick={() => selectCard(previous)} disabled={isFirstCard}>
          Previous
        </Button>
        <Button onClick={() => selectCard(next)} disabled={islastCard}>
          Next
        </Button>
      </Flex>
    </Flex>
  );
};

export default Play;
