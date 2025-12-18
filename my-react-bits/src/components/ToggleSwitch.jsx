import { useState, useEffect } from "react";

export const ToggleSwitch = ({
  checked = false,
  onChange,
  size = "medium",
  disabled = false,
  onColor = "#38bdf8",
  offColor = "#4b5563",
  onText = "ON",
  offText = "OFF",
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleToggle = () => {
    if (disabled) return;

    const newValue = !isChecked;
    setIsChecked(newValue);

    if (onChange) {
      onChange(newValue);
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case "small":
        return {
          width: 40,
          height: 20,
          thumbSize: 16,
          fontSize: 10,
          padding: 2,
        };
      case "large":
        return {
          width: 60,
          height: 30,
          thumbSize: 24,
          fontSize: 12,
          padding: 4,
        };
      case "medium":
      default:
        return {
          width: 50,
          height: 24,
          thumbSize: 20,
          fontSize: 11,
          padding: 3,
        };
    }
  };

  const { width, height, thumbSize, fontSize, padding } = getSizeStyles();

  return (
    <div
      onClick={handleToggle}
      style={{
        position: "relative",
        display: "inline-block",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
        userSelect: "none",
      }}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
        style={{ display: "none" }}
        disabled={disabled}
      />

      <div
        style={{
          width: width,
          height: height,
          backgroundColor: isChecked ? onColor : offColor,
          borderRadius: height / 2,
          position: "relative",
          transition: "background-color 0.3s ease",
          boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: (height - thumbSize) / 2,
            left: isChecked ? width - thumbSize - padding : padding,
            width: thumbSize,
            height: thumbSize,
            backgroundColor: "white",
            borderRadius: "50%",
            transition: "left 0.3s ease",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
          }}
        />
      </div>

      {onText || offText ? (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: isChecked ? onColor : offColor,
            fontSize: fontSize,
            fontWeight: 600,
            textShadow: "0 1px 1px rgba(255, 255, 255, 0.8)",
            transition: "color 0.3s ease",
          }}
        >
          {isChecked ? onText : offText}
        </div>
      ) : null}
    </div>
  );
};