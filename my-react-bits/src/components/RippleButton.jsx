import { useState } from "react";

export const RippleButton = ({ children, ...rest }) => {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const newRipple = {
      x,
      y,
      size,
      id: Date.now(),
    };

    setRipples([...ripples, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);

    if (rest.onClick) rest.onClick(e);
  };

  return (
    <button
      {...rest}
      onClick={handleClick}
      style={{
        position: "relative",
        padding: "10px 24px",
        fontSize: 14,
        fontWeight: 600,
        color: "#fff",
        background: "#8b5cf6",
        border: "none",
        borderRadius: 8,
        cursor: "pointer",
        overflow: "hidden",
        ...rest.style,
      }}
    >
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          style={{
            position: "absolute",
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.6)",
            transform: "scale(0)",
            animation: "ripple 600ms ease-out",
            pointerEvents: "none",
          }}
        />
      ))}
      <style>
        {`
          @keyframes ripple {
            to {
              transform: scale(4);
              opacity: 0;
            }
          }
        `}
      </style>
    </button>
  );
};
