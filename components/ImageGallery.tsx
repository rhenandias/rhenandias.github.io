import React, { useState, useEffect } from "react";
import Image from "next/image";

import {
  Fade,
  Flex,
  Image as ChakraImage,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

interface ImageGalleryProps {
  pictures: Array<any>;
  isOpen: boolean;
  onClose: () => void;
  openImageIdx: number;
}

export default function ImageGallery({
  pictures,
  isOpen,
  onClose,
  openImageIdx,
}: ImageGalleryProps) {
  console.log("Abrindo em ", openImageIdx);

  const [fade, setFade] = useState<boolean>(true);
  const [pictureIdx, setPictureIdx] = useState<number>(openImageIdx);

  const [currentImgSrc, setCurrentImgSrc] = useState(
    pictures[openImageIdx].src
  );

  const changePicture = (direction: number) => {
    let nextIdx = pictureIdx + direction;

    if (nextIdx < 0) nextIdx = pictures.length - 1;
    if (nextIdx > pictures.length - 1) nextIdx = 0;

    setPictureIdx(nextIdx);
  };

  useEffect(() => {
    setFade(false);

    const timeout = setTimeout(() => {
      setFade(true);
      setCurrentImgSrc(pictures[pictureIdx].src);
    }, 200);

    return () => clearTimeout(timeout);
  }, [pictureIdx]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"6xl"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader></ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex align={"center"} grow={"1"}>
            <ChevronLeftIcon
              boxSize={25}
              cursor={"pointer"}
              onClick={() => changePicture(-1)}
            />
            <Fade in={fade}>
              <ChakraImage
                m={5}
                as={Image}
                src={currentImgSrc}
                alt="Galeria"
                borderRadius={10}
                maxWidth={"92%"}
              />
            </Fade>
            <ChevronRightIcon
              boxSize={25}
              cursor={"pointer"}
              onClick={() => changePicture(1)}
            />
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
