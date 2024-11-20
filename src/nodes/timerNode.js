import React from "react";
import { BaseNode } from "./baseNode";

export const TimerNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      type="Timer"
      handles={{
        inputs: [{ position: "left" }],
        outputs: [{ position: "right" }],
      }}
    />
  );
};
