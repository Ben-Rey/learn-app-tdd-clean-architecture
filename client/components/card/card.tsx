import { Badge, Box } from "@chakra-ui/react";
import { ICard } from "../../card-app-logic/hexagon/models/Card";

interface Props {
  card: ICard;
}

export default function Card({ card }: Props) {
  return (
    <Box
      key={card.id}
      border={1}
      borderColor="black"
      borderStyle="solid"
      m={2}
      p={2}
      width={"fit-content"}
    >
      {card.tag.map((t) => (
        <Badge key={t} borderRadius="full" px="2" colorScheme="teal">
          {t}
        </Badge>
      ))}
      <Box>{card.question}</Box>
    </Box>
  );
}
