export const GlassCard = ({ title, description, children, blur = 10 }) => {
  return (
    <div
      style={{
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: `blur(${blur}px)`,
        borderRadius: 16,
        padding: 24,
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
      }}
    >
      {title && (
        <h3 style={{ margin: "0 0 8px 0", fontSize: 20, fontWeight: 600 }}>
          {title}
        </h3>
      )}
      {description && (
        <p style={{ margin: "0 0 16px 0", fontSize: 14, color: "#9ca3af" }}>
          {description}
        </p>
      )}
      {children}
    </div>
  );
};
