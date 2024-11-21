import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";

function App() {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      <div className="w-64 bg-gray-800 p-4 flex flex-col">
        <PipelineToolbar />
        <SubmitButton />
      </div>
      <div className="flex-1">
        <PipelineUI />
      </div>
    </div>
  );
}

export default App;
