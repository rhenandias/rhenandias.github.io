import React from "react";

import Image, { StaticImageData } from "next/image";

import { Image as ChakraImage, useColorMode, Link } from "@chakra-ui/react";

interface Props {
  imgDark: StaticImageData;
  imgLight: StaticImageData;
  url: string;
  [key: string]: unknown;
}

function SocialMedia({ imgDark, imgLight, url, ...props }: Props) {
  const { colorMode } = useColorMode();

  const forcedDark = imgDark as unknown;
  const forcedLight = imgLight as unknown;

  const forcedDarkString = forcedDark as string;
  const forcedLightString = forcedLight as string;

  return (
    <>
      <Link href={url} isExternal>
        <ChakraImage
          as={Image}
          {...props}
          src={colorMode === "dark" ? forcedDarkString : forcedLightString}
        />
      </Link>
    </>
  );
}

export default SocialMedia;
