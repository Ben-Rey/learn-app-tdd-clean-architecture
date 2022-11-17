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
import React from "react";
import useCreateCard from "../../card-app-logic/adapters/primary/hooks/useCreateCard";
interface Tag {
  name: string;
  color: string;
}

export default function CreateCard() {
  const {
    handleClickLevel,
    handleClickTag,
    handleClickRemoveTag,
    onQuestionChange,
    onAnswerChange,
    newCard,
    levels,
    tags,
  } = useCreateCard();

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
