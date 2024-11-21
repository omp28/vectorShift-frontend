import React, { useState, useRef, useEffect } from "react";
import { Handle, Position } from "reactflow";

export const BaseNode = ({ id, data, type, handles = {}, onUpdateContent }) => {
  const [content, setContent] = useState(data.content || "");
  const [variables, setVariables] = useState([]);
  const [dimensions, setDimensions] = useState({ width: 250, height: 150 });
  const textareaRef = useRef();

  const extractVariables = (text) => {
    const regex = /{{\s*(.*?)\s*}}/g;
    const matches = [];
    let match;
    while ((match = regex.exec(text)) !== null) {
      matches.push(match[1]);
    }
    return matches;
  };

  const handleContentChange = (e) => {
    const newContent = e.target.value;
    setContent(newContent);

    const newVariables = extractVariables(newContent);
    setVariables(newVariables);

    if (onUpdateContent) {
      onUpdateContent(id, newContent);
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      const { scrollWidth, scrollHeight } = textareaRef.current;
      setDimensions({
        height: Math.max(150, scrollHeight + 60),
      });
    }

    setVariables(extractVariables(content));
  }, [content]);

  const { inputs = [], outputs = [] } = handles;

  return (
    <div
      className="relative border border-gray-300 rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
      style={{
        width: `${dimensions.width}px`,
        minHeight: `${dimensions.height}px`,
      }}
    >
      <div className="bg-gray-100 px-4 py-2 rounded-t-lg border-b border-gray-300">
        <h3 className="text-lg font-semibold text-gray-800">{type} Node</h3>
      </div>
      <div className="p-4">
        <textarea
          ref={textareaRef}
          value={content}
          onChange={handleContentChange}
          placeholder="Enter text with {{variables}}"
          className="w-full min-h-[80px] resize-none border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          style={{ boxSizing: "border-box" }}
        />
        <div className="mt-3 flex flex-wrap gap-2">
          {variables.map((variable, index) => (
            <div
              key={`${id}-variable-${index}`}
              className="bg-blue-50 text-blue-600 text-xs font-medium px-2 py-1 rounded-full border border-blue-200"
            >
              {variable}
            </div>
          ))}
        </div>
      </div>
      {inputs.map((input, index) => (
        <Handle
          key={`${id}-input-${index}`}
          type="target"
          position={Position.Left}
          id={`${id}-input-${index}`}
          className="w-3 h-3 rounded-full bg-blue-500 border-2 border-white shadow-md -left-1.5"
        />
      ))}
      {outputs.map((output, index) => (
        <Handle
          key={`${id}-output-${index}`}
          type="source"
          position={Position.Right}
          id={`${id}-output-${index}`}
          className="w-3 h-3 rounded-full bg-green-500 border-2 border-white shadow-md -right-1.5"
        />
      ))}
    </div>
  );
};
