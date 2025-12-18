export const TestimonialCard = ({
  quote = "This product has completely transformed our workflow. The attention to detail and user experience is unmatched.",
  author = "Sarah Johnson",
  title = "CEO, TechCorp",
  avatar = "https://i.pravatar.cc/150?img=3",
  rating = 5,
  gradient = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  hoverEffect = true,
  width = 320,
}) => {
  return (
    <div
      style={{
        width: width,
        background: "white",
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease",
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
      {/* Quote section */}
      <div style={{
        padding: 24,
        position: "relative",
      }}>
        <div style={{
          position: "absolute",
          top: 16,
          left: 16,
          width: 40,
          height: 40,
          background: gradient,
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: 20,
        }}>
          “
        </div>

        <p style={{
          margin: 0,
          fontSize: 15,
          lineHeight: 1.6,
          color: "#374151",
          paddingLeft: 48,
          minHeight: 80,
        }}>
          {quote}
        </p>
      </div>

      {/* Author section */}
      <div style={{
        padding: "16px 24px",
        background: "#f9fafb",
        display: "flex",
        alignItems: "center",
        gap: 12,
        borderTop: "1px solid #e5e7eb",
      }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            backgroundImage: `url(${avatar})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            border: "2px solid white",
          }}
        />

        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>{author}</div>
          <div style={{ fontSize: 12, color: "#6b7280" }}>{title}</div>
        </div>

        {/* Rating stars */}
        <div style={{ display: "flex", gap: 2 }}>
          {Array.from({ length: 5 }).map((_, index) => (
            <span
              key={index}
              style={{
                color: index < rating ? "#fbbf24" : "#d1d5db",
                fontSize: 14,
              }}
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};