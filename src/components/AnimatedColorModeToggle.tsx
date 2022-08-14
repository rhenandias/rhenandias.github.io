import React from "react";
import styled from "styled-components";
import { ColorMode, useColorMode } from "@chakra-ui/react";

interface Props {
  colorMode: ColorMode;
}

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

const Div = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: ${(props: Props) =>
    props.colorMode === "dark" ? "4px solid #cbd5e0" : "none"};
  background-color: ${(props: Props) =>
    props.colorMode === "dark" ? "#cbd5e0" : "transparent"};
  transform: ${(props: Props) =>
    props.colorMode === "dark" ? "scale(0.55)" : "scale(1)"};
  transition: all 0.45s ease;
  overflow: ${(props: Props) =>
    props.colorMode === "dark" ? "visible" : "hidden"};
  box-shadow: ${(props: Props) =>
    props.colorMode === "dark" ? "none" : "inset 8px -8px 0px 0px #000"};

  &:before {
    content: "";
    position: absolute;
    right: -9px;
    top: -9px;
    height: 24px;
    width: 24px;
    border: ${(props: Props) =>
      props.colorMode === "dark" ? "2px solid #cbd5e0" : "none"};
    border-radius: 50%;
    transform: ${(props: Props) =>
      props.colorMode === "dark"
        ? "translate(14px, -14px)"
        : "translate(0, 0)"};
    opacity: ${(props: Props) => (props.colorMode === "dark" ? 0 : 1)};
    transition: transform 0.45s ease;
  }

  &:after {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin: -4px 0 0 -4px;
    position: absolute;
    top: 50%;
    left: 50%;
    box-shadow: 0 -23px 0 #cbd5e0, 0 23px 0 #cbd5e0, 23px 0 0 #cbd5e0,
      -23px 0 0 #cbd5e0, 15px 15px 0 #cbd5e0, -15px 15px 0 #cbd5e0,
      15px -15px 0 #cbd5e0, -15px -15px 0 #cbd5e0;
    transform: ${(props: Props) =>
      props.colorMode === "dark" ? "scale(1)" : "scale(0)"};
    transition: all 0.35s ease;
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
          colorMode === "dark" ? `Activate Light Mode` : `Activate Dark Mode`
        }
        title={
          colorMode === "dark" ? `Activate Light Mode` : `Activate Dark Mode`
        }
      >
        <Div colorMode={colorMode} />
      </Button>
    </>
  );
}

export default ColorModeToggle;
