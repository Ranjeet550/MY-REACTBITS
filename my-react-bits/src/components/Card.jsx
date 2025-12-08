export const Card = ({ title, description, children }) => {
  return (
    <div
      style={{
        borderRadius: 10,
        border: "1px solid #1f2933",
        background: "#020617",
        padding: 16,
      }}
    >
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
    </div>
  );
};
