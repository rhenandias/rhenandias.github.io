import React from "react";
import { Link as ReachLink } from "react-router-dom";

import {
  Button,
  Text,
  Box,
  Flex,
  Link,
  Divider,
  Heading,
} from "@chakra-ui/react";

import Header from "../components/Header";

function Home() {
  return (
    <>
      <Flex direction="column" align="center" w="100%">
        <Flex justify="center" w="70%" mt="10" direction="column">
          <Header />
        </Flex>
        <Divider w="70%" mt="5" />
      </Flex>
    </>
  );
}

export default Home;
