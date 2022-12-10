import React from "react";

import Image from "next/image";

import Picture from "../assets/rhenandias.jpeg";

function ProfilePicture() {
  return (
    <Image
      width={200}
      src={Picture}
      alt="Rhenan Dias"
      style={{
        border: "1px solid lightgray",
        borderRadius: "100%",
      }}
    />
  );
}

export default ProfilePicture;
