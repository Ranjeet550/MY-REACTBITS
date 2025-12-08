export const ShimmerButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      style={{
        position: "relative",
        padding: "10px 24px",
        fontSize: 14,
        fontWeight: 600,
        color: "#fff",
        background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
        border: "none",
        borderRadius: 8,
        cursor: "pointer",
        overflow: "hidden",
        ...rest.style,
      }}
    >
      <span style={{ position: "relative", zIndex: 1 }}>{children}</span>
      <span
        style={{
          position: "absolute",
          top: 0,
          left: "-100%",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
          animation: "shimmer 2s infinite",
        }}
      />
      <style>
        {`
          @keyframes shimmer {
            0% { left: -100%; }
            100% { left: 100%; }
          }
        `}
      </style>
    </button>
  );
};
