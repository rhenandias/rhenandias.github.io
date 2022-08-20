import React from "react";

import {
  Flex,
  Heading,
  ListItem,
  UnorderedList,
  Image,
  Text,
} from "@chakra-ui/react";

interface Props {
  img: string;
  title: string;
  school: string;
  level: string;
  year: string;
}

function Education({ img, title, school, level, year }: Props) {
  return (
    <>
      <Flex mb={5}>
        <Image
          borderRadius="10%"
          src={img}
          alt="Imagem da Instituição Educacional"
          boxSize={"70px"}
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
