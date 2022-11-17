import { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import MainLayout from "../card-app-logic/adapters/primary/components/layouts/main-layout";
import { Button, Flex } from "@chakra-ui/react";
import Link from "next/link";

const Page: NextPageWithLayout = () => {
  return (
    <Flex experimental_spaceX={4}>
      <Link href={"/cards/create"}>
        <Button>Create Card</Button>
      </Link>
      <Link href={"/cards/list"}>
        <Button>Card List</Button>
      </Link>
      <Link href={"/cards/play"}>
        <Button>Card Play</Button>
      </Link>
    </Flex>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Page;
