import React, { useState, useRef, useEffect } from "react";
import { Handle, Position } from "reactflow";

export const BaseNode = ({ id, data, type, handles = {}, onUpdateContent }) => {
  const [content, setContent] = useState(data.content || "");
  const [dimensions, setDimensions] = useState({ width: 200, height: 100 });
  const textareaRef = useRef();

  const handleContentChange = (e) => {
    setContent(e.target.value);
    if (onUpdateContent) {
      onUpdateContent(id, e.target.value);
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      const { scrollWidth, scrollHeight } = textareaRef.current;
      setDimensions({
        width: Math.max(200, scrollWidth + 20),
        height: Math.max(100, scrollHeight + 20),
      });
    }
  }, [content]);

  const { inputs = [], outputs = [] } = handles;

  return (
    <div
      className="relative border border-gray-400 rounded-lg bg-gray-100 p-4"
      style={{
        width: `${dimensions.width}px`,
        height: `${dimensions.height}px`,
      }}
    >
      <div className="mb-2 font-bold text-gray-700">{type} Node</div>
      <textarea
        ref={textareaRef}
        value={content}
        onChange={handleContentChange}
        placeholder="Enter custom content"
        className="w-full h-full resize-none border border-gray-300 rounded-md p-2 overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-400"
        style={{ boxSizing: "border-box" }}
      />
      {inputs.map((input, index) => (
        <Handle
          key={`${id}-input-${index}`}
          type="target"
          position={Position.Left}
          id={`${id}-input-${index}`}
          className="bg-blue-500 w-3 h-3 rounded-full"
        />
      ))}
      {outputs.map((output, index) => (
        <Handle
          key={`${id}-output-${index}`}
          type="source"
          position={Position.Right}
          id={`${id}-output-${index}`}
          className="bg-green-500 w-3 h-3 rounded-full"
        />
      ))}
    </div>
  );
};
