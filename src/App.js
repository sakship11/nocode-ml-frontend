import { useState } from "react";
import Pipeline from "./components/Pipeline";

function App() {
  const [status, setStatus] = useState({
    upload: false,
    preprocess: false,
    split: false,
    model: false,
  });

  const [uploadInfo, setUploadInfo] = useState(null);
  const [preprocessMethod, setPreprocessMethod] = useState(null);
  const [splitRatio, setSplitRatio] = useState(null);
  const [splitInfo, setSplitInfo] = useState(null);
  const [modelType, setModelType] = useState(null);
  const [accuracy, setAccuracy] = useState(null);

  const [uploadError, setUploadError] = useState(null);
  const [preprocessError, setPreprocessError] = useState(null);
  const [splitError, setSplitError] = useState(null);
  const [modelError, setModelError] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 px-8 py-6 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900">
            No-Code ML Pipeline Builder
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Build machine learning pipelines visually without writing code
          </p>
        </div>
      </header>

      <Pipeline 
        status={status} 
        setStatus={setStatus}
        uploadInfo={uploadInfo}
        setUploadInfo={setUploadInfo}
        preprocessMethod={preprocessMethod}
        setPreprocessMethod={setPreprocessMethod}
        splitRatio={splitRatio}
        setSplitRatio={setSplitRatio}
        splitInfo={splitInfo}
        setSplitInfo={setSplitInfo}
        modelType={modelType}
        setModelType={setModelType}
        accuracy={accuracy}
        setAccuracy={setAccuracy}
        uploadError={uploadError}
        setUploadError={setUploadError}
        preprocessError={preprocessError}
        setPreprocessError={setPreprocessError}
        splitError={splitError}
        setSplitError={setSplitError}
        modelError={modelError}
        setModelError={setModelError}
      />
    </div>
  );
}

export default App;
