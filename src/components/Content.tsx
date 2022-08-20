import React, { ReactNode } from "react";

import { Box } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}

function Content({ children }: Props) {
  return <Box h={"100vh"}>{children}</Box>;
}

export default Content;
