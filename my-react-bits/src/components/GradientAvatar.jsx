export const GradientAvatar = ({
  name = "",
  size = 48,
  src = null,
  gradient = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  borderWidth = 2,
  borderColor = "white",
  shape = "circle",
  status = null,
  statusColor = "#10b981",
  online = false,
  hoverEffect = true,
}) => {
  const getInitials = (name) => {
    if (!name) return "";

    const names = name.split(" ");
    if (names.length > 1) {
      return names[0][0] + names[names.length - 1][0];
    }
    return names[0][0];
  };

  const initials = getInitials(name);

  const containerStyle = {
    width: size,
    height: size,
    position: "relative",
    borderRadius: shape === "circle" ? "50%" : "8px",
    overflow: "hidden",
    border: `${borderWidth}px solid ${borderColor}`,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
    ...(hoverEffect && {
      transform: "scale(1)",
      cursor: "pointer",
    }),
  };

  const contentStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: src ? "transparent" : gradient,
    color: "white",
    fontWeight: 600,
    fontSize: Math.max(12, size * 0.4),
    transition: "all 0.3s ease",
  };

  return (
    <div
      style={containerStyle}
      onMouseEnter={(e) => {
        if (hoverEffect) {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)";
        }
      }}
      onMouseLeave={(e) => {
        if (hoverEffect) {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        }
      }}
    >
      {src ? (
        <img
          src={src}
          alt={name || "Avatar"}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            ...contentStyle,
          }}
        />
      ) : (
        <div style={contentStyle}>
          {initials}
        </div>
      )}

      {/* Status indicator */}
      {status && (
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: size * 0.3,
            height: size * 0.3,
            backgroundColor: statusColor,
            borderRadius: "50%",
            border: `${borderWidth}px solid ${borderColor}`,
            ...(online && {
              boxShadow: `0 0 0 2px ${statusColor}, 0 0 8px 2px ${statusColor}`,
            }),
          }}
        />
      )}
    </div>
  );
};