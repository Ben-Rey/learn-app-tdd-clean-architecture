import { Button, Grid, GridItem } from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Link href="/cards/create">
        <Button colorScheme="blue">Create a Card</Button>
      </Link>
    </>
  );
};

export default Home;
