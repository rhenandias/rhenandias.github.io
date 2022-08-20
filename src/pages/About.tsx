import React from "react";

import Header from "../components/Header";
import Page from "../components/Page";
import ProfilePicture from "../components/ProfilePicture";
import Footer from "../components/Footer";
import Education from "../components/Education";
import FadeAnimation from "../components/FadeAnimation";

import dayjs from "dayjs";
import Emoji from "react-emoji-render";

import { Divider, Text, Heading, Flex } from "@chakra-ui/react";

import IFSP from "../assets/ifsp.png";
import SENAI from "../assets/senai.png";

function About() {
  const age = dayjs().diff("1997-04-05", "year");

  return (
    <Page>
      <Header />

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
          Gosto sempre de estar aprendendo algo novo, mas também gosto de gatos,
          foguetes, eletrônica, cubos mágicos e hambúrguer!
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

      <Footer />
    </Page>
  );
}

export default About;
