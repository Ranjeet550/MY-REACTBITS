import { useState } from "react";

export const ParallaxCard = ({ title, description, children, imageUrl }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: "relative",
        width: "100%",
        height: 300,
        borderRadius: 16,
        overflow: "hidden",
        cursor: "pointer",
        perspective: "1000px",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: imageUrl 
            ? `url(${imageUrl}) center/cover`
            : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          transform: `translate(${position.x}px, ${position.y}px) scale(1.1)`,
          transition: "transform 0.3s ease-out",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 24,
          transform: `translateZ(${position.y * 2}px)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        {title && (
          <h3 style={{ margin: "0 0 8px 0", fontSize: 24, fontWeight: 700 }}>
            {title}
          </h3>
        )}
        {description && (
          <p style={{ margin: "0 0 12px 0", fontSize: 14, color: "#e5e7eb" }}>
            {description}
          </p>
        )}
        {children}
      </div>
    </div>
  );
};
