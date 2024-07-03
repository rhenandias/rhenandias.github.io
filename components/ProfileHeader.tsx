import React from "react";

import ProfilePicture from "./ProfilePicture";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import SocialMedia from "./SocialMedia";
import FadeAnimation from "./FadeAnimation";

import Octocat from "../assets/octocat.png";
import Invertocat from "../assets/invertocat.png";
import LinkedIn from "../assets/linkedin.png";
import Email from "../assets/email.png";

function ProfileHeader() {
  return (
    <Flex
      direction={["column", "column", "row"]}
      justify="center"
      align="center"
      py={8}
    >
      <FadeAnimation idx={2}>
        <Box>
          <ProfilePicture />
        </Box>
      </FadeAnimation>
      <Flex
        maxW={["100%", "70%"]}
        mx="8"
        direction={"column"}
        textAlign={["center", "center", "inherit"]}
      >
        <FadeAnimation idx={3}>
          <Heading fontSize="2xl" mt={["4", "4", "0"]}>
            Olá! Tudo bem?
          </Heading>
        </FadeAnimation>
        <FadeAnimation idx={4}>
          <Text mt={4}>
            Meu nome é Rhenan, sou formado em Análise e Desenvolvimento de
            Sistemas e Automação Industrial e sou desenvolvedor fullstack.
          </Text>
        </FadeAnimation>
        <FadeAnimation idx={5}>
          <Text mt={4}>
            Aqui você encontra um pouco sobre mim, minhas experiências,
            formações e tecnologias que aprendi ou estou aprendendo.
          </Text>
        </FadeAnimation>
        <FadeAnimation idx={6}>
          <Flex justify={["center", "left"]} align={"center"} mt="4">
            <SocialMedia
              imgDark={Invertocat}
              imgLight={Octocat}
              url="https://github.com/rhenandias"
              alt="Link para o GitHub"
              boxSize={"40px"}
              mr="3"
            />

            <SocialMedia
              imgDark={LinkedIn}
              imgLight={LinkedIn}
              boxSize={"43px"}
              alt="Link para o LinkedIn"
              url="https://www.linkedin.com/in/rhenandiasmorais/"
              mr="3"
            />

            <SocialMedia
              imgDark={Email}
              imgLight={Email}
              boxSize={"43px"}
              alt="Link para o LinkedIn"
              target="_blank"
              url="mailto:diasrhenan@gmail.com"
              mr="3"
            />
          </Flex>
        </FadeAnimation>
      </Flex>
    </Flex>
  );
}
export default ProfileHeader;
