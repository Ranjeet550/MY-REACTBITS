import { useState } from "react";

export const NeonButton = ({
  children,
  onClick,
  color = "#38bdf8",
  size = "medium",
  disabled = false,
  glowIntensity = 0.8,
  pulse = false,
  rounded = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const getSizeStyles = () => {
    switch (size) {
      case "small":
        return {
          padding: "6px 16px",
          fontSize: 12,
          borderWidth: 1,
        };
      case "large":
        return {
          padding: "12px 28px",
          fontSize: 16,
          borderWidth: 2,
        };
      case "medium":
      default:
        return {
          padding: "8px 20px",
          fontSize: 14,
          borderWidth: 1.5,
        };
    }
  };

  const { padding, fontSize, borderWidth } = getSizeStyles();

  const handleClick = (e) => {
    if (disabled) return;
    if (onClick) {
      onClick(e);
    }
  };

  // Convert hex color to RGB for box-shadow
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
      : "56, 189, 248";
  };

  const rgbColor = hexToRgb(color);
  const glowColor = `rgba(${rgbColor}, ${glowIntensity})`;

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      style={{
        position: "relative",
        padding: padding,
        fontSize: fontSize,
        fontWeight: 600,
        color: "white",
        backgroundColor: "transparent",
        border: `${borderWidth}px solid ${color}`,
        borderRadius: rounded ? "50px" : "8px",
        cursor: disabled ? "not-allowed" : "pointer",
        overflow: "hidden",
        transition: "all 0.3s ease",
        boxShadow: isHovered && !disabled
          ? `0 0 15px 5px ${glowColor}, 0 0 30px 10px ${glowColor}`
          : `0 0 8px 2px ${glowColor}`,
        opacity: disabled ? 0.5 : 1,
        transform: isActive && !disabled ? "scale(0.98)" : "scale(1)",
        ...(pulse && !disabled && {
          animation: "neonPulse 2s infinite",
        }),
      }}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => !disabled && setIsHovered(false)}
      onMouseDown={() => !disabled && setIsActive(true)}
      onMouseUp={() => !disabled && setIsActive(false)}
    >
      {/* Inner glow effect */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at center, rgba(${rgbColor}, 0.2) 0%, rgba(${rgbColor}, 0) 70%)`,
          opacity: isHovered && !disabled ? 1 : 0,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
        }}
      />

      {/* Text with neon glow */}
      <span
        style={{
          position: "relative",
          zIndex: 1,
          textShadow: isHovered && !disabled
            ? `0 0 5px ${color}, 0 0 10px ${color}`
            : "none",
          transition: "text-shadow 0.3s ease",
        }}
      >
        {children}
      </span>

      {/* Pulse animation */}
      <style>
        {`
          @keyframes neonPulse {
            0% {
              box-shadow: 0 0 8px 2px ${glowColor}, 0 0 0 0 rgba(${rgbColor}, 0.3);
            }
            70% {
              box-shadow: 0 0 15px 5px ${glowColor}, 0 0 0 10px rgba(${rgbColor}, 0);
            }
            100% {
              box-shadow: 0 0 8px 2px ${glowColor}, 0 0 0 0 rgba(${rgbColor}, 0);
            }
          }
        `}
      </style>
    </button>
  );
};