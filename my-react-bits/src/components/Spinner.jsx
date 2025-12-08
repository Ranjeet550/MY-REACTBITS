export const Spinner = ({ size = 40, color = "#38bdf8", thickness = 4 }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        border: `${thickness}px solid rgba(56, 189, 248, 0.2)`,
        borderTop: `${thickness}px solid ${color}`,
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
      }}
    >
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};
