import React from "react";

import { Flex, Divider } from "@chakra-ui/react";

import Header from "../components/Header";
import ProfileHeader from "../components/ProfileHeader";

function Home() {
  return (
    <>
      <Flex direction="column" align="center" w="100%">
        <Header />

        <Divider w={["90%", "70%"]} mt="5" />

        <ProfileHeader />
      </Flex>
    </>
  );
}

export default Home;
