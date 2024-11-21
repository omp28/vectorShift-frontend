import React, { useState, useEffect } from "react";
import { useStore } from "./store";

export const SubmitButton = () => {
  const { collectData } = useStore();
  const [alertMessage, setAlertMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    const formattedData = collectData();
    console.log("Data to be sent to the backend:", formattedData);

    try {
      const apiBaseUrl =
        process.env.REACT_APP_API_BASE_URL || "http://localhost:8000";

      const response = await fetch(`${apiBaseUrl}/pipelines/parse`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData),
      });

      const data = await response.json();

      const message = `Number of Nodes: ${data.num_nodes}\nNumber of Edges: ${data.num_edges}\nIs DAG: ${data.is_dag}`;
      setAlertMessage(message);
    } catch (error) {
      console.error("Error submitting the pipeline:", error);
      setAlertMessage("An error occurred while submitting the pipeline.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (alertMessage) {
      alert(alertMessage);
    }
  }, [alertMessage]);

  return (
    <div className="mt-auto">
      <button
        onClick={handleSubmit}
        disabled={isLoading}
        className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300 ${
          isLoading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isLoading ? "Submitting..." : "Submit"}
      </button>
    </div>
  );
};
