import React, { ReactNode } from "react";

import { Flex } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}

function Page(props: Props) {
  return (
    <Flex direction="column" align="center" w="100%" height={"100vh"}>
      {props.children}
    </Flex>
  );
}

Page.Content = function Content(props: Props) {
  return (
    <Flex
      justify="center"
      direction="column"
      w={["90%", "70%"]}
      mt="10"
      maxW={"1080px"}
    >
      {props.children}
    </Flex>
  );
};

export default Page;
