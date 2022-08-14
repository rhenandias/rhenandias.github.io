import React from "react";
import styled from "styled-components";
import { Image } from "@chakra-ui/react";
import Picture from "../assets/rhenandias.jpeg";

const Profile = styled(Image)`
  border: 1px solid lightgray;
`;

function ProfilePicture() {
  return (
    <Profile
      minW="200"
      src={Picture}
      boxSize="200"
      borderRadius="full"
      alt="Rhenan Dias"
    />
  );
}

export default ProfilePicture;
