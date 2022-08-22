import React from "react";
import { Link as ReachLink } from "react-router-dom";

import Header from "../components/Header";
import Page from "../components/Page";
import Footer from "../components/Footer";
import Content from "../components/Content";
import FadeAnimation from "../components/FadeAnimation";

import NotFoundImage from "../assets/notfoundspace.png";

import {
  Heading,
  Text,
  Image,
  Flex,
  Container,
  Button,
} from "@chakra-ui/react";

import { ArrowBackIcon } from "@chakra-ui/icons";

function NotFound() {
  return (
    <Page>
      <Header />

      <Content>
        <Flex direction={["column", "row", "row"]} w={"100%"} align={"center"}>
          <FadeAnimation idx={1}>
            <Container>
              <Image
                w={"400px"}
                src={NotFoundImage}
                alt="Página não encontrada"
              />
            </Container>
          </FadeAnimation>

          <Container textAlign={["center", "left"]}>
            <FadeAnimation idx={2}>
              <Heading my={3}>Oops!</Heading>
              <Heading my={3} fontSize={"xl"}>
                Parece que você se perdeu no tempo e espaço :(
              </Heading>
            </FadeAnimation>

            <FadeAnimation idx={3}>
              <Text my={3}>
                A página que você está procurando não existe, ou foi removida.
              </Text>
            </FadeAnimation>

            <FadeAnimation idx={4}>
              <Button
                leftIcon={<ArrowBackIcon />}
                colorScheme="gray"
                my={3}
                as={ReachLink}
                to={"/"}
              >
                Página Inicial
              </Button>
            </FadeAnimation>
          </Container>
        </Flex>
      </Content>

      <Footer />
    </Page>
  );
}

export default NotFound;
