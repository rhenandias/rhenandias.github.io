import React from "react";

import NextLink from "next/link";
import Image from "next/image";

import Header from "../../components/Header";
import Page from "../../components/Page";
import FadeAnimation from "../../components/FadeAnimation";
import Footer from "../../components/Footer";
import Content from "../../components/Content";
import TechTag from "../../components/TechTag";

import {
  Container,
  Flex,
  Text,
  Image as ChakraImage,
  Link,
  Heading,
  VStack,
  HStack,
  Button,
  Icon,
  Divider,
  Alert,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

import BinxImage from "./binx/resources/dashboard_1.png";
import ArvoreNatal from "./arvore-de-natal/resources/8.gif";

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
        <FadeAnimation idx={1}>
          <Flex direction={["column", "row"]}>
            <Container w={["100%", "50%"]} mt={5} alignSelf={"center"}>
              <ChakraImage
                cursor={"pointer"}
                as={Image}
                src={BinxImage as unknown as string}
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
                    <NextLink
                      href={"https://github.com/atomo-binx"}
                      target={"blank"}
                    >
                      <Button
                        leftIcon={<Icon as={BsGithub} />}
                        colorScheme="blue"
                        variant="solid"
                        size="sm"
                      >
                        GitHub
                      </Button>
                    </NextLink>
                    <NextLink href={"https://binx.com.br"} target={"blank"}>
                      <Button
                        leftIcon={<Icon as={BsGlobe} />}
                        colorScheme="facebook"
                        variant="outline"
                        size="sm"
                      >
                        Site
                      </Button>
                    </NextLink>
                  </HStack>
                </Container>

                <Container>
                  <Text color="teal">
                    <Link href="/projetos/binx" as={NextLink}>
                      Ler mais sobre esse projeto{" "}
                      <AddIcon mx="2px" boxSize={"12px"} />
                    </Link>
                  </Text>
                </Container>
              </VStack>
            </Flex>
          </Flex>
        </FadeAnimation>

        <FadeAnimation idx={2}>
          <Divider my={4} />
        </FadeAnimation>

        <FadeAnimation idx={3}>
          <Flex direction={["column", "row"]}>
            <Container w={["100%", "50%"]} mt={1} alignSelf={"center"}>
              <ChakraImage
                cursor={"pointer"}
                as={Image}
                src={ArvoreNatal as unknown as string}
                borderRadius={8}
                alt="Árvore de Natal"
              />
            </Container>
            <Flex w={"50%"} align={"center"}>
              <VStack mt={3} spacing={2}>
                <Container>
                  <Heading size={"lg"}>Árvore de Natal</Heading>
                </Container>

                <Container>
                  <HStack spacing={2}>
                    <TechTag tech="arduino" />
                    <TechTag tech="impressora" />
                    <TechTag tech="maker" />
                  </HStack>
                </Container>

                <Container>
                  <Text>
                    Projeto Maker de uma Árvore de Natal de decoração feita com
                    impressão 3D e Arduino, DIY!
                  </Text>
                </Container>

                <Container>
                  <HStack>
                    <NextLink
                      href={"https://github.com/rhenandias/xmastree"}
                      target={"blank"}
                    >
                      <Button
                        leftIcon={<Icon as={BsGithub} />}
                        colorScheme="blue"
                        variant="solid"
                        size="sm"
                      >
                        GitHub
                      </Button>
                    </NextLink>
                  </HStack>
                </Container>

                <Container>
                  <Text color="teal">
                    <Link href="/projetos/arvore-de-natal" as={NextLink}>
                      Ler mais sobre esse projeto{" "}
                      <AddIcon mx="2px" boxSize={"12px"} />
                    </Link>
                  </Text>
                </Container>
              </VStack>
            </Flex>
          </Flex>
        </FadeAnimation>

        <FadeAnimation idx={4}>
          <Divider my={4} />
        </FadeAnimation>

        <FadeAnimation idx={5}>
          <Alert
            status="success"
            variant="left-accent"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
          >
            <AlertTitle mt={4} mb={1} fontSize="lg">
              Work In Progress ;)
            </AlertTitle>
            <AlertDescription maxWidth="xl">
              Esse portfólio ainda está em construção, enquanto eu atualizo
              todos os meus projetos, que tal dar uma olhada no meu GitHub?
            </AlertDescription>
            <AlertDescription>
              <Text color="teal" textDecor={"underline"}>
                <NextLink
                  href={"https://github.com/rhenandias"}
                  target={"blank"}
                >
                  Rhenan Dias <Icon as={BsGithub} mx={1} />
                </NextLink>
              </Text>
            </AlertDescription>
          </Alert>
        </FadeAnimation>
      </Content>

      <Footer />
    </Page>
  );
}

export default Home;
