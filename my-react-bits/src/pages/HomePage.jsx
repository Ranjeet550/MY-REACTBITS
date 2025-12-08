import { Typography, Row, Col, Card, Space, Divider, Tag } from "antd";
import {
  RocketOutlined,
  ThunderboltOutlined,
  StarOutlined,
  AppstoreOutlined,
  BulbOutlined,
  CodeOutlined,
  ArrowRightOutlined,
  FireOutlined,
  LikeOutlined,
  CheckCircleOutlined,
  TrophyOutlined,
  CrownOutlined,
  GiftOutlined,
  HeartOutlined,
  SafetyOutlined,
  ExperimentOutlined,
  ApiOutlined,
  MobileOutlined,
  CloudOutlined,
  EyeOutlined,
  BgColorsOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

export const HomePage = ({ onNavigate }) => {
  const features = [
    {
      icon: <RocketOutlined />,
      title: "Animated Buttons",
      description: "Beautiful button components with smooth animations and hover effects",
      color: "#667eea",
      category: "animated-buttons",
    },
    {
      icon: <AppstoreOutlined />,
      title: "Interactive Cards",
      description: "Stunning card designs with tilt, glow, and hover animations",
      color: "#4ecdc4",
      category: "animated-cards",
    },
    {
      icon: <ThunderboltOutlined />,
      title: "Text Animations",
      description: "Dynamic typing effects and text animations for engaging content",
      color: "#10b981",
      category: "text-animations",
    },
    {
      icon: <StarOutlined />,
      title: "Loaders & Spinners",
      description: "Elegant loading animations to keep users engaged",
      color: "#ff6b6b",
      category: "loaders",
    },
    {
      icon: <CodeOutlined />,
      title: "Form Inputs",
      description: "Modern input fields with smooth transitions and validations",
      color: "#f59e0b",
      category: "inputs",
    },
    {
      icon: <BulbOutlined />,
      title: "UI Components",
      description: "Essential UI elements including badges, avatars, and tooltips",
      color: "#8b5cf6",
      category: "ui-components",
    },
    {
      icon: <FireOutlined />,
      title: "Modern Components",
      description: "Trending UI components with glassmorphism, magnetic effects, and more",
      color: "#ec4899",
      category: "modern-components",
    },
  ];

  return (
    <div
      style={{
        minHeight: "calc(100vh - 64px)",
        background: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
        padding: "0",
        margin: "-24px -32px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Animated Background Circles */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
          animation: "float 20s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(240, 147, 251, 0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
          animation: "float 25s ease-in-out infinite reverse",
        }}
      />

      {/* Hero Section */}
      <div
        style={{
          textAlign: "center",
          padding: "100px 40px 80px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            fontSize: "80px",
            fontWeight: "800",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: "24px",
            fontFamily: "'Inter', 'Segoe UI', sans-serif",
            letterSpacing: "-2px",
            lineHeight: "1.1",
            animation: "fadeInUp 0.8s ease-out",
          }}
        >
          MY-ReactBits
        </div>

        <Paragraph
          style={{
            fontSize: "24px",
            color: "rgba(255, 255, 255, 0.8)",
            maxWidth: "700px",
            margin: "0 auto 40px",
            fontFamily: "'Inter', 'Segoe UI', sans-serif",
            fontWeight: "400",
            lineHeight: "1.6",
            animation: "fadeInUp 0.8s ease-out 0.2s backwards",
          }}
        >
          Build stunning, interactive user interfaces with our collection of
          beautiful React components. Modern, accessible, and ready to use.
        </Paragraph>

        <Space size="large" style={{ animation: "fadeInUp 0.8s ease-out 0.4s backwards" }}>
          <div
            onClick={() => onNavigate("button")}
            style={{
              padding: "16px 40px",
              fontSize: "18px",
              fontWeight: "600",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "#fff",
              border: "none",
              borderRadius: "12px",
              cursor: "pointer",
              boxShadow: "0 8px 24px rgba(102, 126, 234, 0.4)",
              transition: "all 0.3s ease",
              fontFamily: "'Inter', 'Segoe UI', sans-serif",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 12px 32px rgba(102, 126, 234, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(102, 126, 234, 0.4)";
            }}
          >
            Explore Components <ArrowRightOutlined />
          </div>

          <div
            onClick={() => window.open("https://github.com", "_blank")}
            style={{
              padding: "16px 40px",
              fontSize: "18px",
              fontWeight: "600",
              background: "rgba(255, 255, 255, 0.1)",
              color: "#fff",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              borderRadius: "12px",
              cursor: "pointer",
              backdropFilter: "blur(10px)",
              transition: "all 0.3s ease",
              fontFamily: "'Inter', 'Segoe UI', sans-serif",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.5)";
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            View on GitHub
          </div>
        </Space>
      </div>

      {/* Stats Section */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 40px 60px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Row gutter={[32, 32]}>
          {[
            { number: "20+", label: "Components", icon: <AppstoreOutlined /> },
            { number: "50+", label: "Animations", icon: <ThunderboltOutlined /> },
            { number: "100%", label: "Customizable", icon: <CheckCircleOutlined /> },
            { number: "0", label: "Dependencies", icon: <FireOutlined /> },
          ].map((stat, index) => (
            <Col xs={12} sm={6} key={index}>
              <div
                style={{
                  textAlign: "center",
                  padding: "24px",
                  background: "rgba(255, 255, 255, 0.03)",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`,
                }}
              >
                <div style={{ fontSize: "32px", color: "#667eea", marginBottom: "8px" }}>
                  {stat.icon}
                </div>
                <div
                  style={{
                    fontSize: "36px",
                    fontWeight: "800",
                    color: "#fff",
                    fontFamily: "'Inter', 'Segoe UI', sans-serif",
                    marginBottom: "4px",
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: "rgba(255, 255, 255, 0.5)",
                    fontFamily: "'Inter', 'Segoe UI', sans-serif",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      {/* Features Grid */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 40px 80px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          <Tag
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              border: "none",
              color: "#fff",
              padding: "6px 16px",
              fontSize: "13px",
              fontWeight: "600",
              borderRadius: "20px",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Component Library
          </Tag>
        </div>
        <Title
          level={2}
          style={{
            textAlign: "center",
            color: "#fff",
            marginBottom: "50px",
            fontSize: "42px",
            fontWeight: "700",
            fontFamily: "'Inter', 'Segoe UI', sans-serif",
            letterSpacing: "-1px",
          }}
        >
          Featured Components
        </Title>

        <Row gutter={[24, 24]}>
          {features.map((feature, index) => (
            <Col xs={24} sm={12} lg={8} key={index}>
              <div
                onClick={() => onNavigate(feature.category)}
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(20px)",
                  borderRadius: "16px",
                  padding: "32px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  cursor: "pointer",
                  transition: "all 0.4s ease",
                  height: "100%",
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.borderColor = feature.color;
                  e.currentTarget.style.boxShadow = `0 20px 40px ${feature.color}30`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    fontSize: "40px",
                    color: feature.color,
                    marginBottom: "20px",
                  }}
                >
                  {feature.icon}
                </div>
                <Title
                  level={4}
                  style={{
                    color: "#fff",
                    marginBottom: "12px",
                    fontSize: "22px",
                    fontWeight: "600",
                    fontFamily: "'Inter', 'Segoe UI', sans-serif",
                  }}
                >
                  {feature.title}
                </Title>
                <Paragraph
                  style={{
                    color: "rgba(255, 255, 255, 0.6)",
                    marginBottom: 0,
                    fontSize: "15px",
                    lineHeight: "1.6",
                    fontFamily: "'Inter', 'Segoe UI', sans-serif",
                  }}
                >
                  {feature.description}
                </Paragraph>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      {/* Testimonials Section */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 40px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Title
          level={2}
          style={{
            textAlign: "center",
            color: "#fff",
            marginBottom: "20px",
            fontSize: "42px",
            fontWeight: "700",
            fontFamily: "'Inter', 'Segoe UI', sans-serif",
            letterSpacing: "-1px",
          }}
        >
          Loved by Developers
        </Title>
        <Paragraph
          style={{
            textAlign: "center",
            color: "rgba(255, 255, 255, 0.6)",
            fontSize: "18px",
            maxWidth: "600px",
            margin: "0 auto 50px",
            fontFamily: "'Inter', 'Segoe UI', sans-serif",
          }}
        >
          See what developers are saying about React Bits
        </Paragraph>

        <Row gutter={[24, 24]}>
          {[
            {
              name: "Sarah Chen",
              role: "Frontend Developer",
              content: "React Bits has transformed how I build interfaces. The components are beautiful and incredibly easy to customize!",
              rating: 5,
            },
            {
              name: "Michael Rodriguez",
              role: "UI/UX Designer",
              content: "The attention to detail in these animations is outstanding. It's exactly what I needed for my projects.",
              rating: 5,
            },
            {
              name: "Emily Thompson",
              role: "Full Stack Developer",
              content: "Finally, a component library that's both powerful and simple to use. My productivity has skyrocketed!",
              rating: 5,
            },
          ].map((testimonial, index) => (
            <Col xs={24} md={8} key={index}>
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(20px)",
                  borderRadius: "16px",
                  padding: "32px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1 + 0.2}s backwards`,
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.borderColor = "rgba(102, 126, 234, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                }}
              >
                <div style={{ marginBottom: "16px" }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarOutlined
                      key={i}
                      style={{
                        color: "#f59e0b",
                        fontSize: "16px",
                        marginRight: "4px",
                      }}
                    />
                  ))}
                </div>
                <Paragraph
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: "16px",
                    lineHeight: "1.7",
                    marginBottom: "20px",
                    fontFamily: "'Inter', 'Segoe UI', sans-serif",
                    fontStyle: "italic",
                    flex: 1,
                  }}
                >
                  "{testimonial.content}"
                </Paragraph>
                <div>
                  <div
                    style={{
                      color: "#fff",
                      fontSize: "16px",
                      fontWeight: "600",
                      marginBottom: "4px",
                      fontFamily: "'Inter', 'Segoe UI', sans-serif",
                    }}
                  >
                    {testimonial.name}
                  </div>
                  <div
                    style={{
                      color: "rgba(255, 255, 255, 0.5)",
                      fontSize: "14px",
                      fontFamily: "'Inter', 'Segoe UI', sans-serif",
                    }}
                  >
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      {/* Technology Stack Section */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 40px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Title
          level={2}
          style={{
            textAlign: "center",
            color: "#fff",
            marginBottom: "20px",
            fontSize: "42px",
            fontWeight: "700",
            fontFamily: "'Inter', 'Segoe UI', sans-serif",
            letterSpacing: "-1px",
          }}
        >
          Built with Modern Technologies
        </Title>
        <Paragraph
          style={{
            textAlign: "center",
            color: "rgba(255, 255, 255, 0.6)",
            fontSize: "18px",
            maxWidth: "600px",
            margin: "0 auto 50px",
            fontFamily: "'Inter', 'Segoe UI', sans-serif",
          }}
        >
          Leveraging the power of cutting-edge web technologies
        </Paragraph>

        <Row gutter={[32, 32]} justify="center">
          {[
            { name: "React 18", description: "Latest React features", icon: "⚛️" },
            { name: "Ant Design", description: "Enterprise UI framework", icon: "🎨" },
            { name: "CSS3", description: "Modern animations", icon: "💅" },
            { name: "JavaScript", description: "ES6+ syntax", icon: "⚡" },
            { name: "Vite", description: "Lightning fast builds", icon: "⚙️" },
            { name: "Responsive", description: "Mobile-first design", icon: "📱" },
          ].map((tech, index) => (
            <Col xs={12} sm={8} md={4} key={index}>
              <div
                style={{
                  textAlign: "center",
                  padding: "24px 16px",
                  background: "rgba(255, 255, 255, 0.03)",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  transition: "all 0.3s ease",
                  animation: `fadeInUp 0.6s ease-out ${index * 0.08}s backwards`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)";
                  e.currentTarget.style.borderColor = "#667eea";
                  e.currentTarget.style.transform = "translateY(-5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{ fontSize: "40px", marginBottom: "12px" }}>
                  {tech.icon}
                </div>
                <div
                  style={{
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: "600",
                    marginBottom: "4px",
                    fontFamily: "'Inter', 'Segoe UI', sans-serif",
                  }}
                >
                  {tech.name}
                </div>
                <div
                  style={{
                    color: "rgba(255, 255, 255, 0.5)",
                    fontSize: "13px",
                    fontFamily: "'Inter', 'Segoe UI', sans-serif",
                  }}
                >
                  {tech.description}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      {/* Features Highlight Section */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 40px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Title
          level={2}
          style={{
            textAlign: "center",
            color: "#fff",
            marginBottom: "50px",
            fontSize: "42px",
            fontWeight: "700",
            fontFamily: "'Inter', 'Segoe UI', sans-serif",
            letterSpacing: "-1px",
          }}
        >
          Everything You Need
        </Title>

        <Row gutter={[48, 48]}>
          {[
            {
              icon: <MobileOutlined />,
              title: "Mobile First",
              description: "All components are designed with mobile devices in mind, ensuring perfect responsiveness across all screen sizes.",
              color: "#4ecdc4",
            },
            {
              icon: <BgColorsOutlined />,
              title: "Customizable Themes",
              description: "Easily adapt components to match your brand with flexible theming options and CSS variables.",
              color: "#f093fb",
            },
            {
              icon: <ApiOutlined />,
              title: "Simple API",
              description: "Intuitive props and clean interfaces make integration a breeze, even for complex components.",
              color: "#667eea",
            },
            {
              icon: <EyeOutlined />,
              title: "Accessibility First",
              description: "Built following WCAG guidelines to ensure your applications are usable by everyone.",
              color: "#10b981",
            },
            {
              icon: <CloudOutlined />,
              title: "Zero Dependencies",
              description: "Keep your bundle size minimal with components that don't rely on heavy external libraries.",
              color: "#f59e0b",
            },
            {
              icon: <SafetyOutlined />,
              title: "Type Safe",
              description: "Full TypeScript support available for enhanced developer experience and code reliability.",
              color: "#8b5cf6",
            },
          ].map((feature, index) => (
            <Col xs={24} md={12} key={index}>
              <div
                style={{
                  display: "flex",
                  gap: "24px",
                  padding: "32px",
                  background: "rgba(255, 255, 255, 0.03)",
                  borderRadius: "16px",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  transition: "all 0.4s ease",
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)";
                  e.currentTarget.style.borderColor = feature.color;
                  e.currentTarget.style.transform = "translateX(10px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <div
                  style={{
                    fontSize: "36px",
                    color: feature.color,
                    flexShrink: 0,
                  }}
                >
                  {feature.icon}
                </div>
                <div>
                  <Title
                    level={4}
                    style={{
                      color: "#fff",
                      marginBottom: "12px",
                      fontSize: "22px",
                      fontWeight: "600",
                      fontFamily: "'Inter', 'Segoe UI', sans-serif",
                    }}
                  >
                    {feature.title}
                  </Title>
                  <Paragraph
                    style={{
                      color: "rgba(255, 255, 255, 0.6)",
                      marginBottom: 0,
                      fontSize: "15px",
                      lineHeight: "1.7",
                      fontFamily: "'Inter', 'Segoe UI', sans-serif",
                    }}
                  >
                    {feature.description}
                  </Paragraph>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      {/* Use Cases Section */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 40px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Title
          level={2}
          style={{
            textAlign: "center",
            color: "#fff",
            marginBottom: "20px",
            fontSize: "42px",
            fontWeight: "700",
            fontFamily: "'Inter', 'Segoe UI', sans-serif",
            letterSpacing: "-1px",
          }}
        >
          Perfect For Any Project
        </Title>
        <Paragraph
          style={{
            textAlign: "center",
            color: "rgba(255, 255, 255, 0.6)",
            fontSize: "18px",
            maxWidth: "600px",
            margin: "0 auto 50px",
            fontFamily: "'Inter', 'Segoe UI', sans-serif",
          }}
        >
          From startups to enterprise applications
        </Paragraph>

        <Row gutter={[24, 24]}>
          {[
            {
              title: "SaaS Platforms",
              description: "Build beautiful dashboards and user interfaces for your SaaS products",
              icon: "🚀",
              tags: ["Dashboards", "Analytics", "Admin Panels"],
            },
            {
              title: "E-Commerce",
              description: "Create engaging shopping experiences with animated product cards",
              icon: "🛒",
              tags: ["Product Pages", "Checkout", "Cart"],
            },
            {
              title: "Landing Pages",
              description: "Make stunning first impressions with eye-catching components",
              icon: "✨",
              tags: ["Hero Sections", "Features", "CTAs"],
            },
            {
              title: "Web Apps",
              description: "Enhance user experience with smooth animations and interactions",
              icon: "💻",
              tags: ["Forms", "Modals", "Navigation"],
            },
          ].map((useCase, index) => (
            <Col xs={24} sm={12} lg={6} key={index}>
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(20px)",
                  borderRadius: "16px",
                  padding: "32px 24px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  height: "100%",
                  transition: "all 0.3s ease",
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.borderColor = "#667eea";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                }}
              >
                <div style={{ fontSize: "48px", marginBottom: "16px", textAlign: "center" }}>
                  {useCase.icon}
                </div>
                <Title
                  level={4}
                  style={{
                    color: "#fff",
                    marginBottom: "12px",
                    fontSize: "20px",
                    fontWeight: "600",
                    fontFamily: "'Inter', 'Segoe UI', sans-serif",
                    textAlign: "center",
                  }}
                >
                  {useCase.title}
                </Title>
                <Paragraph
                  style={{
                    color: "rgba(255, 255, 255, 0.6)",
                    fontSize: "14px",
                    lineHeight: "1.6",
                    marginBottom: "16px",
                    fontFamily: "'Inter', 'Segoe UI', sans-serif",
                    textAlign: "center",
                  }}
                >
                  {useCase.description}
                </Paragraph>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center" }}>
                  {useCase.tags.map((tag, i) => (
                    <Tag
                      key={i}
                      style={{
                        background: "rgba(102, 126, 234, 0.15)",
                        border: "1px solid rgba(102, 126, 234, 0.3)",
                        color: "#667eea",
                        fontSize: "11px",
                        padding: "2px 8px",
                        borderRadius: "4px",
                      }}
                    >
                      {tag}
                    </Tag>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      {/* Why Choose Section */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 40px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Title
          level={2}
          style={{
            textAlign: "center",
            color: "#fff",
            marginBottom: "20px",
            fontSize: "42px",
            fontWeight: "700",
            fontFamily: "'Inter', 'Segoe UI', sans-serif",
            letterSpacing: "-1px",
          }}
        >
          Why Choose React Bits?
        </Title>
        <Paragraph
          style={{
            textAlign: "center",
            color: "rgba(255, 255, 255, 0.6)",
            fontSize: "18px",
            maxWidth: "600px",
            margin: "0 auto 50px",
            fontFamily: "'Inter', 'Segoe UI', sans-serif",
          }}
        >
          Built with modern web standards and best practices for exceptional performance
        </Paragraph>

        <Row gutter={[24, 24]}>
          {[
            {
              icon: <TrophyOutlined />,
              title: "Production Ready",
              description: "Battle-tested components used in real-world applications",
              color: "#f59e0b",
            },
            {
              icon: <RocketOutlined />,
              title: "Lightning Fast",
              description: "Optimized for performance with minimal bundle size",
              color: "#667eea",
            },
            {
              icon: <CodeOutlined />,
              title: "Developer Friendly",
              description: "Clean API, well-documented, and easy to customize",
              color: "#10b981",
            },
            {
              icon: <CrownOutlined />,
              title: "Premium Quality",
              description: "Pixel-perfect designs with attention to every detail",
              color: "#f093fb",
            },
            {
              icon: <CheckCircleOutlined />,
              title: "Fully Responsive",
              description: "Works seamlessly across all devices and screen sizes",
              color: "#4ecdc4",
            },
            {
              icon: <GiftOutlined />,
              title: "Open Source",
              description: "Free to use, modify, and share in your projects",
              color: "#ff6b6b",
            },
          ].map((item, index) => (
            <Col xs={24} sm={12} lg={8} key={index}>
              <div
                style={{
                  padding: "28px",
                  textAlign: "center",
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1 + 0.2}s backwards`,
                }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${item.color}20, ${item.color}10)`,
                    border: `2px solid ${item.color}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    fontSize: "32px",
                    color: item.color,
                    transition: "all 0.4s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "rotate(360deg) scale(1.1)";
                    e.currentTarget.style.boxShadow = `0 10px 30px ${item.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "rotate(0deg) scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {item.icon}
                </div>
                <Title
                  level={4}
                  style={{
                    color: "#fff",
                    marginBottom: "12px",
                    fontSize: "20px",
                    fontWeight: "600",
                    fontFamily: "'Inter', 'Segoe UI', sans-serif",
                  }}
                >
                  {item.title}
                </Title>
                <Paragraph
                  style={{
                    color: "rgba(255, 255, 255, 0.5)",
                    marginBottom: 0,
                    fontSize: "15px",
                    lineHeight: "1.6",
                    fontFamily: "'Inter', 'Segoe UI', sans-serif",
                  }}
                >
                  {item.description}
                </Paragraph>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      {/* Getting Started Section */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "80px 40px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Title
          level={2}
          style={{
            textAlign: "center",
            color: "#fff",
            marginBottom: "20px",
            fontSize: "42px",
            fontWeight: "700",
            fontFamily: "'Inter', 'Segoe UI', sans-serif",
            letterSpacing: "-1px",
          }}
        >
          Get Started in Minutes
        </Title>
        <Paragraph
          style={{
            textAlign: "center",
            color: "rgba(255, 255, 255, 0.6)",
            fontSize: "18px",
            maxWidth: "600px",
            margin: "0 auto 50px",
            fontFamily: "'Inter', 'Segoe UI', sans-serif",
          }}
        >
          Simple installation, zero configuration, start building immediately
        </Paragraph>

        <Row gutter={[32, 32]}>
          {[
            {
              step: "01",
              title: "Explore Components",
              description: "Browse our collection and find the perfect components for your project",
            },
            {
              step: "02",
              title: "Copy & Paste",
              description: "Simply copy the code and paste it into your React application",
            },
            {
              step: "03",
              title: "Customize",
              description: "Adjust colors, sizes, and animations to match your brand perfectly",
            },
          ].map((item, index) => (
            <Col xs={24} sm={8} key={index}>
              <div
                style={{
                  textAlign: "center",
                  animation: `fadeInUp 0.6s ease-out ${index * 0.15}s backwards`,
                }}
              >
                <div
                  style={{
                    fontSize: "48px",
                    fontWeight: "900",
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontFamily: "'Inter', 'Segoe UI', sans-serif",
                    marginBottom: "16px",
                    opacity: 0.7,
                  }}
                >
                  {item.step}
                </div>
                <Title
                  level={4}
                  style={{
                    color: "#fff",
                    marginBottom: "12px",
                    fontSize: "20px",
                    fontWeight: "600",
                    fontFamily: "'Inter', 'Segoe UI', sans-serif",
                  }}
                >
                  {item.title}
                </Title>
                <Paragraph
                  style={{
                    color: "rgba(255, 255, 255, 0.5)",
                    marginBottom: 0,
                    fontSize: "15px",
                    lineHeight: "1.6",
                    fontFamily: "'Inter', 'Segoe UI', sans-serif",
                  }}
                >
                  {item.description}
                </Paragraph>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      {/* CTA Section */}
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "80px 40px 120px",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
            backdropFilter: "blur(20px)",
            borderRadius: "24px",
            padding: "60px 40px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            animation: "fadeInUp 0.8s ease-out",
          }}
        >
          <Title
            level={2}
            style={{
              color: "#fff",
              marginBottom: "20px",
              fontSize: "38px",
              fontWeight: "700",
              fontFamily: "'Inter', 'Segoe UI', sans-serif",
              letterSpacing: "-1px",
            }}
          >
            Ready to Build Something Amazing?
          </Title>
          <Paragraph
            style={{
              color: "rgba(255, 255, 255, 0.7)",
              fontSize: "18px",
              marginBottom: "40px",
              fontFamily: "'Inter', 'Segoe UI', sans-serif",
              lineHeight: "1.6",
            }}
          >
            Join developers who are creating beautiful interfaces with React Bits.
            Start exploring our components and bring your ideas to life.
          </Paragraph>
          <Space size="large">
            <div
              onClick={() => onNavigate("button")}
              style={{
                padding: "18px 48px",
                fontSize: "18px",
                fontWeight: "600",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "#fff",
                border: "none",
                borderRadius: "12px",
                cursor: "pointer",
                boxShadow: "0 10px 30px rgba(102, 126, 234, 0.4)",
                transition: "all 0.3s ease",
                fontFamily: "'Inter', 'Segoe UI', sans-serif",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 15px 40px rgba(102, 126, 234, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(102, 126, 234, 0.4)";
              }}
            >
              Start Exploring <ArrowRightOutlined />
            </div>
          </Space>
        </div>
      </div>

      {/* CSS Keyframes */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
      `}</style>
    </div>
  );
};