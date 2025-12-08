export const WaveText = ({ 
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
          className="wave-letter"
          style={{
            display: "inline-block",
            color: color,
            fontSize: fontSize,
            fontWeight: 700,
            animation: `wave 1.2s ease-in-out infinite`,
            animationDelay: `${index * 0.1}s`,
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
      <style>{`
        @keyframes wave {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </span>
  );
};
