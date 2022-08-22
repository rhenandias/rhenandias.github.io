import React from "react";
import { Link as ReachLink } from "react-router-dom";
import ColorModeToggle from "./ColorModeToggle";
import { Box, Flex, Link, Heading, Divider } from "@chakra-ui/react";

function Header() {
  return (
    <>
      <Flex direction="row" justify="space-between" align="center" mt={10}>
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
          <Link color="gray.500" mr="5" as={ReachLink} to="/about">
            Sobre
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
      <Divider mt="5" />
    </>
  );
}

export default Header;
