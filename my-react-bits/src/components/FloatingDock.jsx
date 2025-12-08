import { useState } from "react";

export const FloatingDock = ({ items = [] }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      style={{
        display: "flex",
        gap: 12,
        padding: "12px 20px",
        background: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(20px)",
        borderRadius: 20,
        border: "1px solid rgba(255, 255, 255, 0.2)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
        alignItems: "flex-end",
      }}
    >
      {items.map((item, index) => {
        const distance = hoveredIndex !== null ? Math.abs(index - hoveredIndex) : 3;
        const scale = hoveredIndex !== null ? Math.max(1, 1.5 - distance * 0.2) : 1;

        return (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={item.onClick}
            style={{
              width: 48,
              height: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 12,
              background: "rgba(255, 255, 255, 0.1)",
              cursor: "pointer",
              transform: `scale(${scale})`,
              transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
              fontSize: 24,
            }}
            title={item.label}
          >
            {item.icon}
          </div>
        );
      })}
    </div>
  );
};
