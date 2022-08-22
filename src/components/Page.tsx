import React, { ReactNode } from "react";

import { Flex } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}

function Page({ children }: Props) {
  return (
    <Flex direction="column" align="center" minH={"100vh"}>
      <Flex
        direction="column"
        w={["90%", "70%"]}
        maxW={"1080px"}
        minH={"100vh"}
      >
        {children}
      </Flex>
    </Flex>
  );
}

export default Page;
