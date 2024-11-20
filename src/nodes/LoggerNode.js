import React from "react";
import { BaseNode } from "./baseNode";

export const LoggerNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      type="Logger"
      handles={{
        inputs: [{ position: "left" }],
        outputs: [{ position: "right" }],
      }}
    />
  );
};
