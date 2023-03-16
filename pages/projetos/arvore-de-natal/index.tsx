import React from "react";

import Link from "next/link";
import Image from "next/image";

import Header from "../../../components/Header";
import Page from "../../../components/Page";
import Footer from "../../../components/Footer";
import Content from "../../../components/Content";
import FadeAnimation from "../../../components/FadeAnimation";

import SyntaxHighlighter from "react-syntax-highlighter";
import {
  arduinoLight,
  atomOneDarkReasonable,
} from "react-syntax-highlighter/dist/cjs/styles/hljs";

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
  useColorMode,
  AspectRatio,
} from "@chakra-ui/react";

import Arvore1 from "./resources/1.jpg";
import Arvore2 from "./resources/2.jpg";
import ArvoreGif1 from "./resources/3.gif";
import Stl1 from "./resources/4.png";
import Stl2 from "./resources/5.png";
import Arvore3 from "./resources/6.jpg";
import Arvore4 from "./resources/7.jpg";
import ArvoreGif2 from "./resources/8.gif";

import code from "./resources/code";

function ArvoreNatal() {
  const { colorMode } = useColorMode();

  return (
    <Page>
      <Header
        title="Rhenan Dias - Árvore de Natal"
        content="Uma árvore de natal feita com impressão 3D e Arduino!"
      />

      <Content>
        <Flex mt={6} justify={"space-between"} direction={["column", "row"]}>
          <Heading fontSize={"3xl"}>Árvore de Natal</Heading>
          <HStack spacing={2}>
            <Tag size={"sm"} colorScheme={"blue"}>
              Arduino
            </Tag>
            <Tag size={"sm"} colorScheme={"red"}>
              Impressora 3D
            </Tag>
            <Tag size={"sm"} colorScheme={"orange"}>
              Maker
            </Tag>
          </HStack>
        </Flex>

        <Flex
          my={6}
          justify={["center", "center"]}
          align={["center", "center"]}
          direction={["column", "row"]}
        >
          <ChakraImage
            m={2}
            as={Image}
            src={Arvore1 as unknown as string}
            width={300}
            borderRadius={10}
            alt="Árvore de Natal"
          />

          <ChakraImage
            m={2}
            as={Image}
            src={ArvoreGif1 as unknown as string}
            width={225}
            borderRadius={10}
            alt="Árvore de Natal"
          />

          <ChakraImage
            m={2}
            as={Image}
            src={Arvore2 as unknown as string}
            width={300}
            borderRadius={10}
            alt="Árvore de Natal"
          />
        </Flex>

        <Heading my={4} fontSize={"lg"}>
          Como foi feito?
        </Heading>

        <VStack spacing={4} align={"left"}>
          <Text>
            Na época, eu estava empolgado com impressão 3D, modelando e
            imprimindo o máximo que eu podia no meu tempo livre, então decidi
            fazer um projetinho básico pro natal, que já estava chegando.
          </Text>
          <Text>
            Os modelos foram feitos utilizando o <em>SolidWorks</em>, e depois
            foi só gerar arquivos STL, fatiar, e mandar pra impressora.
          </Text>
        </VStack>

        <Flex
          mt={6}
          justify={["center", "center"]}
          align={["center", "center"]}
          direction={["column", "row"]}
        >
          <ChakraImage
            mx={2}
            as={Image}
            src={Stl1 as unknown as string}
            width={400}
            borderRadius={10}
            alt="Árvore de Natal"
          />

          <ChakraImage
            mx={2}
            as={Image}
            src={Stl2 as unknown as string}
            width={400}
            borderRadius={10}
            alt="Árvore de Natal"
          />
        </Flex>

        <Text align={"center"} fontSize="sm" my={6}>
          <em>
            Os modelos possuem cortes opostos, para poderem se encaixar ;)
          </em>
        </Text>

        <Heading my={4} fontSize={"lg"}>
          Mas como funciona uma impressora 3D?
        </Heading>

        <VStack spacing={4} align={"left"}>
          <Text>
            A impressão 3D convencional, utiliza da tecnologia de FDM (
            <em>Fused Deposition Modeling</em>), que nada mais é do que
            depositar, camada a camada, um fio bem fino de filamento nas
            posições certas até o objeto estar finalizado.
          </Text>
          <Text>
            Para imprimir algo, é preciso então fatiar o seu modelo sólido em um
            moooonte de camadas bem finas (utilizei camadas de 0.4mm). Quanto
            mais finas as camadas, maior a precisão do objeto final.
          </Text>
          <Text>
            Para imprimir, utilizei um filamento chamado PLA, que é um filamento
            a base de plástico biodegradável de origem natural, como amido de
            milho ou cana-de-açucar.
          </Text>
        </VStack>

        <Flex
          my={5}
          justify={["center", "center"]}
          align={["center", "center"]}
          direction={["column", "row"]}
        >
          <ChakraImage
            m={2}
            as={Image}
            src={Arvore3 as unknown as string}
            width={400}
            borderRadius={10}
            alt="Árvore de Natal"
          />
        </Flex>

        <Text align={"center"} fontSize="sm" my={6}>
          <em>Cada um desses vãos foram os caminhos pra passar os fios!</em>
        </Text>

        <Heading my={4} fontSize={"lg"}>
          Como ela pisca?
        </Heading>

        <VStack spacing={4} align={"left"}>
          <Text>
            Depois de tudo impresso, foi só fazer a montagem eletrônica,
            passando por cada um dos vãos na peça os fios para serem soldados
            nos LED&apos;s coloridos.
          </Text>
          <Text>
            Para fazer a programação, foi utilizado um Arduino Nano, um modelo
            de microcontrolador super acessível e fácil de ser utilizado.
          </Text>
        </VStack>

        <Flex
          my={5}
          justify={["center", "center"]}
          align={["center", "center"]}
          direction={["column", "row"]}
        >
          <ChakraImage
            m={2}
            as={Image}
            src={Arvore4 as unknown as string}
            width={400}
            borderRadius={10}
            alt="Árvore de Natal"
          />
        </Flex>

        <Text align={"center"} fontSize="sm" my={6}>
          <em>
            O Arduino é essa plaquinha azul, com um monte de fios ligados.
          </em>
        </Text>

        <Heading my={4} fontSize={"lg"}>
          Código do projeto
        </Heading>

        <VStack spacing={4} align={"left"}>
          <Text>
            Para a rotina de pisca-pisca, o desafio era fazer os LED&apos;s
            piscarem de maneira aleatória e controlados individualmente. Então a
            lógica foi simples, calcular um tempo aleatório de espera individual
            para cada um dos LED&apos;s.
          </Text>
        </VStack>

        <Box mt={4}>
          <SyntaxHighlighter
            language="cpp"
            style={colorMode === "dark" ? atomOneDarkReasonable : arduinoLight}
            showLineNumbers={true}
          >
            {code}
          </SyntaxHighlighter>
        </Box>

        <Flex
          my={5}
          justify={["center", "center"]}
          align={["center", "center"]}
          direction={["column", "row"]}
        >
          <ChakraImage
            m={2}
            as={Image}
            src={ArvoreGif2 as unknown as string}
            width={800}
            borderRadius={10}
            alt="Árvore de Natal"
          />
        </Flex>
        <Text align={"center"} fontSize="sm" my={6}>
          <em>
            Os LED&apos;s piscam de maneira bem aleatória, acho que ficou bom :)
          </em>
        </Text>
      </Content>

      <Footer />
    </Page>
  );
}

export default ArvoreNatal;
