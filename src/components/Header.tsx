import React from "react";
import { Box, Flex, Link, Heading } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import ColorModeToggle from "./ColorModeToggle";

function Header() {
  return (
    <>
      <Flex justify="center" w={["90%", "70%"]} mt="10" direction="column">
        <Flex direction="row" justify="space-between" align="center">
          <Box>
            <ReachLink to="/">
              <Heading fontSize="3xl">Rhenan Dias</Heading>
            </ReachLink>
          </Box>
          <Box>
            <ColorModeToggle />
          </Box>
        </Flex>
        <Flex direction="row" justify="space-between" mt="6">
          <Box>
            <Link color="gray.500" mr="5" as={ReachLink} to="/">
              Projetos
            </Link>
            <Link color="gray.500" mr="5">
              Blog
            </Link>
          </Box>
          <Box>
            <Link
              color="gray.500"
              mr="5"
              href="https://github.com/rhenandias"
              isExternal
            >
              GitHub
            </Link>
            <Link
              color="gray.500"
              href="https://www.linkedin.com/in/rhenandiasmorais/"
              isExternal
            >
              LinkedIn
            </Link>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}

export default Header;
