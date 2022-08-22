import React, { ReactNode } from "react";

import { Box } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
  props?: unknown;
}

function Content({ children, ...props }: Props) {
  return (
    <Box minH={"calc(100vh - 205px)"} p={0} m={0} {...props}>
      {children}
    </Box>
  );
}

export default Content;
