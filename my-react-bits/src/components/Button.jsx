export const Button = ({ variant = "primary", children, ...rest }) => {
  const baseStyle = {
    borderRadius: 6,
    padding: "8px 16px",
    fontSize: 14,
    fontWeight: 500,
    cursor: "pointer",
    border: "none",
    transition: "all 0.2s",
  };

  const variantStyles = {
    primary: {
      backgroundColor: "#38bdf8",
      color: "#0b0c10",
    },
    ghost: {
      backgroundColor: "transparent",
      color: "#38bdf8",
      border: "1px solid #38bdf8",
    },
  };

  return (
    <button
      {...rest}
      style={{
        ...baseStyle,
        ...variantStyles[variant],
        ...rest.style,
      }}
    >
      {children}
    </button>
  );
};
