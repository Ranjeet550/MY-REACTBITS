import { useState } from "react";

export const AnimatedInput = ({ label, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <input
        {...rest}
        onFocus={(e) => {
          setIsFocused(true);
          if (rest.onFocus) rest.onFocus(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          setHasValue(e.target.value !== "");
          if (rest.onBlur) rest.onBlur(e);
        }}
        style={{
          width: "100%",
          padding: "12px 16px",
          fontSize: 14,
          background: "#020617",
          border: `2px solid ${isFocused ? "#38bdf8" : "#1f2933"}`,
          borderRadius: 8,
          color: "#e5e7eb",
          outline: "none",
          transition: "border-color 0.2s",
          ...rest.style,
        }}
      />
      {label && (
        <label
          style={{
            position: "absolute",
            left: 16,
            top: isFocused || hasValue ? -10 : 12,
            fontSize: isFocused || hasValue ? 12 : 14,
            color: isFocused ? "#38bdf8" : "#9ca3af",
            background: "#020617",
            padding: "0 4px",
            transition: "all 0.2s",
            pointerEvents: "none",
          }}
        >
          {label}
        </label>
      )}
    </div>
  );
};
