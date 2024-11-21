// src/draggableNode.js

const nodeStyles = {
  customInput: { bg: "bg-gray-900", text: "text-white" },
  llm: { bg: "bg-gray-900", text: "text-white" },
  customOutput: { bg: "bg-gray-900", text: "text-white" },
  text: { bg: "bg-gray-900", text: "text-white" },
  calculation: { bg: "bg-gray-900", text: "text-white" },
  logger: { bg: "bg-gray-900", text: "text-white" },
  condition: { bg: "bg-gray-900", text: "text-white" },
  dataTransform: { bg: "bg-gray-900", text: "text-white" },
  timer: { bg: "bg-gray-900", text: "text-white" },
};

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  const style = nodeStyles[type] || { bg: "bg-gray-800", text: "text-white" };

  return (
    <div
      className={`${style.bg} ${style.text} border border-transparent rounded-lg shadow-md hover:border-gray-400 hover:bg-gray-800 hover:shadow-lg transition-all duration-300 cursor-grab min-w-[80px] h-[60px] flex items-center justify-center flex-col mb-3`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      draggable
    >
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
};
