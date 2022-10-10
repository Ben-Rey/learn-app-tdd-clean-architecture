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
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const levels = Array.from(Array(11).keys());

export default function CreateCard() {
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

  return (
    <VStack p={20} w={"100%"} spacing={4}>
      <Heading>Card Creation</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormLabel>Question</FormLabel>
          <Input
            type="text"
            {...register("question", {
              required: "This is required",
              minLength: { value: 4, message: "Minimum length should be 4" },
            })}
          />
          <FormErrorMessage>
            <>{errors.question?.message}</>
          </FormErrorMessage>
          <FormHelperText>This must be a question</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Answer</FormLabel>
          <Input type="text" />
          <FormHelperText>This must be an answer</FormHelperText>
        </FormControl>
        <FormControl as="fieldset">
          <FormLabel as="legend">Level</FormLabel>
          <RadioGroup defaultValue={0}>
            <HStack spacing="24px">
              {levels.map((level) => (
                <Radio key={level} value={level}>
                  {level}
                </Radio>
              ))}
            </HStack>
          </RadioGroup>
          <FormHelperText>
            Witch level would you put to this card
          </FormHelperText>
        </FormControl>
        <Button
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </form>

      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </VStack>
  );
}
