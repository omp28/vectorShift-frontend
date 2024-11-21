import React, { useState, useRef, useEffect } from "react";
import { Handle, Position } from "reactflow";

const nodeStyles = {
  customInput: { bg: "bg-blue-600", text: "text-white" },
  llm: { bg: "bg-green-600", text: "text-white" },
  customOutput: { bg: "bg-purple-600", text: "text-white" },
  text: { bg: "bg-yellow-600", text: "text-black" },
  calculation: { bg: "bg-red-600", text: "text-white" },
  logger: { bg: "bg-indigo-600", text: "text-white" },
  condition: { bg: "bg-teal-600", text: "text-white" },
  dataTransform: { bg: "bg-orange-600", text: "text-white" },
  timer: { bg: "bg-gray-600", text: "text-white" },
};

export const BaseNode = ({ id, data, type, handles = {}, onUpdateContent }) => {
  const [content, setContent] = useState(data.content || "");
  const [variables, setVariables] = useState([]);
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
    setVariables(extractVariables(content));
  }, [content]);

  const { inputs = [], outputs = [] } = handles;

  const calculateHandlePosition = (index, totalHandles, isVariable = false) => {
    const nodeHeight = 150;
    const verticalSpacing = nodeHeight / (totalHandles + 1);
    return `${verticalSpacing * (index + 1)}px`;
  };

  const style = nodeStyles[type] || { bg: "bg-gray-600", text: "text-white" };

  return (
    <div
      className={`relative ${style.bg} border border-gray-600 rounded-lg shadow-lg transition-shadow hover:shadow-xl`}
      style={{
        minWidth: "250px",
        width: "auto",
        minHeight: "150px",
      }}
    >
      <div className="px-4 py-2 rounded-t-lg border-b border-gray-600">
        <h3 className={`text-lg font-semibold ${style.text}`}>{type} Node</h3>
      </div>
      <div className="p-4">
        <textarea
          ref={textareaRef}
          value={content}
          onChange={handleContentChange}
          placeholder="Enter text with {{variables}}"
          className="w-full min-h-[80px] resize-none bg-gray-800 border border-gray-600 rounded-md p-2 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          style={{ boxSizing: "border-box" }}
        />
        <div className="mt-3 flex flex-wrap gap-2">
          {variables.map((variable, index) => (
            <div
              key={`${id}-variable-${index}`}
              className="bg-blue-900 text-blue-200 text-xs font-medium px-2 py-1 rounded-full border border-blue-700"
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
          style={{
            top: calculateHandlePosition(index, inputs.length),
          }}
          className="w-3 h-3 rounded-full bg-blue-500 border-2 border-gray-800 shadow-md -left-1.5"
        />
      ))}

      {variables.map((variable, index) => (
        <Handle
          key={`${id}-variable-${index}`}
          type="target"
          position={Position.Left}
          id={`${id}-variable-${variable}`}
          style={{
            top: calculateHandlePosition(
              index + inputs.length,
              variables.length + inputs.length,
              true
            ),
          }}
          className="w-3 h-3 rounded-full bg-purple-500 border-2 border-gray-800 shadow-md -left-1.5"
        />
      ))}

      {outputs.map((output, index) => (
        <Handle
          key={`${id}-output-${index}`}
          type="source"
          position={Position.Right}
          id={`${id}-output-${index}`}
          style={{
            top: calculateHandlePosition(index, outputs.length),
          }}
          className="w-3 h-3 rounded-full bg-green-500 border-2 border-gray-800 shadow-md -right-1.5"
        />
      ))}
    </div>
  );
};
