import StepCard from "./StepCard";
import API from "../api";

export default function Preprocess({
  status,
  setStatus,
  method,
  setMethod,
  error,
  setError,
}) {
  const apply = async () => {
    if (!method) {
      alert("Please select a preprocessing method");
      return;
    }

    try {
      setError(null); // Clear previous error
      await API.post("/preprocess", { method }); // use relative URL
      setStatus((s) => ({ ...s, preprocess: true }));
    } catch (err) {
      console.error("Preprocessing failed:", err);
      const errorMessage =
        err.response?.data?.error ||
        "Network or server error during preprocessing";
      setError(errorMessage);
    }
  };

  return (
    <StepCard title="Preprocessing" status={status.preprocess}>
      <div className="space-y-3">
        <button
          onClick={() => setMethod("standard")}
          className={`w-full ${
            method === "standard" ? "btn-primary" : "btn-secondary"
          }`}
          disabled={!status.upload}
        >
          Standardization
        </button>

        <button
          onClick={() => setMethod("minmax")}
          className={`w-full ${
            method === "minmax" ? "btn-primary" : "btn-secondary"
          }`}
          disabled={!status.upload}
        >
          Normalization
        </button>

        <button
          onClick={apply}
          disabled={!status.upload}
          className="btn-primary w-full mt-4"
        >
          Apply Preprocessing
        </button>

        {error && (
          <div className="mt-4 text-red-600 bg-red-50 p-3 rounded-lg border border-red-200">
            <p className="font-medium">Preprocessing Error:</p>
            <p className="text-sm">{error}</p>
          </div>
        )}
      </div>
    </StepCard>
  );
}
