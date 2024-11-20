import React from "react";
import { BaseNode } from "./baseNode";

export const CalculationNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      type="Calculation"
      handles={{
        inputs: [{ position: "left" }, { position: "top" }],
        outputs: [{ position: "right" }],
      }}
    />
  );
};
