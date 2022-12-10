import React from "react";

import { Flex, Text, Divider } from "@chakra-ui/react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Divider mb={4} />

      <Flex justify={"space-between"} color="gray.600" pt={1} pb={2}>
        <Flex direction={"column"}>
          <Text>Rhenan Dias</Text>
        </Flex>
        <Flex justify={"center"} textAlign={"center"}>
          <Text>Guarulhos, São Paulo - {currentYear}</Text>
        </Flex>
      </Flex>
    </>
  );
}

export default Footer;
