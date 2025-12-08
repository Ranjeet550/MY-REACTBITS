import { Space, Button, Badge } from "antd";
import { HomeOutlined, AppstoreOutlined, GithubOutlined, StarFilled } from "@ant-design/icons";

export const Navbar = ({ currentPage, onPageChange }) => {
  return (
    <>
      {/* Logo/Brand */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          cursor: 'pointer',
          transition: 'transform 0.2s ease',
        }}
        onClick={() => onPageChange("home")}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        
        <div
          className="gradient-text"
          style={{
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: '-0.5px',
          }}
        >
          My React Bits
        </div>
      </div>

      {/* Navigation */}
      <Space size="middle">
        <Button
          type={currentPage === "home" ? "primary" : "text"}
          icon={<HomeOutlined />}
          onClick={() => onPageChange("home")}
          style={{
            height: 40,
            padding: '0 20px',
            borderRadius: 8,
            fontWeight: 600,
            background: currentPage === "home" 
              ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
              : "transparent",
            color: currentPage === "home" ? "#fff" : "rgba(255, 255, 255, 0.65)",
            border: currentPage === "home" ? "none" : "1px solid transparent",
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            if (currentPage !== "home") {
              e.currentTarget.style.background = "rgba(102, 126, 234, 0.1)";
              e.currentTarget.style.color = "#667eea";
              e.currentTarget.style.borderColor = "rgba(102, 126, 234, 0.3)";
            }
          }}
          onMouseLeave={(e) => {
            if (currentPage !== "home") {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "rgba(255, 255, 255, 0.65)";
              e.currentTarget.style.borderColor = "transparent";
            }
          }}
        >
          Home
        </Button>

        <Badge count={"20+"} style={{ backgroundColor: '#f093fb' }}>
          <Button
            type={currentPage !== "home" ? "primary" : "text"}
            icon={<AppstoreOutlined />}
            onClick={() => onPageChange("button")}
            style={{
              height: 40,
              padding: '0 20px',
              borderRadius: 8,
              fontWeight: 600,
              background: currentPage !== "home" 
                ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                : "transparent",
              color: currentPage !== "home" ? "#fff" : "rgba(255, 255, 255, 0.65)",
              border: currentPage !== "home" ? "none" : "1px solid transparent",
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              if (currentPage === "home") {
                e.currentTarget.style.background = "rgba(102, 126, 234, 0.1)";
                e.currentTarget.style.color = "#667eea";
                e.currentTarget.style.borderColor = "rgba(102, 126, 234, 0.3)";
              }
            }}
            onMouseLeave={(e) => {
              if (currentPage === "home") {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "rgba(255, 255, 255, 0.65)";
                e.currentTarget.style.borderColor = "transparent";
              }
            }}
          >
            Components
          </Button>
        </Badge>

        <Button
          icon={<GithubOutlined />}
          onClick={() => window.open("https://github.com", "_blank")}
          style={{
            height: 40,
            padding: '0 20px',
            borderRadius: 8,
            fontWeight: 600,
            background: "transparent",
            color: "rgba(255, 255, 255, 0.65)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#fff";
            e.currentTarget.style.color = "#000";
            e.currentTarget.style.borderColor = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "rgba(255, 255, 255, 0.65)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
          }}
        >
          GitHub
        </Button>

        <Button
          type="primary"
          icon={<StarFilled />}
          style={{
            height: 40,
            padding: '0 20px',
            borderRadius: 8,
            fontWeight: 600,
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            border: "none",
            boxShadow: '0 4px 12px rgba(240, 147, 251, 0.4)',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(240, 147, 251, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(240, 147, 251, 0.4)';
          }}
        >
          Star
        </Button>
      </Space>
    </>
  );
};
