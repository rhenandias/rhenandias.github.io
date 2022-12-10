import React from "react";

import Image from "next/image";

import { Flex, Heading, Image as ChakraImage, Link } from "@chakra-ui/react";

interface Props {
  img: string;
  name: string;
  alt: string;
  url: string;
}

function TechImage({ img, name, alt, url }: Props) {
  return (
    <Link href={url} isExternal>
      <Flex direction={"column"} align={"center"} my={2}>
        <ChakraImage
          as={Image}
          src={img}
          boxSize={50}
          alt={alt}
          mx={[6, 6, 2]}
        />
        <Heading fontSize={"md"} mt={3}>
          {name}
        </Heading>
      </Flex>
    </Link>
  );
}

export default TechImage;
