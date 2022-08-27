import React from "react";

import { Flex, Heading, Image, Link } from "@chakra-ui/react";

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
        <Image src={img} boxSize={"50px"} alt={alt} mx={[6, 6, 2]} />
        <Heading fontSize={"md"} mt={3}>
          {name}
        </Heading>
      </Flex>
    </Link>
  );
}

export default TechImage;
