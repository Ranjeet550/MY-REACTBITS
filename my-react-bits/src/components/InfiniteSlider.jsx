export const InfiniteSlider = ({ items = [], speed = 30, direction = "left" }) => {
  const animationDirection = direction === "left" ? "slideLeft" : "slideRight";

  return (
    <div
      style={{
        overflow: "hidden",
        width: "100%",
        position: "relative",
        background: "rgba(0, 0, 0, 0.2)",
        padding: "20px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 20,
          animation: `${animationDirection} ${speed}s linear infinite`,
          width: "fit-content",
        }}
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            style={{
              minWidth: 200,
              padding: 16,
              background: "rgba(255, 255, 255, 0.05)",
              borderRadius: 12,
              border: "1px solid rgba(255, 255, 255, 0.1)",
              whiteSpace: "nowrap",
            }}
          >
            {item}
          </div>
        ))}
      </div>
      <style>
        {`
          @keyframes slideLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes slideRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
        `}
      </style>
    </div>
  );
};
