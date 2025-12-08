import { useState, useEffect } from "react";

export const FadeInText = ({ 
  text, 
  delay = 0, 
  duration = 1000,
  staggerDelay = 50 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const words = text.split(" ");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <span style={{ display: "inline-block" }}>
      {words.map((word, index) => (
        <span
          key={index}
          style={{
            display: "inline-block",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: `opacity ${duration}ms ease ${index * staggerDelay}ms, transform ${duration}ms ease ${index * staggerDelay}ms`,
            marginRight: "0.3em",
          }}
        >
          {word}
        </span>
      ))}
    </span>
  );
};
