export const SocialMediaCard = ({
  platform = "twitter",
  username = "username",
  followers = "10K",
  posts = "100",
  avatar = "https://i.pravatar.cc/150?img=1",
  cover = "https://source.unsplash.com/random/600x200",
  verified = false,
  gradient = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  hoverEffect = true,
}) => {
  const platformData = {
    twitter: {
      color: "#1DA1F2",
      icon: "🐦",
      bg: "linear-gradient(135deg, #1DA1F2 0%, #0e71c8 100%)",
    },
    instagram: {
      color: "#E1306C",
      icon: "📸",
      bg: "linear-gradient(135deg, #405DE6 0%, #5851DB 50%, #833AB4 100%)",
    },
    facebook: {
      color: "#1877F2",
      icon: "👍",
      bg: "linear-gradient(135deg, #1877F2 0%, #0d62c4 100%)",
    },
    linkedin: {
      color: "#0A66C2",
      icon: "💼",
      bg: "linear-gradient(135deg, #0A66C2 0%, #074a8a 100%)",
    },
    youtube: {
      color: "#FF0000",
      icon: "📺",
      bg: "linear-gradient(135deg, #FF0000 0%, #cc0000 100%)",
    },
    tiktok: {
      color: "#000000",
      icon: "🎵",
      bg: "linear-gradient(135deg, #000000 0%, #333333 100%)",
    },
  };

  const { color, icon, bg } = platformData[platform] || platformData.twitter;

  return (
    <div
      style={{
        width: 300,
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
      {/* Cover image */}
      <div
        style={{
          height: 100,
          backgroundImage: `url(${cover})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        {/* Platform banner */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: bg,
          }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: 16 }}>
        {/* Avatar and info */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
          <div style={{ display: "flex", gap: 12 }}>
            <div
              style={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                backgroundImage: `url(${avatar})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: `3px solid white`,
                marginTop: -30,
                position: "relative",
              }}
            >
              {verified && (
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: 20,
                    height: 20,
                    background: "white",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px solid white",
                  }}
                >
                  <span style={{ color: color, fontSize: 12 }}>✓</span>
                </div>
              )}
            </div>

            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600, color: "#333" }}>
                  {username}
                </h3>
                {verified && (
                  <div
                    style={{
                      width: 16,
                      height: 16,
                      background: color,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span style={{ color: "white", fontSize: 10 }}>✓</span>
                  </div>
                )}
              </div>
              <p style={{ margin: 0, color: "#666", fontSize: 14 }}>@{username}</p>
            </div>
          </div>

          {/* Platform icon */}
          <div
            style={{
              width: 32,
              height: 32,
              background: bg,
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 16,
            }}
          >
            {icon}
          </div>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 16,
            paddingBottom: 12,
            borderBottom: "1px solid #eee",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 16, fontWeight: 600, color: "#333" }}>{followers}</div>
            <div style={{ fontSize: 12, color: "#666" }}>Followers</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 16, fontWeight: 600, color: "#333" }}>{posts}</div>
            <div style={{ fontSize: 12, color: "#666" }}>Posts</div>
          </div>
        </div>

        {/* Action button */}
        <button
          style={{
            width: "100%",
            padding: "8px 0",
            background: bg,
            color: "white",
            border: "none",
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-1px)";
            e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Follow
        </button>
      </div>
    </div>
  );
};