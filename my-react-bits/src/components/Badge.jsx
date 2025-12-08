export const Badge = ({ children, variant = "default" }) => {
  const variants = {
    default: {
      background: "#1f2933",
      color: "#e5e7eb",
    },
    primary: {
      background: "#38bdf8",
      color: "#0b0c10",
    },
    success: {
      background: "#10b981",
      color: "#fff",
    },
    warning: {
      background: "#f59e0b",
      color: "#fff",
    },
    error: {
      background: "#ef4444",
      color: "#fff",
    },
  };

  const style = variants[variant] || variants.default;

  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 10px",
        borderRadius: 999,
        fontSize: 12,
        fontWeight: 500,
        ...style,
      }}
    >
      {children}
    </span>
  );
};
