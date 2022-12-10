import React from "react";

import Link from "next/link";
import Image from "next/image";

import Header from "../../components/Header";
import Page from "../../components/Page";
import Footer from "../../components/Footer";
import Content from "../../components/Content";
import FadeAnimation from "../../components/FadeAnimation";

import { Heading, Text, Flex, Container, Button } from "@chakra-ui/react";

import { ArrowBackIcon } from "@chakra-ui/icons";

function NotFound() {
  return (
    <Page>
      <Header
        title="Rhenan Dias - Árvore de Natal"
        content="Uma árvore de natal feita com impressão 3D e Arduino!"
      />

      <Content>
        <p>Árvore</p>
      </Content>

      <Footer />
    </Page>
  );
}

export default NotFound;
