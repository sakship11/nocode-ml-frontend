import StepCard from "./StepCard";
import API from "../api";

export default function Upload({
  status,
  setStatus,
  info,
  setInfo,
  error,
  setError,
}) {
  const upload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      setError(null); // Clear previous error
      const res = await API.post("/upload", formData);

      setInfo(res.data);
      setStatus((s) => ({ ...s, upload: true }));
    } catch (err) {
      console.error("Upload failed:", err);
      const errorMessage = err.response?.data?.error || "Upload failed";
      setError(errorMessage);
    }
  };

  return (
    <StepCard title="Upload Dataset" status={status.upload}>
      <div className="space-y-4">
        <input
          type="file"
          onChange={upload}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />

        {info && (
          <div className="mt-4 text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
            <p className="font-medium mb-2">Dataset Information:</p>
            <p>
              <strong>Rows:</strong> {info.rows}
            </p>
            <p>
              <strong>Columns:</strong> {info.columns}
            </p>

            <p className="mt-2 font-medium">Column Names:</p>
            <ul className="list-disc list-inside ml-2">
              {info.column_names.map((col, idx) => (
                <li key={idx}>{col}</li>
              ))}
            </ul>
          </div>
        )}

        {error && (
          <div className="mt-4 text-red-600 bg-red-50 p-3 rounded-lg border border-red-200">
            <p className="font-medium">Upload Error:</p>
            <p className="text-sm">{error}</p>
          </div>
        )}
      </div>
    </StepCard>
  );
}
