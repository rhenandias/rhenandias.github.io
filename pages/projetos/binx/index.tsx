import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import Header from "../../../components/Header";
import Page from "../../../components/Page";
import Footer from "../../../components/Footer";
import Content from "../../../components/Content";
import FadeAnimation from "../../../components/FadeAnimation";

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
  AspectRatio,
  UnorderedList,
  ListItem,
  Modal,
  ModalOverlay,
  ModalBody,
  useDisclosure,
  ModalContent,
  ModalFooter,
  ModalCloseButton,
  ModalHeader,
} from "@chakra-ui/react";

import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";

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

const galleryPictures = [
  {
    src: Painel,
  },
  {
    src: Frete,
  },
  {
    src: Prospeccao,
  },
];

function Binx() {
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [galleryIdx, setGalleryIdx] = useState<number>(0);

  const galleryArrow = (direction: number) => {
    let nextIdx = galleryIdx + direction;

    if (nextIdx < 0) nextIdx = galleryPictures.length - 1;
    if (nextIdx > galleryPictures.length - 1) nextIdx = 0;

    setGalleryIdx(nextIdx);
  };

  return (
    <Page>
      <Header
        title="Rhenan Dias - Árvore de Natal"
        content="Uma árvore de natal feita com impressão 3D e Arduino!"
      />

      <Content>
        <Flex mt={6} justify={"space-between"} direction={["column", "row"]}>
          <Heading fontSize={"3xl"}>Binx</Heading>

          <HStack spacing={2}>
            <Tag size={"sm"} colorScheme={"blue"}>
              Node.js
            </Tag>
            <Tag size={"sm"} colorScheme={"red"}>
              React.js
            </Tag>
            <Tag size={"sm"} colorScheme={"orange"}>
              AWS
            </Tag>
            <Tag size={"sm"} colorScheme={"cyan"}>
              Work
            </Tag>
            <Tag size={"sm"} colorScheme={"green"}>
              Fullstack
            </Tag>
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
              m={2}
              as={Image}
              src={LogoBinx}
              borderRadius={10}
              alt="Logo Binx"
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
            Nasceu para solucionar as dificuldades e necessidades da empresa
            para qual foi desenvolvido, então são soluções feitas sob medida
            para o nosso modelo de negócio, seja por falta de integração do ERP
            com o restante das nossas plataformas, ou por necessidade de
            automação e agilização de processos.
          </Text>
        </VStack>

        <Heading my={4} fontSize={"xl"}>
          Um breve resumo
        </Heading>

        <VStack spacing={4} align={"left"}>
          <Text>...</Text>
          <Text>...</Text>
        </VStack>

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
            <strong>Route 53:</strong> controle de domínio e zonas hospedadas;
          </ListItem>
          <ListItem>
            <strong>Elastic Beanstalk:</strong> aplicação escalável do backend,
            API escrita em Node.js;
          </ListItem>
          <ListItem>
            <strong>RDS - Relational Database Service:</strong> banco de dados
            relacional MySQL;
          </ListItem>
          <ListItem>
            <strong>Amplify:</strong> hospedaghem do frontend escrito em
            React.js;
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
            <strong>CloudWatch:</strong> armazenamento de logs e monitoramento;
          </ListItem>
          <ListItem>
            <strong>Event Bridge:</strong> orquestrador de eventos para as
            funções lambda;
          </ListItem>
          <ListItem>
            <strong>Lambda:</strong> funções serverless para serem executadas
            periodicamente.
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
            src={Arquitetura}
            width={["100%", "70%"]}
            borderRadius={10}
            alt="Arquitetura do sistema Binx"
          />
        </Flex>

        <Text align={"center"} fontSize="sm" my={6}>
          <em>
            Visão geral da arquitetura e dos serviços da AWS que são utilizados
          </em>
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
            src={Integracoes}
            width={["100%", "50%"]}
            borderRadius={10}
            alt="Árvore de Natal"
          />
        </Flex>

        <Text align={"center"} fontSize="sm" my={6}>
          <em>Integrações que são realizadas consumindo APIs de terceiros.</em>
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
              setGalleryIdx(0);
              onOpen();
            }}
            m={2}
            as={Image}
            src={Painel}
            borderRadius={10}
            w={["40%"]}
            alt="Logo Binx"
          />
          <ChakraImage
            cursor={"pointer"}
            onClick={() => {
              setGalleryIdx(1);
              onOpen();
            }}
            m={2}
            as={Image}
            src={Frete}
            borderRadius={10}
            w={["40%"]}
            alt="Logo Binx"
          />
          <ChakraImage
            cursor={"pointer"}
            onClick={() => {
              setGalleryIdx(2);
              onOpen();
            }}
            m={2}
            as={Image}
            src={Prospeccao}
            borderRadius={10}
            w={["40%"]}
            alt="Logo Binx"
          />
        </Flex>
      </Content>

      <Modal isOpen={isOpen} onClose={onClose} size={"6xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex align={"center"} grow={"1"}>
              <ChevronLeftIcon
                boxSize={25}
                cursor={"pointer"}
                onClick={() => galleryArrow(-1)}
              />
              <ChakraImage
                m={5}
                as={Image}
                src={galleryPictures[galleryIdx].src}
                borderRadius={10}
                maxWidth={"92%"}
              />
              <ChevronRightIcon
                boxSize={25}
                cursor={"pointer"}
                onClick={() => galleryArrow(1)}
              />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Footer />
    </Page>
  );
}

export default Binx;
