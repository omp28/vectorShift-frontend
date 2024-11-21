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

  return (
    <div
      className={`${type} bg-gray-700 border border-gray-600 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-600 transition-all duration-300 cursor-grab min-w-[80px] h-[60px] flex items-center justify-center flex-col mb-3`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      draggable
    >
      <span className="text-gray-200 font-medium">{label}</span>
    </div>
  );
};
