import {
  Link,
  Input,
  Heading,
  FormLabel,
  Container,
  FormControl,
  FormHelperText,
  Box,
  Center,
  VStack,
  HStack,
  Radio,
  RadioGroup,
  Button,
  FormErrorMessage,
  Progress,
  Tag,
  TagCloseButton,
  TagLabel,
  Select,
  IconButton,
  Flex,
  Spacer,
  Square,
  Circle,
} from "@chakra-ui/react";
import React from "react";
import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import { useForm } from "react-hook-form";

interface Tag {
  name: string;
  color: string;
}

const tagsExample = [
  {
    name: "web3",
    color: "red",
  },
  {
    name: "clean code",
    color: "green",
  },
  {
    name: "test",
    color: "blue",
  },
  {
    name: "solidity",
    color: "yellow",
  },
];

const levelList = [
  {
    id: 1,
    niveau: "Ultra facile",
    color: "",
    isActive: true,
  },
  {
    id: 2,
    niveau: "Très facile",
    color: "",
    isActive: false,
  },
  {
    id: 3,
    niveau: "Assez facile",
    color: "",
    isActive: false,
  },
  {
    id: 4,
    niveau: "Facile",
    color: "",
    isActive: false,
  },
  {
    id: 5,
    niveau: "Moins facile",
    color: "",
    isActive: false,
  },
  {
    id: 6,
    niveau: "Moyen",
    color: "",
    isActive: false,
  },
  {
    id: 7,
    niveau: "Moyen +",
    color: "",
  },
  {
    id: 8,
    niveau: "Difficile",
    color: "",
    isActive: false,
  },
  {
    id: 9,
    niveau: "Très difficile",
    color: "",
    isActive: false,
  },
  {
    id: 10,
    niveau: "Master Level",
    color: "",
    isActive: false,
  },
];

export default function CreateCard() {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [tags, setTags] = useState<Tag[]>(() => tagsExample);
  const [levels, setLevels] = useState(levelList);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values: any) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  }

  function handleTagSelection(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectedTagName = event.target.value;
    const tagToAdd = tags.find((tag) => tag.name === selectedTagName);
    const newTagList = tags.filter((tag) => tag.name !== selectedTagName);
    if (tagToAdd) {
      setSelectedTags((tags) => [tagToAdd, ...tags]);
      setTags(newTagList);
    }
  }

  function handleRemoveTag(tagName: string) {
    const selectedTagName = tagName;

    const tagToRemove = selectedTags.find(
      (tag) => tag.name === selectedTagName
    );

    const newSelectedTagList = selectedTags.filter(
      (tag) => tag.name !== selectedTagName
    );

    if (tagToRemove) {
      setSelectedTags(newSelectedTagList);
      setTags((tags) => [tagToRemove, ...tags]);
    }
  }

  return (
    <>
      <Center
        marginTop={"40px"}
        padding="15px 15px 15px 15px"
        borderRadius={"15px 15px 15px 15px"}
      >
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
            <Input type="text" />
          </FormControl>

          <FormControl
            paddingLeft="10px"
            borderRadius={"15px 15px 15px 15px"}
            paddingBottom="10px"
            paddingRight="10px"
          >
            <FormLabel>Réponse</FormLabel>
            <Input type="text" />
          </FormControl>

          <HStack spacing={4}>
            {levels.map((level) => (
              <Button
                key={level.niveau}
                isActive={level.isActive}
                border="1px solid gray"
              >
                {level.id}
              </Button>
            ))}
          </HStack>
          <Select placeholder="Select option" onChange={handleTagSelection}>
            {tags.map((tag) => (
              <option key={tag.name} value={tag.name}>
                {tag.name}
              </option>
            ))}
          </Select>
          <HStack spacing={4}>
            {selectedTags.map((tag) => (
              <Tag size="md" key={tag.name} colorScheme={tag.color}>
                <TagLabel>{tag.name}</TagLabel>
                <TagCloseButton onClick={() => handleRemoveTag(tag.name)} />
              </Tag>
            ))}
          </HStack>
        </VStack>
      </Center>
    </>
  );
}
