import React from "react";

import Header from "../components/Header";
import ProfileHeader from "../components/ProfileHeader";
import Page from "../components/Page";
import FadeAnimation from "../components/FadeAnimation";
import Footer from "../components/Footer";
import Content from "../components/Content";

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
      </Content>

      <Footer />
    </Page>
  );
}

export default Home;
