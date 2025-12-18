import { useState } from "react";

export const Rating = ({
  value = 0,
  onChange,
  maxStars = 5,
  size = 24,
  color = "#38bdf8",
  hoverColor = "#667eea",
  readOnly = false,
  showValue = false,
}) => {
  const [hoverValue, setHoverValue] = useState(null);
  const [currentValue, setCurrentValue] = useState(value);

  const handleClick = (selectedValue) => {
    if (readOnly) return;

    const newValue = selectedValue === currentValue ? 0 : selectedValue;
    setCurrentValue(newValue);

    if (onChange) {
      onChange(newValue);
    }
  };

  const handleMouseEnter = (value) => {
    if (readOnly) return;
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    if (readOnly) return;
    setHoverValue(null);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div style={{ display: "flex", gap: 4 }}>
        {[...Array(maxStars)].map((_, index) => {
          const starValue = index + 1;
          const isFilled = hoverValue !== null
            ? starValue <= hoverValue
            : starValue <= currentValue;
          const isHalf = false; // Could implement half stars

          return (
            <div
              key={index}
              onClick={() => handleClick(starValue)}
              onMouseEnter={() => handleMouseEnter(starValue)}
              onMouseLeave={handleMouseLeave}
              style={{
                cursor: readOnly ? "default" : "pointer",
                color: isFilled ? (hoverValue !== null ? hoverColor : color) : "#4b5563",
                fontSize: size,
                transition: "color 0.2s",
              }}
            >
              {isFilled ? "★" : "☆"}
            </div>
          );
        })}
      </div>

      {showValue && (
        <span style={{
          color: "#fff",
          fontSize: 14,
          fontWeight: 500,
          minWidth: 30,
        }}>
          {currentValue.toFixed(1)} / {maxStars}
        </span>
      )}
    </div>
  );
};