import { useState } from "react";

export const HoverCard = ({ title, description, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        borderRadius: 10,
        border: "1px solid #1f2933",
        background: "#020617",
        padding: 16,
        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
        boxShadow: isHovered
          ? "0 20px 25px -5px rgba(56, 189, 248, 0.3)"
          : "none",
        transition: "all 0.3s ease",
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
