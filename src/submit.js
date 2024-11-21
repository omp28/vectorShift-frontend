import React, { useState } from "react";
import { useStore } from "./store";

export const SubmitButton = () => {
  const { collectData } = useStore();
  const [alertMessage, setAlertMessage] = useState("");

  const handleSubmit = async () => {
    const formattedData = collectData();
    console.log("Data to be sent to the backend:", formattedData);

    try {
      const response = await fetch("http://localhost:8000/pipelines/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData),
      });

      const data = await response.json();

      setAlertMessage(
        `Number of Nodes: ${data.num_nodes}\nNumber of Edges: ${data.num_edges}\nIs DAG: ${data.is_dag}`
      );
      alert(alertMessage);
    } catch (error) {
      console.error("Error submitting the pipeline:", error);
      alert("An error occurred while submitting the pipeline.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <button onClick={handleSubmit} style={{ padding: "10px 20px" }}>
        Submit
      </button>
    </div>
  );
};
