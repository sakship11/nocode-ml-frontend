import axios from "axios";
import StepCard from "./StepCard";

export default function NewAnalysis({
  setStatus,
  setUploadInfo,
  setPreprocessMethod,
  setSplitRatio,
  setSplitInfo,
  setModelType,
  setAccuracy,
  setUploadError,
  setPreprocessError,
  setSplitError,
  setModelError,
}) {
  const startNew = async () => {
    try {
      await axios.post("/reset");
      // Reset all status and data
      setStatus({
        upload: false,
        preprocess: false,
        split: false,
        model: false,
      });
      setUploadInfo(null);
      setPreprocessMethod(null);
      setSplitRatio(null);
      setSplitInfo(null);
      setModelType(null);
      setAccuracy(null);
      setUploadError(null);
      setPreprocessError(null);
      setSplitError(null);
      setModelError(null);
    } catch (err) {
      console.error("Reset failed:", err);
      // Still reset even if backend fails
      setStatus({
        upload: false,
        preprocess: false,
        split: false,
        model: false,
      });
      setUploadInfo(null);
      setPreprocessMethod(null);
      setSplitRatio(null);
      setSplitInfo(null);
      setModelType(null);
      setAccuracy(null);
      setUploadError(null);
      setPreprocessError(null);
      setSplitError(null);
      setModelError(null);
    }
  };

  return (
    <StepCard title="New Analysis" status={true}>
      <div className="text-center">
        <p className="text-sm text-gray-600 mb-4">
          Ready to analyze a different dataset?
        </p>
        <button onClick={startNew} className="btn-primary w-full">
          Start New Analysis
        </button>
      </div>
    </StepCard>
  );
}
