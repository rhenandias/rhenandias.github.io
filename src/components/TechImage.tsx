import React from "react";

import { Flex, Heading, Image } from "@chakra-ui/react";

interface Props {
  img: string;
  name: string;
  alt: string;
}

function TechImage({ img, name, alt }: Props) {
  return (
    <Flex direction={"column"} align={"center"} my={2}>
      <Image src={img} boxSize={"50px"} alt={alt} mx={[6, 6, 2]} />
      <Heading fontSize={"md"} mt={5}>
        {name}
      </Heading>
    </Flex>
  );
}

export default TechImage;
