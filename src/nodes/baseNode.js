import React, { useState } from "react";
import { Handle, Position } from "reactflow";

export const BaseNode = ({ id, data, type, handles = {}, onUpdateContent }) => {
  const [content, setContent] = useState(data.content || "");

  const handleContentChange = (e) => {
    setContent(e.target.value);
    if (onUpdateContent) {
      onUpdateContent(id, e.target.value);
    }
  };

  const { inputs = [], outputs = [] } = handles;

  return (
    <div
      style={{
        width: 200,
        padding: "10px",
        border: "1px solid black",
        borderRadius: "8px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div style={{ marginBottom: "10px", fontWeight: "bold" }}>
        {type} Node
      </div>
      <textarea
        value={content}
        onChange={handleContentChange}
        placeholder="Enter custom content"
        style={{
          width: "100%",
          resize: "none",
          border: "1px solid #ccc",
          borderRadius: "4px",
          padding: "5px",
        }}
      />
      {inputs.map((input, index) => (
        <Handle
          key={`${id}-input-${index}`}
          type="target"
          position={Position.Left}
          id={`${id}-input-${index}`}
          style={{ background: "blue" }}
        />
      ))}
      {outputs.map((output, index) => (
        <Handle
          key={`${id}-output-${index}`}
          type="source"
          position={Position.Right}
          id={`${id}-output-${index}`}
          style={{ background: "green" }}
        />
      ))}
    </div>
  );
};
