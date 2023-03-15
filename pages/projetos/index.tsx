import React from "react";

import Link from "next/link";
import Image from "next/image";

import Header from "../../components/Header";
import Page from "../../components/Page";
import FadeAnimation from "../../components/FadeAnimation";
import Footer from "../../components/Footer";
import Content from "../../components/Content";
import TechTag from "../../components/TechTag";

import {
  Card,
  CardBody,
  Container,
  Flex,
  Text,
  Image as ChakraImage,
  Link as ChakraLink,
  Heading,
  VStack,
  HStack,
  Tag,
  Button,
  Icon,
  Divider,
} from "@chakra-ui/react";

import BinxImage from "./Binx/resources/dashboard_1.png";

import { BsGithub, BsGlobe } from "react-icons/bs";
import { AddIcon } from "@chakra-ui/icons";

function Home() {
  return (
    <Page>
      <Header
        title={"Rhenan Dias"}
        content="Bem vindo ao meu portfólio pessoal."
      />

      <Content>
        <VStack spacing={6}>
          <Flex direction={["column", "row"]}>
            <Container w={["100%", "50%"]} mt={5} alignSelf={"center"}>
              <ChakraImage
                cursor={"pointer"}
                as={Image}
                src={BinxImage}
                borderRadius={8}
                alt="Logo Binx"
              />
            </Container>
            <Flex w={"50%"} align={"center"}>
              <VStack mt={3} spacing={2}>
                <Container>
                  <Heading size={"lg"}>Binx</Heading>
                </Container>

                <Container>
                  <HStack spacing={2}>
                    <TechTag tech="node" />
                    <TechTag tech="react" />
                    <TechTag tech="aws" />
                    <TechTag tech="mysql" />
                    <TechTag tech="fullstack" />
                  </HStack>
                </Container>

                <Container>
                  <Text>
                    Plataforma de extensão ao ERP Bling , capaz de automatizar
                    tarefas, gerar relatórios personalizados, dashboards,
                    sincronizar pedidos, produtos e clientes, entre outras
                    funções.
                  </Text>
                </Container>

                <Container>
                  <HStack>
                    <Button
                      leftIcon={<Icon as={BsGithub} />}
                      colorScheme="blue"
                      variant="solid"
                      size="sm"
                    >
                      GitHub
                    </Button>
                    <Button
                      leftIcon={<Icon as={BsGlobe} />}
                      colorScheme="facebook"
                      variant="outline"
                      size="sm"
                    >
                      Demo
                    </Button>
                  </HStack>
                </Container>

                <Container>
                  <Text color="teal">
                    <ChakraLink href="/projetos/binx">
                      Ler mais sobre esse projeto{" "}
                      <AddIcon mx="2px" boxSize={"12px"} />
                    </ChakraLink>
                  </Text>
                </Container>
              </VStack>
            </Flex>
          </Flex>

          <Divider />
        </VStack>
      </Content>

      <Footer />
    </Page>
  );
}

export default Home;
