import { useState } from "react";

export const TiltCard = ({ title, description, children }) => {
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`);
  };

  const handleMouseLeave = () => {
    setTransform("");
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        borderRadius: 10,
        border: "1px solid #1f2933",
        background: "#020617",
        padding: 16,
        transform: transform,
        transition: "transform 0.1s ease",
      }}
    >
      <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>
        {title}
      </div>
      {description && (
        <div
          style={{
            fontSize: 13,
            color: "#9ca3af",
            marginBottom: children ? 12 : 0,
          }}
        >
          {description}
        </div>
      )}
      {children}
    </div>
  );
};
