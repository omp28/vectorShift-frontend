import React from "react";
import { BaseNode } from "./baseNode";

export const TextNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      type="Text"
      handles={{
        inputs: [{ position: "left" }],
        outputs: [{ position: "right" }],
      }}
    />
  );
};
