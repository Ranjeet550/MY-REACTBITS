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
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: 'translateZ(0)', // Enable hardware acceleration
        }}
        onClick={() => onPageChange("home")}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05) translateZ(0)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1) translateZ(0)';
        }}
      >
        <div
          className="gradient-text"
          style={{
            fontSize: 22,
            fontWeight: 800,
            letterSpacing: '-0.8px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            position: 'relative',
            paddingBottom: 2,
          }}
        >
          MY-ReactBits
          <span 
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: 2,
              background: 'linear-gradient(90deg, #667eea, #764ba2)',
              borderRadius: 2,
              transform: 'scaleX(0)',
              transformOrigin: 'left',
              transition: 'transform 0.3s ease-in-out',
            }}
          />
        </div>
      </div>

      {/* Navigation */}
      <Space size="large">
        <Button
          type={currentPage === "home" ? "primary" : "text"}
          icon={<HomeOutlined />}
          onClick={() => onPageChange("home")}
          style={{
            height: 44,
            padding: '0 24px',
            borderRadius: 12,
            fontWeight: 600,
            background: currentPage === "home" 
              ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
              : "transparent",
            color: currentPage === "home" ? "#fff" : "rgba(255, 255, 255, 0.85)",
            border: currentPage === "home" ? "none" : "1px solid rgba(255, 255, 255, 0.2)",
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: currentPage === "home" 
              ? '0 4px 16px rgba(102, 126, 234, 0.4)' 
              : 'none',
          }}
          onMouseEnter={(e) => {
            if (currentPage !== "home") {
              e.currentTarget.style.background = "rgba(102, 126, 234, 0.15)";
              e.currentTarget.style.color = "#667eea";
              e.currentTarget.style.borderColor = "rgba(102, 126, 234, 0.5)";
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.2)';
            } else {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.5)';
            }
          }}
          onMouseLeave={(e) => {
            if (currentPage !== "home") {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "rgba(255, 255, 255, 0.85)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
              e.currentTarget.style.boxShadow = 'none';
            } else {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(102, 126, 234, 0.4)';
            }
          }}
        >
          Home
        </Button>

        <Badge 
          count={"20+"} 
          style={{ 
            backgroundColor: '#f093fb',
            boxShadow: '0 0 0 2px rgba(0, 0, 0, 0.1)',
            fontWeight: 600,
            fontSize: 12,
          }}
        >
          <Button
            type={currentPage !== "home" ? "primary" : "text"}
            icon={<AppstoreOutlined />}
            onClick={() => onPageChange("button")}
            style={{
              height: 44,
              padding: '0 24px',
              borderRadius: 12,
              fontWeight: 600,
              background: "transparent",
              
              color: currentPage !== "home" ? "#fff" : "rgba(255, 255, 255, 0.85)",
              border: currentPage !== "home" ? "none" : "1px solid rgba(255, 255, 255, 0.2)",
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: currentPage !== "home" 
                ? '0 4px 16px rgba(102, 126, 234, 0.4)' 
                : 'none',
            }}
            onMouseEnter={(e) => {
              if (currentPage === "home") {
                e.currentTarget.style.background = "rgba(102, 126, 234, 0.15)";
                e.currentTarget.style.color = "#667eea";
                e.currentTarget.style.borderColor = "rgba(102, 126, 234, 0.5)";
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.2)';
              } else {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.5)';
              }
            }}
            onMouseLeave={(e) => {
              if (currentPage === "home") {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "rgba(255, 255, 255, 0.85)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
                e.currentTarget.style.boxShadow = 'none';
              } else {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(102, 126, 234, 0.4)';
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
            height: 44,
            padding: '0 24px',
            borderRadius: 12,
            fontWeight: 600,
            background: "transparent",
            color: "rgba(255, 255, 255, 0.85)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            position: 'relative',
            overflow: 'hidden',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "linear-gradient(135deg, #24292e 0%, #04070c 100%)";
            e.currentTarget.style.color = "#fff";
            e.currentTarget.style.borderColor = "#24292e";
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(36, 41, 46, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "rgba(255, 255, 255, 0.85)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          GitHub
        </Button>

        <Button
          type="primary"
          icon={<StarFilled />}
          style={{
            height: 44,
            padding: '0 24px',
            borderRadius: 12,
            fontWeight: 600,
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            border: "none",
            boxShadow: '0 4px 16px rgba(240, 147, 251, 0.4)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            position: 'relative',
            overflow: 'hidden',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(240, 147, 251, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(240, 147, 251, 0.4)';
          }}
        >
          Star
        </Button>
      </Space>
    </>
  );
};