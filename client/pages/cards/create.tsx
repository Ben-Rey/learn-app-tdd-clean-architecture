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

const level = [
  {
    id: 1,
    niveau: "Ultra facile",
    color: "green",
  },
  {
    id: 2,
    niveau: "Très facile",
    color: "green",
  },
  {
    id: 3,
    niveau: "Assez facile",
    color: "green",
  },
  {
    id: 4,
    niveau: "Facile",
    color: "orange",
  },
  {
    id: 5,
    niveau: "Moins facile",
    color: "red",
  },
  {
    id: 6,
    niveau: "Moyen",
    color: "green",
  },
  {
    id: 7,
    niveau: "Moyen +",
    color: "green",
  },
  {
    id: 8,
    niveau: "Difficile",
    color: "green",
  },
  {
    id: 9,
    niveau: "Très difficile",
    color: "orange",
  },
  {
    id: 10,
    niveau: "Master Level",
    color: "red",
  },
];

export default function CreateCard() {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [tags, setTags] = useState<Tag[]>(() => tagsExample);

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
          <FormControl
            backgroundColor={"#D9D9D9"}
            padding={3}
            borderRadius={15}
          >
            <FormLabel>Question</FormLabel>
            <Input type="text" />
          </FormControl>

          <FormControl
            backgroundColor={"#D9D9D9"}
            paddingLeft="10px"
            borderRadius={"15px 15px 15px 15px"}
            paddingBottom="10px"
            paddingRight="10px"
          >
            <FormLabel>Réponse</FormLabel>
            <Input type="text" />
          </FormControl>

          <HStack spacing={4}>
            {level.map((level) => (
              <Button key={level.niveau} colorScheme={level.color}>
                {level.id}
              </Button>
            ))}
          </HStack>

          <HStack spacing={4}>
            {selectedTags.map((tag) => (
              <Tag size="md" key={tag.name} colorScheme={tag.color}>
                <TagLabel>{tag.name}</TagLabel>
                <TagCloseButton onClick={() => handleRemoveTag(tag.name)} />
              </Tag>
            ))}
          </HStack>

          <Select
            placeholder="Select option"
            onChange={handleTagSelection}
            backgroundColor={"#D9D9D9"}
          >
            {tags.map((tag) => (
              <option key={tag.name} value={tag.name}>
                {tag.name}
              </option>
            ))}
          </Select>
        </VStack>
      </Center>
    </>
  );
}
