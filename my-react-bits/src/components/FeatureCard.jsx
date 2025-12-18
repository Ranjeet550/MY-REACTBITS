export const FeatureCard = ({
  icon = "🚀",
  title = "Fast Performance",
  description = "Our platform is optimized for speed and efficiency, ensuring smooth performance even with large datasets.",
  gradient = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  hoverEffect = true,
  width = 300,
  height = 200,
}) => {
  return (
    <div
      style={{
        width: width,
        height: height,
        background: "white",
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        position: "relative",
        transition: "all 0.3s ease",
        display: "flex",
        flexDirection: "column",
        ...(hoverEffect && {
          transform: "translateY(0)",
          cursor: "pointer",
        }),
      }}
      onMouseEnter={(e) => {
        if (hoverEffect) {
          e.currentTarget.style.transform = "translateY(-4px)";
          e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.15)";
        }
      }}
      onMouseLeave={(e) => {
        if (hoverEffect) {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
        }
      }}
    >
      {/* Gradient header */}
      <div
        style={{
          height: 80,
          background: gradient,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div style={{
          width: 60,
          height: 60,
          background: "rgba(255, 255, 255, 0.2)",
          borderRadius: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 28,
          backdropFilter: "blur(4px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }}>
          {icon}
        </div>
      </div>

      {/* Content */}
      <div style={{
        flex: 1,
        padding: 20,
        display: "flex",
        flexDirection: "column",
      }}>
        <h3 style={{
          margin: 0,
          fontSize: 18,
          fontWeight: 600,
          color: "#111827",
          marginBottom: 8,
        }}>
          {title}
        </h3>

        <p style={{
          margin: 0,
          fontSize: 14,
          lineHeight: 1.5,
          color: "#6b7280",
          flex: 1,
        }}>
          {description}
        </p>

        {/* Decorative element */}
        <div style={{
          position: "absolute",
          bottom: 16,
          right: 16,
          width: 40,
          height: 40,
          background: gradient,
          borderRadius: 8,
          opacity: 0.1,
          transform: "rotate(45deg)",
        }} />
      </div>
    </div>
  );
};