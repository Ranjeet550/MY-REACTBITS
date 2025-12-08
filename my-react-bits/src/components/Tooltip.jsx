import { useState } from "react";

export const Tooltip = ({ children, content, position = "top" }) => {
  const [isVisible, setIsVisible] = useState(false);

  const positions = {
    top: { bottom: "100%", left: "50%", transform: "translateX(-50%)", marginBottom: 8 },
    bottom: { top: "100%", left: "50%", transform: "translateX(-50%)", marginTop: 8 },
    left: { right: "100%", top: "50%", transform: "translateY(-50%)", marginRight: 8 },
    right: { left: "100%", top: "50%", transform: "translateY(-50%)", marginLeft: 8 },
  };

  return (
    <div
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          style={{
            position: "absolute",
            ...positions[position],
            background: "#1f2933",
            color: "#e5e7eb",
            padding: "6px 12px",
            borderRadius: 6,
            fontSize: 12,
            whiteSpace: "nowrap",
            zIndex: 1000,
            pointerEvents: "none",
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
};
