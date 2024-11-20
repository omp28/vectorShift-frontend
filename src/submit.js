import { useStore } from "./store";

export const SubmitButton = () => {
  const { collectData } = useStore();

  const handleSubmit = () => {
    const formattedData = collectData(); // Collect the data using the store's method
    console.log("Data to be sent to the backend:", formattedData);
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
