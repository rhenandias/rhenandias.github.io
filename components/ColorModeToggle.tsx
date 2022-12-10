import React from "react";
import styled from "styled-components";

import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { useColorMode } from "@chakra-ui/react";

const Button = styled.button`
  opacity: 0.65;
  position: relative;
  border-radius: 5px;
  width: 40px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  padding: 0;
  appearance: none;

  &:hover {
    opacity: 1;
  }

  &:focus {
    opacity: 1;
  }
`;

function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Button
        onClick={toggleColorMode}
        type="button"
        aria-label={
          colorMode === "dark" ? `Ativar Modo Claro` : `Ativar Modo Escuro`
        }
        title={
          colorMode === "dark" ? `Ativar Modo Claro` : `Ativar Modo Escuro`
        }
      >
        {colorMode === "dark" && <BsSunFill size={23} />}
        {colorMode === "light" && <BsMoonFill size={23} />}
      </Button>
    </>
  );
}

export default ColorModeToggle;
