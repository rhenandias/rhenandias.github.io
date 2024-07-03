import React from "react";

import Emoji from "react-emoji-render";

import Image from "next/image";
import Link from "next/link";

import {
  Container,
  Divider,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  Image as ChakraImage,
  Link as ChakraLink,
} from "@chakra-ui/react";

import Header from "../components/Header";
import ProfileHeader from "../components/ProfileHeader";
import Page from "../components/Page";
import FadeAnimation from "../components/FadeAnimation";
import Footer from "../components/Footer";
import Content from "../components/Content";
import TechImage from "../components/TechImage";
import Education from "../components/Education";

import IFSP from "../assets/ifsp.png";
import SENAI from "../assets/senai.png";
import Science from "../assets/science.png";
import Volunteer from "../assets/volunteer.png";

import NodeIcon from "../assets/techs/nodejs.svg";
import ReactIcon from "../assets/techs/react.svg";
import PostgreIcon from "../assets/techs/postgresql.svg";
import MysqlIcon from "../assets/techs/mysql.svg";
import DockerIcon from "../assets/techs/docker.svg";
import AwsIcon from "../assets/techs/aws.svg";
import LinuxIcon from "../assets/techs/linux.svg";
import AluraIcon from "../assets/alura.png";
import GitIcon from "../assets/techs/git.svg";

import { ExternalLinkIcon } from "@chakra-ui/icons";

function Home() {
  return (
    <Page>
      <Header
        title={"Rhenan Dias"}
        content="Bem vindo ao meu portfólio pessoal."
      />

      <Content>
        <FadeAnimation idx={1}>
          <ProfileHeader />
        </FadeAnimation>

        <FadeAnimation idx={2}>
          <Heading fontSize={"2xl"} my={"5"}>
            Sobre mim :)
          </Heading>
        </FadeAnimation>

        <FadeAnimation idx={3}>
          <Text lineHeight={2}>
            Desde cedo descobri que eu gostava de tecnologia e queria trabalhar
            com isso. Iniciei na área de <strong>Eletrônica</strong>, fiz o
            curso superior de <strong>Automação Industrial</strong> e me
            apaixonei por programação.
          </Text>
        </FadeAnimation>

        <FadeAnimation idx={4}>
          <Text mt={3} lineHeight={2}>
            Querendo continuar na área de programação e tecnologia, fiz minha
            segunda formação, em{" "}
            <strong>Análise e Desenvolvimento de Sistemas</strong>, e não
            pretendo parar por aqui.
          </Text>
        </FadeAnimation>

        <FadeAnimation idx={5}>
          <Text mt={3} lineHeight={2}>
            Atualmente trabalho como <strong>Desenvolvedor Fullstack</strong>,
            atuando como desenvolvedor líder em um squad, tomando decisões
            diretamente sobre o frontend e backend da aplicação.
          </Text>
        </FadeAnimation>

        <FadeAnimation idx={6}>
          <Text mt={3} lineHeight={2}>
            Gosto sempre de estar aprendendo algo novo, mas também gosto de
            gatos, foguetes, xadrez, impressoras 3D, cubos mágicos e hambúrguer.
          </Text>
        </FadeAnimation>

        <FadeAnimation idx={7}>
          <Text textAlign={"center"} my={3}>
            <Emoji text={":laptop: :cat: :rocket: :hamburger: "} />
          </Text>
        </FadeAnimation>

        <FadeAnimation idx={8}>
          <Divider mt={4} />
        </FadeAnimation>

        <FadeAnimation idx={9}>
          <Heading fontSize={"2xl"} my={"5"}>
            Principais Habilidades
          </Heading>

          <Flex direction={["column", "row"]}>
            <Container>
              <UnorderedList>
                <ListItem>
                  Desenvolvimento Node.js, React.js e React Native
                </ListItem>
                <ListItem>
                  Construção e documentação de API&apos;s (Node.js e Nest.js)
                </ListItem>
                <ListItem>HTML, JavaScript, CSS</ListItem>
                <ListItem>
                  Bancos de dados relacionais MySQL/PostgreSQL
                </ListItem>
                <ListItem>Versionamento de código (Git e GitHub)</ListItem>
                <ListItem>
                  Ferramentas de observabilidade (Datadog e Clarity)
                </ListItem>
              </UnorderedList>
            </Container>
            <Container>
              <UnorderedList>
                <ListItem>Containers (Docker e Docker Compose)</ListItem>
                <ListItem>Serviços em nuvem (AWS, Firebase)</ListItem>
                <ListItem>
                  Testes automatizados e CI/CD (Jest e GitHub Actions)
                </ListItem>
                <ListItem>Conhecimentos em Python, Java, C/C++ e PHP</ListItem>
                <ListItem>Sistema operacional Linux</ListItem>
              </UnorderedList>
            </Container>
          </Flex>

          <Divider mt={4} />

          <Heading fontSize={"2xl"} my={"5"}>
            Principais Ferramentas
          </Heading>

          <Flex direction={"row"} justify={"space-evenly"} wrap={"wrap"}>
            <TechImage
              img={NodeIcon}
              name={"Node.js"}
              alt={"Node.js"}
              url={"https://nodejs.org/pt-br/"}
            />
            <TechImage
              img={ReactIcon}
              name={"React.js"}
              alt={"React.js"}
              url={"https://pt-br.reactjs.org/"}
            />
            <TechImage
              img={ReactIcon}
              name={"React Native"}
              alt={"React Native"}
              url={"https://reactnative.dev/"}
            />
            <TechImage
              img={PostgreIcon}
              name={"PostgreSQL"}
              alt={"PostgreSQL"}
              url={"https://www.postgresql.org/"}
            />
            <TechImage
              img={MysqlIcon}
              name={"MySQL"}
              alt={"MySQL"}
              url={"https://www.mysql.com/"}
            />
            <TechImage
              img={DockerIcon}
              name={"Docker"}
              alt={"Docker"}
              url={"https://www.docker.com/"}
            />
            <TechImage
              img={AwsIcon}
              name={"AWS"}
              alt={"AWS"}
              url={"https://aws.amazon.com/pt/"}
            />
            <TechImage
              img={GitIcon}
              name={"Git/GitHub"}
              alt={"Git"}
              url={"https://github.com/"}
            />
            <TechImage
              img={LinuxIcon}
              name={"Linux"}
              alt={"Linux"}
              url={"https://xubuntu.org/"}
            />
          </Flex>

          <Divider mt={4} />

          <Flex justify={"space-between"}>
            <Heading fontSize={"2xl"} my={"5"}>
              Educação
            </Heading>
            {/* <Link
            href={
              "https://drive.google.com/file/d/1sHeaTikApu_hMsq6JqqxLQXVlIZwqJjx/view?usp=sharing"
            }
            target={"blank"}
          >
            <Button
              colorScheme="teal"
              size="sm"
              my={"5"}
              rightIcon={<ExternalLinkIcon />}
            >
              Currículo em PDF
            </Button>
          </Link> */}
          </Flex>

          <Education
            title={"Análise e Desenvolvimento de Sistemas"}
            school={
              "Instituto Federal de Educação, Ciência e Tecnologia de São Paulo"
            }
            level={"Ensino Superior - Tecnólogo"}
            year={"2020 - 2022"}
            img={IFSP}
          />

          <Education
            title={"Automação Industrial"}
            school={
              "Instituto Federal de Educação, Ciência e Tecnologia de São Paulo"
            }
            level={"Ensino Superior - Tecnólogo"}
            year={"2015 - 2019"}
            img={IFSP}
          />

          <Education
            title={"Eletroeletrônica"}
            school={"Escola SENAI Roberto Simonsen"}
            level={"Ensino Técnico"}
            year={"2013 - 2014"}
            img={SENAI}
          />

          <Divider mt={4} />

          <Heading fontSize={"2xl"} my={"5"}>
            Outras Atividades, Cursos e Eventos
          </Heading>

          <Flex mb={5}>
            <ChakraImage
              as={Image}
              borderRadius="10%"
              src={AluraIcon as unknown as string}
              alt="Logo Alura"
              boxSize={"50px"}
              mr={[8]}
            />
            <Flex direction={"column"}>
              <Heading fontSize={"xl"} my={1}>
                Nest.js: Persistindo dados com TypeORM e PostgreSQL
              </Heading>
              <Heading fontSize={"md"} my={1}>
                Curso online na plataforma Alura
              </Heading>

              <UnorderedList>
                <ListItem>
                  <Text my={1}>
                    O curso aprofunda conhecimentos em Nest.js com foco no
                    TypeORM, abordando Datasources, configuração do TypeORM
                    seguindo melhores práticas, o uso do Repository Pattern e a
                    criação de relacionamentos entre entidades.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text my={1}>Finalizado em: Junho, 2024</Text>
                </ListItem>
                <ListItem>
                  <Text my={1}>Carga horária: 10h</Text>
                </ListItem>
                <ListItem>
                  <Text my={1}>
                    <ChakraLink
                      as={Link}
                      color="teal"
                      href={
                        "https://cursos.alura.com.br/course/nest-js-typeorm"
                      }
                      isExternal
                    >
                      Página do curso <ExternalLinkIcon mx={1} mb={1} />
                    </ChakraLink>
                  </Text>
                </ListItem>
              </UnorderedList>
            </Flex>
          </Flex>

          <Flex mb={5}>
            <ChakraImage
              as={Image}
              borderRadius="10%"
              src={AluraIcon as unknown as string}
              alt="Logo Alura"
              boxSize={"50px"}
              mr={[8]}
            />
            <Flex direction={"column"}>
              <Heading fontSize={"xl"} my={1}>
                Nest.js: criando uma API Restful
              </Heading>
              <Heading fontSize={"md"} my={1}>
                Curso online na plataforma Alura
              </Heading>

              <UnorderedList>
                <ListItem>
                  <Text my={1}>
                    Nest.js, um framework baseado em Node.js, suas
                    particularidades internas, criação de APIs Restful, uso de
                    Pipes, Controllers, Módulos, Providers e Injeção de
                    dependências, desenvolvimento de endpoints HTTP com
                    decorators do NestJS, e realização de validações síncronas e
                    assíncronas usando class-validator e class-transformer.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text my={1}>Finalizado em: Junho, 2024</Text>
                </ListItem>
                <ListItem>
                  <Text my={1}>Carga horária: 10h</Text>
                </ListItem>
                <ListItem>
                  <Text my={1}>
                    <ChakraLink
                      as={Link}
                      color="teal"
                      href={
                        "https://cursos.alura.com.br/course/nestjs-criando-api-resftul"
                      }
                      isExternal
                    >
                      Página do curso <ExternalLinkIcon mx={1} mb={1} />
                    </ChakraLink>
                  </Text>
                </ListItem>
              </UnorderedList>
            </Flex>
          </Flex>

          <Flex mb={5}>
            <ChakraImage
              as={Image}
              borderRadius="10%"
              src={AluraIcon as unknown as string}
              alt="Logo Alura"
              boxSize={"50px"}
              mr={[8]}
            />
            <Flex direction={"column"}>
              <Heading fontSize={"xl"} my={1}>
                ChatGPT: desvendando a IA em conversas e suas aplicações
              </Heading>
              <Heading fontSize={"md"} my={1}>
                Curso online na plataforma Alura
              </Heading>

              <UnorderedList>
                <ListItem>
                  <Text my={1}>
                    Como utilizar inteligência artificial para criar e adaptar
                    textos, gerar imagens a partir de descrições textuais,
                    melhorar a qualidade de textos com ChatGPT, e aplicar
                    técnicas práticas de IA para obter resultados imediatos no
                    trabalho.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text my={1}>Finalizado em: Maio, 2024</Text>
                </ListItem>
                <ListItem>
                  <Text my={1}>Carga horária: 8h</Text>
                </ListItem>
                <ListItem>
                  <Text my={1}>
                    <ChakraLink
                      as={Link}
                      color="teal"
                      href={
                        "https://cursos.alura.com.br/course/chatgpt-desvendando-ia-conversas-aplicacoes"
                      }
                      isExternal
                    >
                      Página do curso <ExternalLinkIcon mx={1} mb={1} />
                    </ChakraLink>
                  </Text>
                </ListItem>
              </UnorderedList>
            </Flex>
          </Flex>

          <Flex mb={5}>
            <ChakraImage
              as={Image}
              borderRadius="10%"
              src={AwsIcon as unknown as string}
              alt="Logo AWS"
              boxSize={"50px"}
              mr={[8]}
            />
            <Flex direction={"column"}>
              <Heading fontSize={"xl"} my={1}>
                AWS Summit São Paulo 2022
              </Heading>
              <Heading fontSize={"md"} my={1}>
                Transamerica Expo Center
              </Heading>

              <UnorderedList>
                <ListItem>
                  <Text my={1}>
                    Eventro presencial com palestras e workshops sobre inovação
                    e soluções flexíveis e confiáveis em grande escala
                    oferecidas pela AWS.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text my={1}>Data do Evento: Agosto, 2022</Text>
                </ListItem>

                <ListItem>
                  <Text my={1}>
                    Publicação no Linkedin:{" "}
                    <ChakraLink
                      as={Link}
                      color="teal"
                      href={
                        "https://www.linkedin.com/posts/rhenandiasmorais_aws-summit-saopaulo-activity-6961096942437175296-eKZP?utm_source=share&utm_medium=member_desktop"
                      }
                      isExternal
                    >
                      AWS Summit São Paulo <ExternalLinkIcon mx={1} mb={1} />
                    </ChakraLink>
                  </Text>
                </ListItem>
              </UnorderedList>
            </Flex>
          </Flex>

          <Flex mb={5}>
            <ChakraImage
              as={Image}
              borderRadius="10%"
              src={Science as unknown as string}
              alt="Imagem da Instituição Educacional"
              boxSize={"50px"}
              mr={[8]}
            />
            <Flex direction={"column"}>
              <Heading fontSize={"xl"} my={1}>
                Iniciação Científica
              </Heading>
              <Heading fontSize={"md"} my={1}>
                Instituto Federal de Educação, Ciência e Tecnologia de São Paulo
              </Heading>

              <UnorderedList>
                <ListItem>
                  <Text my={1}>
                    Projeto: Dinâmica e Controle de Atuadores Pneumáticos
                    Industriais
                  </Text>
                </ListItem>

                <ListItem>
                  <Text my={1}>Fomento: CNPq</Text>
                </ListItem>
                <ListItem>
                  <Text my={1}>Data de Publicação: Dezembro, 2019</Text>
                </ListItem>

                <ListItem>
                  <Text my={1}>
                    Publicação:{" "}
                    <ChakraLink
                      as={Link}
                      color="teal"
                      href={
                        "https://ojs.ifsp.edu.br/index.php/sinergia/article/view/569"
                      }
                      isExternal
                    >
                      Revista SINERGIA - IFSP <ExternalLinkIcon mx={1} mb={1} />
                    </ChakraLink>
                  </Text>
                </ListItem>
              </UnorderedList>
            </Flex>
          </Flex>

          <Flex mb={5}>
            <ChakraImage
              as={Image}
              borderRadius="10%"
              src={Volunteer as unknown as string}
              alt="Imagem da Instituição Educacional"
              boxSize={"50px"}
              mr={[8]}
            />
            <Flex direction={"column"}>
              <Heading fontSize={"xl"} my={1}>
                Trabalho Voluntário
              </Heading>
              <Heading fontSize={"md"} my={1}>
                WorldSkills São Paulo 2015
              </Heading>

              <UnorderedList>
                <ListItem>
                  <Text my={1}>
                    43º edição da Olímpiada de conhecimentos técnicos
                    WorldSkills.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text my={1}>Data do Evento: Agosto, 2015</Text>
                </ListItem>

                <ListItem>
                  <Text my={1}>
                    Informações:{" "}
                    <ChakraLink
                      as={Link}
                      color="teal"
                      href={
                        "https://worldskills.org/what/competitions/wsc2015/"
                      }
                      isExternal
                    >
                      Página do Evento <ExternalLinkIcon mx={1} mb={1} />
                    </ChakraLink>
                  </Text>
                </ListItem>
              </UnorderedList>
            </Flex>
          </Flex>
        </FadeAnimation>
      </Content>

      <Footer />
    </Page>
  );
}

export default Home;
