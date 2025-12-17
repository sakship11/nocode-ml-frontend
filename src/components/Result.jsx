import StepCard from "./StepCard";

export default function Result({
  status,
  uploadInfo,
  preprocessMethod,
  splitInfo,
  modelType,
  accuracy,
}) {
  return (
    <StepCard title="Pipeline Summary" status={status.model}>
      {status.model ? (
        <div className="space-y-4">
          <div className="text-center">
            <div className="text-green-600 mb-3">
              <svg
                className="w-12 h-12 mx-auto mb-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-lg font-semibold">
                ML Pipeline Completed Successfully!
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-3">
              Pipeline Overview:
            </h4>
            <div className="grid grid-cols-1 gap-2 text-sm">
              <div className="flex justify-between items-center py-1 border-b border-gray-200">
                <span className="text-gray-600 font-medium">Dataset:</span>
                <span className="text-gray-800">
                  {uploadInfo
                    ? `${uploadInfo.rows} rows, ${uploadInfo.columns} columns`
                    : "N/A"}
                </span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-gray-200">
                <span className="text-gray-600 font-medium">
                  Preprocessing:
                </span>
                <span className="text-gray-800">
                  {preprocessMethod === "standard"
                    ? "Standardization"
                    : preprocessMethod === "minmax"
                    ? "Normalization"
                    : "N/A"}
                </span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-gray-200">
                <span className="text-gray-600 font-medium">
                  Train-Test Split:
                </span>
                <span className="text-gray-800">
                  {splitInfo
                    ? `${splitInfo.train_samples} train, ${splitInfo.test_samples} test`
                    : "N/A"}
                </span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-gray-200">
                <span className="text-gray-600 font-medium">Model:</span>
                <span className="text-gray-800">
                  {modelType === "logistic"
                    ? "Logistic Regression"
                    : modelType === "tree"
                    ? "Decision Tree"
                    : "N/A"}
                </span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-gray-600 font-medium">Accuracy:</span>
                <span className="text-green-600 font-semibold">
                  {accuracy !== null ? `${accuracy}%` : "N/A"}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-medium text-blue-800 mb-2">Next Steps:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Try different preprocessing methods</li>
              <li>• Experiment with other models</li>
              <li>• Adjust train-test split ratios</li>
              <li>• Use a new dataset for comparison</li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-400">
          <svg
            className="w-12 h-12 mx-auto mb-2 opacity-50"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-sm mb-2">
            Complete the ML pipeline to see results
          </p>
          <div className="text-xs text-gray-500">
            <p>Steps remaining:</p>
            <ul className="mt-1">
              {!status.upload && <li>• Upload dataset</li>}
              {!status.preprocess && <li>• Apply preprocessing</li>}
              {!status.split && <li>• Perform train-test split</li>}
              {!status.model && <li>• Train model</li>}
            </ul>
          </div>
        </div>
      )}
    </StepCard>
  );
}
