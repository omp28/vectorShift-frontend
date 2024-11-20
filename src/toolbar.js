// toolbar.js

import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div style={{ padding: "10px" }}>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="calculation" label="Calculation" />
        <DraggableNode type="logger" label="Logger" />
        <DraggableNode type="condition" label="Condition" />
        <DraggableNode type="dataTransform" label="Data Transform" />
        <DraggableNode type="timer" label="Timer" />
      </div>
    </div>
  );
};
