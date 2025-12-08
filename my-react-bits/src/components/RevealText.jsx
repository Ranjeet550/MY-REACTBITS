import { useState, useEffect } from "react";

export const RevealText = ({ 
  children, 
  delay = 0,
  color = "#fff",
  fontSize = 32 
}) => {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsRevealed(true);
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <span
      style={{
        position: "relative",
        display: "inline-block",
        color: color,
        fontSize: fontSize,
        fontWeight: 700,
        overflow: "hidden",
      }}
    >
      <span
        style={{
          display: "inline-block",
          transform: isRevealed ? "translateY(0)" : "translateY(100%)",
          transition: "transform 0.8s cubic-bezier(0.76, 0, 0.24, 1)",
        }}
      >
        {children}
      </span>
      <span
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "#667eea",
          transform: isRevealed ? "translateX(100%)" : "translateX(0)",
          transition: "transform 0.8s cubic-bezier(0.76, 0, 0.24, 1) 0.4s",
        }}
      />
    </span>
  );
};
