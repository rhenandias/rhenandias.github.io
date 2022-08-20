import React from "react";

import Header from "../components/Header";
import ProfileHeader from "../components/ProfileHeader";
import Page from "../components/Page";
import FadeAnimation from "../components/FadeAnimation";

function Home() {
  return (
    <>
      <Page>
        <Page.Content>
          <Header />
          <FadeAnimation idx={1}>
            <ProfileHeader />
          </FadeAnimation>
        </Page.Content>
      </Page>
    </>
  );
}

export default Home;
