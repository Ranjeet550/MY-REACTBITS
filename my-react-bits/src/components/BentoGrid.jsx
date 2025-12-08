export const BentoGrid = ({ children, gap = 16 }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: gap,
        width: "100%",
      }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ title, description, icon, span = 1, children, gradient }) => {
  const defaultGradient = "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)";
  
  return (
    <div
      style={{
        gridColumn: `span ${span}`,
        padding: 24,
        borderRadius: 16,
        background: gradient || defaultGradient,
        border: "1px solid rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        transition: "all 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {icon && (
        <div style={{ fontSize: 32, marginBottom: 16 }}>
          {icon}
        </div>
      )}
      {title && (
        <h3 style={{ margin: "0 0 8px 0", fontSize: 18, fontWeight: 600 }}>
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
