import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCardList } from "../../card-app-logic/hexagon/use-cases/create-card";
import { AppDispatch, AppState } from "../../card-app-logic/store";
import { List, ListItem, ListIcon, Box, Badge, Flex } from "@chakra-ui/react";
import Card from "../../components/card/card";

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
