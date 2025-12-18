export const FallingText = ({
  children = '',
  color = "#667eea",
  fontSize = 32,
  fontWeight = 700,
  animationDuration = 1.5,
  staggerDelay = 0.05,
  fallDistance = 100,
  opacity = 1
}) => {
  // Split text into individual characters including spaces
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
            fontWeight: fontWeight,
            opacity: opacity,
            animation: `fall ${animationDuration}s cubic-bezier(0.34, 1.56, 0.64, 1) infinite`,
            animationDelay: `${index * staggerDelay}s`,
            transform: "translateY(0px)",
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-${fallDistance}px) rotate(-10deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: translateY(${fallDistance * 2}px) rotate(10deg);
            opacity: 0;
          }
        }
      `}</style>
    </span>
  );
};