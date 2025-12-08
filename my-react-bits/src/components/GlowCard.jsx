export const GlowCard = ({ title, description, children }) => {
  return (
    <div
      style={{
        position: "relative",
        borderRadius: 10,
        border: "1px solid #1f2933",
        background: "#020617",
        padding: 16,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: -1,
          borderRadius: 10,
          background: "linear-gradient(45deg, #f06, #3cf, #f06)",
          backgroundSize: "200% 200%",
          animation: "glow 3s ease infinite",
          opacity: 0.5,
          filter: "blur(10px)",
          zIndex: -1,
        }}
      />
      <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>
        {title}
      </div>
      {description && (
        <div
          style={{
            fontSize: 13,
            color: "#9ca3af",
            marginBottom: children ? 12 : 0,
          }}
        >
          {description}
        </div>
      )}
      {children}
      <style>
        {`
          @keyframes glow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </div>
  );
};
