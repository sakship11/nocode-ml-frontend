import axios from "axios";
import StepCard from "./StepCard";
import API from "../api";

export default function Split({
  status,
  setStatus,
  ratio,
  setRatio,
  info,
  setInfo,
  error,
  setError,
}) {
  const applySplit = async () => {
    if (!ratio) {
      alert("Please select a split ratio");
      return;
    }

    try {
      setError(null); // Clear previous error
      const res = await API.post("/split", { ratio });
      setInfo(res.data);
      setStatus((s) => ({ ...s, split: true }));
    } catch (err) {
      console.error("Split failed:", err);
      const errorMessage = err.response?.data?.error || "Split failed";
      setError(errorMessage);
    }
  };

  return (
    <StepCard title="Train–Test Split" status={status.split}>
      <div className="space-y-3">
        <button
          onClick={() => setRatio(0.2)}
          disabled={!status.preprocess}
          className={`w-full ${
            ratio === 0.2 ? "btn-primary" : "btn-secondary"
          }`}
        >
          80 / 20 Split
        </button>

        <button
          onClick={() => setRatio(0.3)}
          disabled={!status.preprocess}
          className={`w-full ${
            ratio === 0.3 ? "btn-primary" : "btn-secondary"
          }`}
        >
          70 / 30 Split
        </button>

        <button
          onClick={applySplit}
          disabled={!status.preprocess}
          className="btn-primary w-full mt-4"
        >
          Apply Split
        </button>

        {info && (
          <div className="mt-4 text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
            <p className="font-medium mb-2">Split Results:</p>
            <p>
              <strong>Training Samples:</strong> {info.train_samples}
            </p>
            <p>
              <strong>Test Samples:</strong> {info.test_samples}
            </p>
          </div>
        )}

        {error && (
          <div className="mt-4 text-red-600 bg-red-50 p-3 rounded-lg border border-red-200">
            <p className="font-medium">Split Error:</p>
            <p className="text-sm">{error}</p>
          </div>
        )}
      </div>
    </StepCard>
  );
}
