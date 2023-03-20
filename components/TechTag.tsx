import React from "react";

import { Tag } from "@chakra-ui/react";

const techs = [
  "node",
  "react",
  "aws",
  "mysql",
  "fullstack",
  "arduino",
  "impressora",
  "maker",
  "postgresql",
  "socketio",
] as const;

interface Props {
  tech: typeof techs[number];
}

const colors = {
  node: "blue",
  react: "red",
  aws: "orange",
  mysql: "cyan",
  fullstack: "green",
  arduino: "teal",
  impressora: "red",
  maker: "orange",
  postgresql: "pink",
  socketio: "green",
};

const texts = {
  node: "Node.js",
  react: "React.js",
  aws: "AWS",
  mysql: "MySQL",
  fullstack: "Fullstack",
  arduino: "Arduino",
  impressora: "Impressão 3D",
  maker: "Maker",
  postgresql: "PostgreSQL",
  socketio: "Socket.IO",
};

function TechTag({ tech }: Props) {
  return (
    <Tag size={"sm"} colorScheme={colors[tech]}>
      {texts[tech]}
    </Tag>
  );
}

export default TechTag;
