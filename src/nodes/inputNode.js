import React from "react";
import { BaseNode } from "./baseNode";

export const InputNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      type="Input"
      handles={{
        outputs: [{ position: "right" }],
      }}
    />
  );
};
