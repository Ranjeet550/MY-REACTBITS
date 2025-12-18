import { useState, useEffect } from "react";

export const Stepper = ({
  value = 0,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  size = "medium",
  disabled = false,
  showButtons = true,
  showInput = true,
}) => {
  const [currentValue, setCurrentValue] = useState(value);
  const [inputValue, setInputValue] = useState(value.toString());

  useEffect(() => {
    setCurrentValue(value);
    setInputValue(value.toString());
  }, [value]);

  const clampValue = (val) => {
    return Math.min(max, Math.max(min, val));
  };

  const handleIncrement = () => {
    if (disabled) return;

    const newValue = clampValue(currentValue + step);
    updateValue(newValue);
  };

  const handleDecrement = () => {
    if (disabled) return;

    const newValue = clampValue(currentValue - step);
    updateValue(newValue);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputBlur = () => {
    const numValue = parseFloat(inputValue);
    if (!isNaN(numValue)) {
      const newValue = clampValue(numValue);
      updateValue(newValue);
    } else {
      // Reset to current value if input is invalid
      setInputValue(currentValue.toString());
    }
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      handleInputBlur();
    }
  };

  const updateValue = (newValue) => {
    setCurrentValue(newValue);
    setInputValue(newValue.toString());

    if (onChange) {
      onChange(newValue);
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case "small":
        return {
          height: 30,
          padding: "0 8px",
          fontSize: 12,
          buttonSize: 24,
          iconSize: 12,
        };
      case "large":
        return {
          height: 44,
          padding: "0 16px",
          fontSize: 16,
          buttonSize: 36,
          iconSize: 16,
        };
      case "medium":
      default:
        return {
          height: 36,
          padding: "0 12px",
          fontSize: 14,
          buttonSize: 30,
          iconSize: 14,
        };
    }
  };

  const { height, padding, fontSize, buttonSize, iconSize } = getSizeStyles();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 4,
        opacity: disabled ? 0.6 : 1,
      }}
    >
      {showButtons && (
        <button
          onClick={handleDecrement}
          disabled={disabled || currentValue <= min}
          style={{
            width: buttonSize,
            height: buttonSize,
            backgroundColor: disabled || currentValue <= min ? "#1f2933" : "#38bdf8",
            color: "white",
            border: "none",
            borderRadius: 6,
            cursor: disabled || currentValue <= min ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: iconSize,
            fontWeight: 600,
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            if (!disabled && currentValue > min) {
              e.currentTarget.style.backgroundColor = "#667eea";
            }
          }}
          onMouseLeave={(e) => {
            if (!disabled && currentValue > min) {
              e.currentTarget.style.backgroundColor = "#38bdf8";
            }
          }}
        >
          −
        </button>
      )}

      {showInput && (
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleInputKeyDown}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          style={{
            height: height,
            padding: padding,
            backgroundColor: "#020617",
            border: "1px solid #1f2933",
            borderRadius: 6,
            color: "#fff",
            fontSize: fontSize,
            textAlign: "center",
            outline: "none",
            width: "100%",
            minWidth: 60,
            transition: "all 0.2s",
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "#38bdf8";
            e.currentTarget.style.boxShadow = "0 0 0 2px rgba(56, 189, 248, 0.2)";
          }}
          onBlurCapture={(e) => {
            e.currentTarget.style.borderColor = "#1f2933";
            e.currentTarget.style.boxShadow = "none";
          }}
        />
      )}

      {showButtons && (
        <button
          onClick={handleIncrement}
          disabled={disabled || currentValue >= max}
          style={{
            width: buttonSize,
            height: buttonSize,
            backgroundColor: disabled || currentValue >= max ? "#1f2933" : "#38bdf8",
            color: "white",
            border: "none",
            borderRadius: 6,
            cursor: disabled || currentValue >= max ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: iconSize,
            fontWeight: 600,
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            if (!disabled && currentValue < max) {
              e.currentTarget.style.backgroundColor = "#667eea";
            }
          }}
          onMouseLeave={(e) => {
            if (!disabled && currentValue < max) {
              e.currentTarget.style.backgroundColor = "#38bdf8";
            }
          }}
        >
          +
        </button>
      )}
    </div>
  );
};