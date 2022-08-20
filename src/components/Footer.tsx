import React from "react";

import { Flex, Text } from "@chakra-ui/react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Flex justify={"space-between"} color="gray.600" pt={2} pb={6}>
        <Flex direction={"column"}>
          <Text>Rhenan Dias</Text>
        </Flex>
        <Flex justify={"center"} textAlign={"center"}>
          <Text>Guarulhos - São Paulo, {currentYear}</Text>
        </Flex>
      </Flex>
    </>
  );
}

export default Footer;
