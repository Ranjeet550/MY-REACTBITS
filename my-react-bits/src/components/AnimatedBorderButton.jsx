export const AnimatedBorderButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      style={{
        position: "relative",
        padding: "10px 24px",
        fontSize: 14,
        fontWeight: 600,
        color: "#38bdf8",
        background: "transparent",
        border: "2px solid transparent",
        borderRadius: 8,
        cursor: "pointer",
        backgroundClip: "padding-box",
        ...rest.style,
      }}
    >
      <span
        style={{
          position: "absolute",
          inset: -2,
          borderRadius: 8,
          padding: 2,
          background: "linear-gradient(45deg, #f06, #3cf, #f06)",
          backgroundSize: "200% 200%",
          animation: "border-animation 3s linear infinite",
          zIndex: -1,
        }}
      />
      {children}
      <style>
        {`
          @keyframes border-animation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </button>
  );
};
