import React from "react";

import { Tag } from "@chakra-ui/react";

const techs = ["node", "react", "aws", "mysql", "fullstack"] as const;

interface Props {
  tech: typeof techs[number];
}

const colors = {
  node: "blue",
  react: "red",
  aws: "orange",
  mysql: "cyan",
  fullstack: "green",
};

const texts = {
  node: "Node.js",
  react: "React.js",
  aws: "AWS",
  mysql: "MySQL",
  fullstack: "Fullstack",
};

function TechTag({ tech }: Props) {
  return (
    <Tag size={"sm"} colorScheme={colors[tech]}>
      {texts[tech]}
    </Tag>
  );
}

export default TechTag;
