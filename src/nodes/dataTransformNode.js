import React from "react";
import { BaseNode } from "./baseNode";

export const DataTransformNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      type="Data Transform"
      handles={{
        inputs: [{ position: "left" }],
        outputs: [{ position: "right" }],
      }}
    />
  );
};
