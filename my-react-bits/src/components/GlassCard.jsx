export const GlassCard = ({
  children,
  width = 300,
  height = 200,
  borderRadius = 16,
  blur = 10,
  background = "rgba(255, 255, 255, 0.1)",
  borderColor = "rgba(255, 255, 255, 0.2)",
  padding = 24,
  glow = false,
  glowColor = "#38bdf8",
  hoverEffect = true,
}) => {
  return (
    <div
      style={{
        width: width,
        height: height,
        background: background,
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        borderRadius: borderRadius,
        border: `1px solid ${borderColor}`,
        padding: padding,
        boxShadow: glow
          ? `0 4px 20px 0 ${glowColor}44, 0 7px 10px -5px ${glowColor}66`
          : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        transition: "all 0.3s ease",
        position: "relative",
        overflow: "hidden",
        ...(hoverEffect && {
          transform: "translateY(0)",
          cursor: "pointer",
        }),
      }}
      onMouseEnter={(e) => {
        if (hoverEffect) {
          e.currentTarget.style.transform = "translateY(-4px)";
          e.currentTarget.style.boxShadow = glow
            ? `0 8px 30px 0 ${glowColor}55, 0 11px 15px -7px ${glowColor}77`
            : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
        }
      }}
      onMouseLeave={(e) => {
        if (hoverEffect) {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = glow
            ? `0 4px 20px 0 ${glowColor}44, 0 7px 10px -5px ${glowColor}66`
            : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
        }
      }}
    >
      {/* Glassmorphism overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Content container */}
      <div style={{
        position: "relative",
        zIndex: 1,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}>
        {children}
      </div>
    </div>
  );
};
