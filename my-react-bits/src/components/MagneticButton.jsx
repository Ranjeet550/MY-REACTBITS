import { useState, useRef } from "react";

export const MagneticButton = ({ children, strength = 0.3, ...rest }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <button
      ref={buttonRef}
      {...rest}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: "relative",
        padding: "12px 32px",
        fontSize: 16,
        fontWeight: 600,
        color: "#fff",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        border: "none",
        borderRadius: 12,
        cursor: "pointer",
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: "transform 0.3s ease-out",
        boxShadow: "0 4px 20px rgba(102, 126, 234, 0.4)",
        ...rest.style,
      }}
    >
      {children}
    </button>
  );
};
