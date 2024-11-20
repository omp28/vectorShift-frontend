import React from "react";
import { BaseNode } from "./baseNode";

export const OutputNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      type="Output"
      handles={{
        inputs: [{ position: "left" }],
      }}
    />
  );
};
