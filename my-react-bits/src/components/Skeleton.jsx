export const Skeleton = ({ width = "100%", height = 20, borderRadius = 4 }) => {
  return (
    <div
      style={{
        width,
        height,
        borderRadius,
        background: "linear-gradient(90deg, #1f2933 0%, #2d3748 50%, #1f2933 100%)",
        backgroundSize: "200% 100%",
        animation: "skeleton-loading 1.5s ease-in-out infinite",
      }}
    >
      <style>
        {`
          @keyframes skeleton-loading {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
        `}
      </style>
    </div>
  );
};
