import React from "react";
import { BaseNode } from "./baseNode";

export const ConditionNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      type="Condition"
      handles={{
        inputs: [{ position: "left" }],
        outputs: [{ position: "right" }, { position: "bottom" }],
      }}
    />
  );
};
