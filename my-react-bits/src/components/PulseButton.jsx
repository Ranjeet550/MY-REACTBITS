export const PulseButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      style={{
        position: "relative",
        padding: "10px 24px",
        fontSize: 14,
        fontWeight: 600,
        color: "#fff",
        background: "#f43f5e",
        border: "none",
        borderRadius: 8,
        cursor: "pointer",
        animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        ...rest.style,
      }}
    >
      {children}
      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
          }
        `}
      </style>
    </button>
  );
};
