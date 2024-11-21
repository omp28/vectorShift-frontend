import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div className="flex-1 overflow-y-auto">
      <h2 className="text-xl font-semibold text-gray-300 mb-4">Toolbox</h2>
      <div className="space-y-2">
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
