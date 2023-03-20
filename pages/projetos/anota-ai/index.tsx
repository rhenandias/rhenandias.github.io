import React, { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";

import Header from "../../../components/Header";
import Page from "../../../components/Page";
import Footer from "../../../components/Footer";
import Content from "../../../components/Content";
import FadeAnimation from "../../../components/FadeAnimation";
import TechTag from "../../../components/TechTag";
import ImageGallery from "../../../components/ImageGallery";

import {
  Heading,
  Box,
  Text,
  Flex,
  Container,
  Button,
  HStack,
  VStack,
  Tag,
  Image as ChakraImage,
  Link as ChakraLink,
  useColorMode,
  UnorderedList,
  ListItem,
  useDisclosure,
} from "@chakra-ui/react";

import LandPage from "./resources/land.png";
import Login from "./resources/login.png";
import Cadastro from "./resources/cadastro.png";
import Post from "./resources/comentarios.png";
import Perfil from "./resources/perfil.png";
import Socket from "./resources/realtime.gif";

function AnotaAi() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [openImageIdx, setOpenImageIdx] = useState<number>(0);

  return (
    <Page>
      <Header
        title="Rhenan Dias - AnotaAi"
        content="Plataforma de extensão ao ERP Bling construída em Node.js e React.js."
      />

      <Content>
        <Flex mt={6} justify={"space-between"} direction={["column", "row"]}>
          <Heading fontSize={"3xl"}>Anota Aí</Heading>

          <HStack spacing={2} mt={[2, 0]}>
            <TechTag tech="node" />
            <TechTag tech="react" />
            <TechTag tech="postgresql" />
            <TechTag tech="socketio" />
          </HStack>
        </Flex>

        <ChakraImage
          as={Image}
          src={LandPage as unknown as string}
          borderRadius={10}
          alt="Logo Binx"
          w={["100%", "90%"]}
          mx={"auto"}
          mt={5}
        />

        <Heading my={4} fontSize={"xl"}>
          O que é o Anota Aí?
        </Heading>

        <VStack spacing={4} align={"left"}>
          <Text>
            <ChakraLink
              href={"https://anotaai.netlify.app/feed"}
              target={"_blank"}
              color="teal.500"
            >
              Anota Aí{" "}
            </ChakraLink>
            é um projeto desenvolvido durante a disciplina de Laboratório de
            Sistemas do curso de Análise e Desenvolvimento de Sistemas.
          </Text>
          <Text>
            A ideia do projeto era construir uma plataforma em formato de rede
            social com feed, para realizar a postagem de conteúdo em formato de
            texto e imagem, com opções de comentar e curtir cada um dos posts.
            Também existe a possibilidade de visualizar o perfil de um membro,
            suas informações de biografia e posts realizados.
          </Text>
          <Text>
            Foi todo feito em conjunto, durante um semestre, por um conjunto de
            5 alunos, em que as etapas do desenvolvimento foram separadas entre
            cada um dos alunos.
          </Text>
        </VStack>

        <ChakraImage
          as={Image}
          src={Login as unknown as string}
          borderRadius={10}
          alt="Logo Binx"
          w={["100%", "90%"]}
          mx={"auto"}
          mt={5}
        />

        <ChakraImage
          as={Image}
          src={Cadastro as unknown as string}
          borderRadius={10}
          alt="Logo Binx"
          w={["100%", "90%"]}
          mx={"auto"}
          mt={5}
        />

        <ChakraImage
          as={Image}
          src={Post as unknown as string}
          borderRadius={10}
          alt="Logo Binx"
          w={["100%", "90%"]}
          mx={"auto"}
          mt={5}
        />

        <ChakraImage
          as={Image}
          src={Perfil as unknown as string}
          borderRadius={10}
          alt="Logo Binx"
          w={["100%", "90%"]}
          mx={"auto"}
          mt={5}
        />

        <ChakraImage
          as={Image}
          src={Socket as unknown as string}
          borderRadius={10}
          alt="Logo Binx"
          w={["100%", "90%"]}
          mx={"auto"}
          mt={5}
        />
      </Content>
      <Footer />
    </Page>
  );
}

export default AnotaAi;
