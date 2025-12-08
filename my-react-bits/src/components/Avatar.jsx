export const Avatar = ({ src, alt, size = 40, fallback }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        overflow: "hidden",
        background: "#1f2933",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#e5e7eb",
        fontSize: size / 2.5,
        fontWeight: 600,
      }}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        <span>{fallback || "?"}</span>
      )}
    </div>
  );
};
