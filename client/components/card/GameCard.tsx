import { Badge, Box } from "@chakra-ui/react";
import { ICard } from "../../card-app-logic/hexagon/models/Card";

interface WrapperProps {
  children: React.ReactNode;
  [x: string]: any;
}

function Wrapper({ children, ...rest }: WrapperProps) {
  return (
    <Box
      width={"full"}
      maxWidth={500}
      m={2}
      p={10}
      border={1}
      borderColor="black"
      borderStyle="solid"
      rounded="3xl"
      {...rest}
    >
      {children}
    </Box>
  );
}

interface GameCardProps {
  card: ICard;
  showAnswer?: boolean;
}

export default function GameCard({ card, showAnswer = false }: GameCardProps) {
  return (
    <>
      <Wrapper bg="greeny.300" color="text.dark">
        {card.tag.map((tag) => (
          <Badge key={tag} borderRadius="full" px="2" mr={2} colorScheme="teal">
            {tag}
          </Badge>
        ))}
        <Box mt={5}>{card.question}</Box>
      </Wrapper>

      <Wrapper bg="greeny.100" color="text.light">
        <Box>{showAnswer ? card.answer : "Answer"}</Box>
      </Wrapper>
    </>
  );
}
