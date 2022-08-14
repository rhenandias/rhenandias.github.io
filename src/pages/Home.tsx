import React from "react";

import {
  Button,
  Text,
  useColorMode,
  Box,
  Flex,
  Link,
  Divider,
  Heading,
} from "@chakra-ui/react";

import ColorModeToggle from "../components/ColorModeToggle";

function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Flex direction={"column"} align={"center"} width={"100%"}>
        <Flex justify={"space-between"} width={["70%"]} mt={10}>
          <Box>
            <Box>
              <Heading fontSize={"3xl"}>Rhenan Dias</Heading>
            </Box>
            <Box mt={4}>
              <Link color={"gray.500"} mr={5}>
                Blog
              </Link>
              <Link color={"gray.500"} mr={5}>
                Sobre
              </Link>
            </Box>
          </Box>
          <Box>
            <Box>
              <ColorModeToggle />
            </Box>
            <Box>
              <Link color={"gray.500"} mr={5}>
                GitHub
              </Link>
              <Link color={"gray.500"} mr={5}>
                LinkedIn
              </Link>
            </Box>
          </Box>
        </Flex>
        <Divider w={"70%"} mt={5} />
      </Flex>
    </>
  );
}

export default Home;
