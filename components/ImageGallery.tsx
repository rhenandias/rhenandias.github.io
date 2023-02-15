import React, { useState, useEffect, useReducer } from "react";
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

interface ReducerAction {
  idx: number;
}

export default function ImageGallery({
  pictures,
  isOpen,
  onClose,
  openImageIdx,
}: ImageGalleryProps) {
  const [fade, setFade] = useState<boolean>(true);
  const [pictureIdx, setPictureIdx] = useState<number>(openImageIdx);

  const [currentImgSrc, dispatch] = useReducer(
    currentImgReducer,
    pictures[openImageIdx].src
  );

  function currentImgReducer(currentImgSrc: string, action: ReducerAction) {
    return pictures[action.idx].src;
  }

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
      dispatch({
        idx: pictureIdx,
      });
    }, 200);

    return () => clearTimeout(timeout);
  }, [pictureIdx]);

  return (
    // Tamanho anterior: 6xl
    <Modal isOpen={isOpen} onClose={onClose} size={"6xl"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader></ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex align={"center"} justify={"center"} grow={"1"}>
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
                maxHeight={"500px"}
              />
            </Fade>
            <ChevronRightIcon
              boxSize={25}
              cursor={"pointer"}
              onClick={() => changePicture(1)}
            />
          </Flex>
          <Flex align={"center"} justify={"center"}>
            {pictures.map((picture, idx) => (
              <ChakraImage
                key={idx}
                m={5}
                as={Image}
                src={picture.src}
                alt="Galeria"
                borderRadius={10}
                maxWidth={"150px"}
                cursor={"pointer"}
                onClick={() => {
                  setPictureIdx(idx);
                }}
              />
            ))}
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
