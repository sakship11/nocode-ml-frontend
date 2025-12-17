import StepCard from "./StepCard";
import API from "../api";

export default function Model({
  status,
  setStatus,
  model,
  setModel,
  accuracy,
  setAccuracy,
  error,
  setError,
}) {
  const applyModel = async () => {
    if (!model) {
      alert("Please select a model");
      return;
    }

    try {
      setError(null); // Clear previous error
      const res = await API.post("/train", {
        model,
      });

      setAccuracy(res.data.accuracy);
      setStatus((s) => ({ ...s, model: true }));
    } catch (err) {
      console.error("Training failed:", err);
      const errorMessage = err.response?.data?.error || "Training failed";
      setError(errorMessage);
    }
  };

  return (
    <StepCard title="Model Selection" status={status.model}>
      <div className="space-y-3">
        <button
          onClick={() => setModel("logistic")}
          disabled={!status.split}
          className={`w-full ${
            model === "logistic" ? "btn-primary" : "btn-secondary"
          }`}
        >
          Logistic Regression
        </button>

        <button
          onClick={() => setModel("tree")}
          disabled={!status.split}
          className={`w-full ${
            model === "tree" ? "btn-primary" : "btn-secondary"
          }`}
        >
          Decision Tree
        </button>

        <button
          onClick={applyModel}
          disabled={!status.split}
          className="btn-primary w-full mt-4"
        >
          Train Model
        </button>

        {accuracy !== null && (
          <div className="mt-4">
            <p className="text-gray-800 font-medium text-center mb-1">
              {model === "logistic" ? "Logistic Regression" : "Decision Tree"}{" "}
              Results
            </p>
            <p className="text-green-600 font-semibold text-center mb-2">
              Accuracy: {accuracy}%
            </p>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-green-600 h-4 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${accuracy}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 text-center mt-1">
              Model Performance
            </p>
          </div>
        )}

        {error && (
          <div className="mt-4 text-red-600 bg-red-50 p-3 rounded-lg border border-red-200">
            <p className="font-medium">Training Error:</p>
            <p className="text-sm">{error}</p>
          </div>
        )}
      </div>
    </StepCard>
  );
}
