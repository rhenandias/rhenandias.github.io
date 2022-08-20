import React, { useState, useEffect, ReactNode } from "react";

import { Fade, ScaleFade } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
  idx: number;
}

function FadeAnimation({ children, idx }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, idx * 100);
  }, []);

  return (
    <ScaleFade initialScale={0.6} in={open}>
      {children}
    </ScaleFade>
  );
}

export default FadeAnimation;
