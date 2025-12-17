import Upload from "./Upload";
import Preprocess from "./Preprocess";
import Split from "./Split";
import Model from "./Model";
import Result from "./Result";
import NewAnalysis from "./NewAnalysis";

export default function Pipeline({
  status,
  setStatus,
  uploadInfo,
  setUploadInfo,
  preprocessMethod,
  setPreprocessMethod,
  splitRatio,
  setSplitRatio,
  splitInfo,
  setSplitInfo,
  modelType,
  setModelType,
  accuracy,
  setAccuracy,
  uploadError,
  setUploadError,
  preprocessError,
  setPreprocessError,
  splitError,
  setSplitError,
  modelError,
  setModelError,
}) {
  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="flex items-start justify-start gap-6 overflow-x-auto px-6 pb-4">
        <Upload
          status={status}
          setStatus={setStatus}
          info={uploadInfo}
          setInfo={setUploadInfo}
          error={uploadError}
          setError={setUploadError}
        />
        <Arrow />

        <Preprocess
          status={status}
          setStatus={setStatus}
          method={preprocessMethod}
          setMethod={setPreprocessMethod}
          error={preprocessError}
          setError={setPreprocessError}
        />
        <Arrow />

        <Split
          status={status}
          setStatus={setStatus}
          ratio={splitRatio}
          setRatio={setSplitRatio}
          info={splitInfo}
          setInfo={setSplitInfo}
          error={splitError}
          setError={setSplitError}
        />
        <Arrow />

        <Model
          status={status}
          setStatus={setStatus}
          model={modelType}
          setModel={setModelType}
          accuracy={accuracy}
          setAccuracy={setAccuracy}
          error={modelError}
          setError={setModelError}
        />
        <Arrow />

        <Result
          status={status}
          uploadInfo={uploadInfo}
          preprocessMethod={preprocessMethod}
          splitInfo={splitInfo}
          modelType={modelType}
          accuracy={accuracy}
        />
        <Arrow />

        <NewAnalysis
          setStatus={setStatus}
          setUploadInfo={setUploadInfo}
          setPreprocessMethod={setPreprocessMethod}
          setSplitRatio={setSplitRatio}
          setSplitInfo={setSplitInfo}
          setModelType={setModelType}
          setAccuracy={setAccuracy}
          setUploadError={setUploadError}
          setPreprocessError={setPreprocessError}
          setSplitError={setSplitError}
          setModelError={setModelError}
        />
      </div>
    </div>
  );
}

function Arrow() {
  return <div className="text-gray-400 text-3xl select-none mx-2">→</div>;
}
