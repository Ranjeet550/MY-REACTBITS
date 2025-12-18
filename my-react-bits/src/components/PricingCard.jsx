export const PricingCard = ({
  title = "Basic",
  price = "$9",
  period = "/month",
  features = ["10 Projects", "5GB Storage", "Basic Support", "Email Support"],
  buttonText = "Get Started",
  onClick,
  popular = false,
  gradient = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  hoverEffect = true,
  width = 280,
}) => {
  return (
    <div
      style={{
        width: width,
        background: "white",
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        position: "relative",
        transition: "all 0.3s ease",
        border: popular ? "2px solid #38bdf8" : "1px solid #e5e7eb",
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
      {/* Popular badge */}
      {popular && (
        <div
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            background: gradient,
            color: "white",
            padding: "4px 12px",
            borderRadius: 20,
            fontSize: 12,
            fontWeight: 600,
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          Popular
        </div>
      )}

      {/* Header with gradient */}
      <div
        style={{
          height: 100,
          background: gradient,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          position: "relative",
        }}
      >
        <h3 style={{ margin: 0, fontSize: 24, fontWeight: 600 }}>{title}</h3>
        <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginTop: 8 }}>
          <span style={{ fontSize: 32, fontWeight: 700 }}>{price}</span>
          <span style={{ fontSize: 14, opacity: 0.8 }}>{period}</span>
        </div>
      </div>

      {/* Features list */}
      <div style={{ padding: "24px 20px" }}>
        <ul style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}>
          {features.map((feature, index) => (
            <li key={index} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{
                width: 20,
                height: 20,
                background: gradient,
                borderRadius: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: 12,
              }}>
                ✓
              </div>
              <span style={{ color: "#374151", fontSize: 14 }}>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button */}
      <div style={{ padding: "0 20px 20px" }}>
        <button
          onClick={onClick}
          style={{
            width: "100%",
            padding: "12px 0",
            background: gradient,
            color: "white",
            border: "none",
            borderRadius: 8,
            fontSize: 16,
            fontWeight: 600,
            cursor: "pointer",
            transition: "all 0.2s ease",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-1px)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)";
          }}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};