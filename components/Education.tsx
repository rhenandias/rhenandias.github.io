import React from "react";

import Image, { StaticImageData } from "next/image";

import {
  Flex,
  Heading,
  ListItem,
  UnorderedList,
  Image as ChakraImage,
  Text,
} from "@chakra-ui/react";

interface Props {
  img: StaticImageData;
  title: string;
  school: string;
  level: string;
  year: string;
}

function Education({ img, title, school, level, year }: Props) {
  const forced = img as unknown;
  const forcedString = forced as string;

  return (
    <>
      <Flex mb={5}>
        <ChakraImage
          as={Image}
          borderRadius="10%"
          src={forcedString}
          alt="Imagem da Instituição Educacional"
          boxSize={"50px"}
          mr={[4]}
        />
        <Flex direction={"column"}>
          <Heading fontSize={"xl"} my={1}>
            {title}
          </Heading>
          <Heading fontSize={"md"} my={1}>
            {school}
          </Heading>
          <UnorderedList>
            <ListItem>
              <Text my={1}>{level}</Text>
            </ListItem>
            <ListItem>
              <Text my={1}>{year}</Text>
            </ListItem>
          </UnorderedList>
        </Flex>
      </Flex>
    </>
  );
}

export default Education;
