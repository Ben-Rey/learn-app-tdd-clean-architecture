import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import MainLayout from "../components/layouts/main-layout";
import { Button } from "@chakra-ui/react";
import Link from "next/link";

const Page: NextPageWithLayout = () => {
  return (
    <>
      <Button>
        <Link href={"/cards/create"}>Hello</Link>
      </Button>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Page;
