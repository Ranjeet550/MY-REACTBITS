export const DotsLoader = ({ color = "#38bdf8", size = 12 }) => {
  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            width: size,
            height: size,
            borderRadius: "50%",
            background: color,
            animation: `bounce 1.4s infinite ease-in-out both`,
            animationDelay: `${i * 0.16}s`,
          }}
        />
      ))}
      <style>
        {`
          @keyframes bounce {
            0%, 80%, 100% {
              transform: scale(0);
            }
            40% {
              transform: scale(1);
            }
          }
        `}
      </style>
    </div>
  );
};
