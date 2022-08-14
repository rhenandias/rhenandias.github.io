import React from "react";
import { Image, useColorMode, Link } from "@chakra-ui/react";

interface Props {
  imgDark: string;
  imgLight: string;
  url: string;
  [key: string]: unknown;
}

function SocialMedia({ imgDark, imgLight, url, ...props }: Props) {
  const { colorMode } = useColorMode();

  return (
    <>
      <Link href={url} isExternal>
        <Image {...props} src={colorMode === "dark" ? imgDark : imgLight} />
      </Link>
    </>
  );
}

export default SocialMedia;
