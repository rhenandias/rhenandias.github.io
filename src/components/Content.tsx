import React, { ReactNode } from "react";

import { Box } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}

function Content({ children }: Props) {
  return <Box>{children}</Box>;
}

export default Content;
