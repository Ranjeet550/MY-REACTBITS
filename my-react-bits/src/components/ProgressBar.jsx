export const ProgressBar = ({ progress = 0, height = 8, color = "#38bdf8" }) => {
  return (
    <div
      style={{
        width: "100%",
        height: height,
        background: "#1f2933",
        borderRadius: 999,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${Math.min(100, Math.max(0, progress))}%`,
          background: color,
          transition: "width 0.3s ease",
          borderRadius: 999,
        }}
      />
    </div>
  );
};
