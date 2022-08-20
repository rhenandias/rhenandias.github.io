import React from "react";

import Header from "../components/Header";
import Page from "../components/Page";
import Footer from "../components/Footer";

import { Heading, Text, Image, Flex, Container, Box } from "@chakra-ui/react";

import Robot from "../assets/notfound.png";

function NotFound() {
  return (
    <Page>
      <Header />

      <Flex direction={["column", "row", "row"]} h={"100vh"}>
        <Box h={"100%"}>
          <Image boxSize={"200px"} src={Robot} alt="Página não encontrada" />
        </Box>

        <Container>
          <Heading>Oops, não tem nada aqui!</Heading>
          <Text>Chegou nessa página por engano?</Text>
        </Container>
      </Flex>
      <Footer />
    </Page>
  );
}

export default NotFound;
