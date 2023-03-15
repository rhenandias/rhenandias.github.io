import React from "react";
import Link from "next/link";
import ColorModeToggle from "./ColorModeToggle";
import {
  Box,
  Flex,
  Link as ChakraLink,
  Heading,
  Divider,
} from "@chakra-ui/react";
import Head from "next/head";

interface Props {
  title: string;
  content: string;
}

function Header({ title, content }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={content} />
        <link rel="icon" href="/icon.png" />
      </Head>

      <Flex direction="row" justify="space-between" align="center" mt={10}>
        <Box>
          <Link href="/">
            <Heading fontSize="3xl">Rhenan Dias</Heading>
          </Link>
        </Box>
        <Box>
          <ColorModeToggle />
        </Box>
      </Flex>
      <Flex direction="row" justify="space-between" mt="6">
        <Box>
          <ChakraLink color="gray.500" mr="5" as={Link} href="/">
            Início
          </ChakraLink>
          <ChakraLink color="gray.500" mr="5" as={Link} href="/sobre">
            Sobre
          </ChakraLink>
          <ChakraLink color="gray.500" mr="5" as={Link} href="/projetos">
            Projetos
          </ChakraLink>
        </Box>
        <Box>
          <ChakraLink
            as={Link}
            color="gray.500"
            mr="5"
            href="https://github.com/rhenandias"
            isExternal
          >
            GitHub
          </ChakraLink>

          <ChakraLink
            as={Link}
            color="gray.500"
            href="https://www.linkedin.com/in/rhenandiasmorais/"
            isExternal
          >
            LinkedIn
          </ChakraLink>
        </Box>
      </Flex>
      <Divider mt="5" />
    </>
  );
}

export default Header;
