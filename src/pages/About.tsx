import React from "react";

import Header from "../components/Header";
import Page from "../components/Page";
import ProfilePicture from "../components/ProfilePicture";
import Footer from "../components/Footer";
import Education from "../components/Education";
import FadeAnimation from "../components/FadeAnimation";
import Content from "../components/Content";
import TechImage from "../components/TechImage";

import dayjs from "dayjs";
import Emoji from "react-emoji-render";

import {
  Divider,
  Text,
  Heading,
  Flex,
  Container,
  UnorderedList,
  ListItem,
  Image,
} from "@chakra-ui/react";

import IFSP from "../assets/ifsp.png";
import SENAI from "../assets/senai.png";

import NodeIcon from "../assets/techs/nodejs.svg";
import ReactIcon from "../assets/techs/react.svg";
import PostgreIcon from "../assets/techs/postgresql.svg";
import MysqlIcon from "../assets/techs/mysql.svg";
import DockerIcon from "../assets/techs/docker.svg";
import HerokuIcon from "../assets/techs/heroku.svg";
import AwsIcon from "../assets/techs/aws.svg";
import FirebaseIcon from "../assets/techs/firebase.svg";
import LinuxIcon from "../assets/techs/linux.svg";
import PostmanIcon from "../assets/techs/postman.svg";

function About() {
  const age = dayjs().diff("1997-04-05", "year");

  return (
    <Page>
      <Header />

      <Content>
        <FadeAnimation idx={1}>
          <Flex justify={"center"} mt={8}>
            <ProfilePicture />
          </Flex>
        </FadeAnimation>

        <FadeAnimation idx={2}>
          <Heading fontSize={"2xl"} my={"5"} textAlign={"center"}>
            Sobre mim :)
          </Heading>
        </FadeAnimation>

        <FadeAnimation idx={3}>
          <Text lineHeight={2}>
            Desde cedo descobri que eu gostava de tecnologia e queria trabalhar
            com isso. Iniciei na área de eletrônica, fiz o curso superior de
            Automação Industrial e me apaixonei por programação.
          </Text>
        </FadeAnimation>

        <FadeAnimation idx={4}>
          <Text mt={3} lineHeight={2}>
            Hoje, com {age} anos, aceitei o desafio de migrar de área, cursando
            Análise e Desenvolvimento de sistemas e com a intenção de atuar como
            desenvolvedor de software.
          </Text>
        </FadeAnimation>

        <FadeAnimation idx={5}>
          <Text mt={3} lineHeight={2}>
            Gosto sempre de estar aprendendo algo novo, mas também gosto de
            gatos, foguetes, eletrônica, cubos mágicos e hambúrguer!
          </Text>
        </FadeAnimation>

        <FadeAnimation idx={6}>
          <Text textAlign={"center"} my={3}>
            <Emoji text={":laptop: :cat: :rocket: :hamburger:"} />
          </Text>
        </FadeAnimation>

        <FadeAnimation idx={7}>
          <Divider mt={4} />
        </FadeAnimation>

        <Heading fontSize={"2xl"} my={"5"}>
          Principais Habilidades
        </Heading>

        <Flex direction={["column", "row"]}>
          <Container>
            <UnorderedList>
              <ListItem>Construção de backend e APIs em Node.js</ListItem>
              <ListItem>Desenvolvimento de frontend em React.js</ListItem>
              <ListItem>HTML, JavaScript, CSS</ListItem>
              <ListItem>Bancos de dados relacionais MySQL/PostgreSQL</ListItem>
              <ListItem>Containers (Docker e Docker Compose)</ListItem>
            </UnorderedList>
          </Container>
          <Container>
            <UnorderedList>
              <ListItem>Serviços em nuvem (AWS, Heroku, Firebase)</ListItem>
              <ListItem>
                Testes automatizados e CI/CD (Jest e GitHub Actions)
              </ListItem>
              <ListItem>Programação de sistemas embarcados em C/C++</ListItem>
              <ListItem>Conhecimentos em Python, Java e PHP</ListItem>
              <ListItem>Sistema operacional Linux</ListItem>
            </UnorderedList>
          </Container>
        </Flex>

        <Divider mt={4} />

        <Heading fontSize={"2xl"} my={"5"}>
          Principais Ferramentas
        </Heading>

        <Flex direction={"row"} justify={"space-evenly"} wrap={"wrap"}>
          <TechImage img={NodeIcon} name={"Node.js"} alt={"Node.js"} />
          <TechImage img={ReactIcon} name={"React.js"} alt={"React.js"} />
          <TechImage img={PostgreIcon} name={"PostgreSQL"} alt={"PostgreSQL"} />
          <TechImage img={MysqlIcon} name={"MySQL"} alt={"MySQL"} />
          <TechImage img={DockerIcon} name={"Docker"} alt={"Docker"} />
          <TechImage img={AwsIcon} name={"AWS"} alt={"AWS"} />
          <TechImage img={HerokuIcon} name={"Heroku"} alt={"Heroku"} />
          <TechImage img={FirebaseIcon} name={"Firebase"} alt={"Firebase"} />
          <TechImage img={PostmanIcon} name={"Postman"} alt={"Postman"} />
          <TechImage img={LinuxIcon} name={"Linux"} alt={"Linux"} />
        </Flex>

        <Divider mt={4} />

        <Heading fontSize={"2xl"} my={"5"}>
          Educação
        </Heading>

        <Education
          title={"Análise e Desenvolvimento de Sistemas"}
          school={
            "Instituto Federal de Educação, Ciência e Tecnologia de São Paulo"
          }
          level={"Ensino Superior - Tecnólogo"}
          year={"2020 - Atual"}
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
      </Content>

      <Footer />
    </Page>
  );
}

export default About;
