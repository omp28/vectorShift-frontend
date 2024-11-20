import React from "react";
import { BaseNode } from "./baseNode";

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      type="LLM"
      handles={{
        inputs: [{ position: "left" }],
        outputs: [{ position: "right" }],
      }}
    />
  );
};
