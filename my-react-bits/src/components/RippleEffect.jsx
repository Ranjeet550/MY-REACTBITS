import { useState, useEffect, useRef } from "react";

export const RippleEffect = ({
  children,
  color = "rgba(56, 189, 248, 0.3)",
  duration = 600,
  onClick,
  disabled = false,
  style = {},
}) => {
  const [ripples, setRipples] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    if (ripples.length > 0) {
      const timer = setTimeout(() => {
        setRipples((prev) => prev.slice(1));
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [ripples, duration]);

  const handleClick = (e) => {
    if (disabled) return;

    if (containerRef.current) {
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const size = Math.max(rect.width, rect.height);

      setRipples((prev) => [
        ...prev,
        {
          id: Date.now(),
          x,
          y,
          size,
        },
      ]);
    }

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      style={{
        position: "relative",
        overflow: "hidden",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
        ...style,
      }}
    >
      {/* Ripple effects */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          style={{
            position: "absolute",
            borderRadius: "50%",
            backgroundColor: color,
            transform: `translate(-50%, -50%) scale(0)`,
            animation: `ripple ${duration}ms ease-out`,
            width: ripple.size,
            height: ripple.size,
            left: ripple.x,
            top: ripple.y,
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Children content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {children}
      </div>

      {/* Ripple animation */}
      <style>
        {`
          @keyframes ripple {
            to {
              transform: translate(-50%, -50%) scale(4);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};