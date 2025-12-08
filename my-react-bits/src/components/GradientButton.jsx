export const GradientButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      style={{
        position: "relative",
        padding: "10px 24px",
        fontSize: 14,
        fontWeight: 600,
        color: "#fff",
        background: "linear-gradient(45deg, #ff6b6b, #ee5a6f, #c44569, #4ecdc4, #44a08d)",
        backgroundSize: "400% 400%",
        border: "none",
        borderRadius: 8,
        cursor: "pointer",
        animation: "gradient 3s ease infinite",
        ...rest.style,
      }}
    >
      {children}
      <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </button>
  );
};
