export default function StepCard({ title, status, children }) {
  return (
    <div className="step-card min-w-[240px]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <div
          className={`status-dot ${status ? "bg-green-500" : "bg-gray-300"}`}
        />
      </div>
      {children}
    </div>
  );
}
