import React from "react";

import Header from "../components/Header";
import ProfileHeader from "../components/ProfileHeader";
import Page from "../components/Page";

function Home() {
  return (
    <>
      <Page>
        <Page.Content>
          <Header />

          <ProfileHeader />
        </Page.Content>
      </Page>
    </>
  );
}

export default Home;
