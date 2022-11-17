import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../../card-app-logic/store";
import { fetchCardList } from "../../card-app-logic/hexagon/use-cases/get-gards";
import { Flex } from "@chakra-ui/react";
import Card from "../../components/card/GameCard";

export default function CardList() {
  const dispatch = useDispatch<AppDispatch>();
  const cards = useSelector((state: AppState) => state.cards.cardList);

  useEffect(() => {
    dispatch(fetchCardList());
  });

  return (
    <Flex>
      {cards?.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </Flex>
  );
}
