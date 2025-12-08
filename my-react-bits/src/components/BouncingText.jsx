export const BouncingText = ({ 
  children, 
  color = "#667eea",
  fontSize = 32 
}) => {
  const letters = children.split("");

  return (
    <span style={{ display: "inline-block" }}>
      {letters.map((letter, index) => (
        <span
          key={index}
          style={{
            display: "inline-block",
            color: color,
            fontSize: fontSize,
            fontWeight: 700,
            animation: `bounce 0.6s ease-in-out infinite`,
            animationDelay: `${index * 0.05}s`,
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
      <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-15px) scale(1.1);
          }
        }
      `}</style>
    </span>
  );
};
