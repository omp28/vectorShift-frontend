// src/draggableNode.js

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

  const style = nodeStyles[type] || { bg: "bg-gray-700", text: "text-white" };

  return (
    <div
      className={`${style.bg} ${style.text} border border-gray-600 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-600 transition-all duration-300 cursor-grab min-w-[80px] h-[60px] flex items-center justify-center flex-col mb-3`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      draggable
    >
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
};
