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

import LogoBinx from "./resources/logo.png";
import Arquitetura from "./resources/arquitetura.png";
import Integracoes from "./resources/integracoes.png";
import LoginMobile from "./resources/login_mobile.png";
import LoginWeb from "./resources/login_web.png";
import Painel from "./resources/painel.png";
import Frete from "./resources/frete.png";
import Prospeccao from "./resources/prospeccao.png";
import GifMenuLateral from "./resources/menu_lateral.gif";
import GifDashboard from "./resources/gif_dashboard.gif";
import Dashboard1 from "./resources/dashboard_1.png";

function Binx() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [openImageIdx, setOpenImageIdx] = useState<number>(0);

  return (
    <Page>
      <Header
        title="Rhenan Dias - Binx"
        content="Plataforma de extensão ao ERP Bling construída em Node.js e React.js."
      />

      <Content>
        <Flex mt={6} justify={"space-between"} direction={["column", "row"]}>
          <Heading fontSize={"3xl"}>Binx</Heading>

          <HStack spacing={2} mt={[2, 0]}>
            <TechTag tech="node" />
            <TechTag tech="react" />
            <TechTag tech="aws" />
            <TechTag tech="mysql" />
            <TechTag tech="fullstack" />
          </HStack>
        </Flex>

        <Flex
          my={6}
          justify={["center", "center"]}
          align={["center", "center"]}
          direction={["column", "row"]}
        >
          <ChakraLink href={"https://binx.com.br"} target={"_blank"}>
            <ChakraImage
              as={Image}
              src={LogoBinx as unknown as string}
              borderRadius={10}
              alt="Logo Binx"
              w={"70%"}
            />
          </ChakraLink>
        </Flex>

        <Heading my={4} fontSize={"xl"}>
          O que é o Binx?
        </Heading>

        <VStack spacing={4} align={"left"}>
          <Text>
            <ChakraLink
              href={"https://binx.com.br"}
              target={"_blank"}
              color="teal.500"
            >
              Binx{" "}
            </ChakraLink>
            é uma plataforma de extensão ao ERP Bling , capaz de automatizar
            tarefas, gerar relatórios personalizados, dashboards, sincronizar
            pedidos, produtos e clientes, etc. Também realiza o envio de e-mails
            transacionais, cotações de frete, impressão de etiquetas logísticas,
            entre outras soluções.
          </Text>
          <Text>
            Nasceu para solucionar as dificuldades e necessidades da empresa,
            seja por falta de integração do ERP com o restante das nossas
            plataformas, ou por necessidade de automação e agilização de
            processos.
          </Text>
        </VStack>

        <ChakraImage
          cursor={"pointer"}
          onClick={() => {
            setOpenImageIdx(0);
            onOpen();
          }}
          as={Image}
          src={Dashboard1 as unknown as string}
          borderRadius={10}
          alt="Logo Binx"
          w={["100%", "90%"]}
          mx={"auto"}
          mt={5}
        />

        <Text align={"center"} fontSize="sm" my={6} color={"gray.600"}>
          Dashboard com estatísticas sobre a situação de estoque
        </Text>

        <Heading my={4} fontSize={"xl"}>
          Arquitetura
        </Heading>

        <VStack spacing={4} align={"left"}>
          <Text>
            Em relação a arquitura, o Binx é uma API escrita em Node.js e um
            frontend em React.js, tudo hospedado utilizando serviços da AWS.
          </Text>
          <Text>
            O backend é feito utilizando o framework Express e tem o Sequelize
            como ORM, já o frontend utiliza o Bootstrap para construção da
            interface gráfica.
          </Text>
          <Text>As ferramentas da AWS são utilizadas da seguinte maneira:</Text>
        </VStack>

        <UnorderedList mt={4}>
          <ListItem>
            <strong>Route 53:</strong> domínio e zonas hospedadas;
          </ListItem>
          <ListItem>
            <strong>Elastic Beanstalk:</strong> aplicação escalável do backend
            (escrito em Node.js)
          </ListItem>
          <ListItem>
            <strong>RDS - Relational Database Service:</strong> banco de dados
            relacional MySQL;
          </ListItem>
          <ListItem>
            <strong>Amplify:</strong> hospedagem do frontend (escrito em
            React.js);
          </ListItem>
          <ListItem>
            <strong>Cognito:</strong> autenticação e controle de acesso da API e
            do frontend;
          </ListItem>
          <ListItem>
            <strong>SES - Simple Email Service:</strong> envio de e-mails
            transacionais;
          </ListItem>
          <ListItem>
            <strong>CloudWatch:</strong> logs e monitoramento;
          </ListItem>
          <ListItem>
            <strong>Event Bridge:</strong> orquestrador de eventos para as
            funções lambda;
          </ListItem>
          <ListItem>
            <strong>Lambda:</strong> funções serverless execução periodica.
          </ListItem>
        </UnorderedList>

        <Flex
          my={6}
          justify={["center", "center"]}
          align={["center", "center"]}
          direction={["column", "row"]}
        >
          <ChakraImage
            m={2}
            as={Image}
            src={Arquitetura as unknown as string}
            width={["100%", "70%"]}
            borderRadius={10}
            alt="Arquitetura do sistema Binx"
          />
        </Flex>

        <Text align={"center"} fontSize="sm" my={6} color={"gray.600"}>
          Visão geral da arquitetura e dos serviços da AWS que são utilizados
        </Text>

        <Heading my={4} fontSize={"xl"}>
          Integrações com APIs Externas
        </Heading>

        <VStack spacing={4} align={"left"}>
          <Text>
            O sistema realiza diversas integrações consumindo APIs externas. São
            utilizadas APIs REST e também SOAP (via XML).
          </Text>
          <Text>
            As integrações são basicamente com o nosso ERP, o Bling, e com as
            plataformas de e-commerce, que são feitas com Magento e Loja
            Integrada.
          </Text>
          <Text>
            Também são realizadas integrações para consumir as APIs da própria
            AWS e da empresa parceira de logística para efetuar cálculo de
            frete.
          </Text>
        </VStack>

        <Flex
          my={6}
          justify={["center", "center"]}
          align={["center", "center"]}
          direction={["column", "row"]}
        >
          <ChakraImage
            m={2}
            as={Image}
            src={Integracoes as unknown as string}
            width={["100%", "50%"]}
            borderRadius={10}
            alt="Árvore de Natal"
          />
        </Flex>

        <Text align={"center"} fontSize="sm" my={6} color={"gray.600"}>
          Integrações que são realizadas consumindo APIs de terceiros.
        </Text>

        {/* A partir daqui teste da galeria */}

        <Flex
          my={6}
          justify={["center", "center"]}
          align={["center", "center"]}
          direction={["column", "row"]}
        >
          <ChakraImage
            cursor={"pointer"}
            onClick={() => {
              setOpenImageIdx(0);
              onOpen();
            }}
            m={2}
            as={Image}
            src={Painel as unknown as string}
            borderRadius={10}
            w={["40%"]}
            alt="Logo Binx"
          />
          <ChakraImage
            cursor={"pointer"}
            onClick={() => {
              setOpenImageIdx(1);
              onOpen();
            }}
            m={2}
            as={Image}
            src={Frete as unknown as string}
            borderRadius={10}
            w={["40%"]}
            alt="Logo Binx"
          />
          <ChakraImage
            cursor={"pointer"}
            onClick={() => {
              setOpenImageIdx(2);
              onOpen();
            }}
            m={2}
            as={Image}
            src={Prospeccao as unknown as string}
            borderRadius={10}
            w={["40%"]}
            alt="Logo Binx"
          />
        </Flex>
      </Content>

      <ImageGallery
        pictures={[
          {
            src: Painel,
          },
          {
            src: Frete,
          },
          {
            src: Prospeccao,
          },
        ]}
        isOpen={isOpen}
        onClose={onClose}
        openImageIdx={openImageIdx}
      />

      <Footer />
    </Page>
  );
}

export default Binx;
