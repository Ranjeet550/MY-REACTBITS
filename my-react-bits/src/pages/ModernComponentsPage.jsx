import { useState } from "react";
import { MagneticButton } from "../components/MagneticButton";
import { BentoGrid, BentoCard } from "../components/BentoGrid";
import { FloatingDock } from "../components/FloatingDock";
import { GlassCard } from "../components/GlassCard";
import { InfiniteSlider } from "../components/InfiniteSlider";
import { ParallaxCard } from "../components/ParallaxCard";
import { CountUpAnimation } from "../components/CountUpAnimation";
import { GradientText } from "../components/GradientText";
import { CodeBlock } from "../components/CodeBlock";
import { useToast } from "../components/Toast";
import { Typography, Space, Card, Row, Col, Divider, Button as AntButton } from "antd";
import {
  RocketOutlined,
  StarOutlined,
  ThunderboltOutlined,
  HeartOutlined,
  HomeOutlined,
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

export const ModernComponentsPage = () => {
  const { showToast, ToastContainer } = useToast();
  const [toastType, setToastType] = useState("success");

  const dockItems = [
    { icon: "🏠", label: "Home", onClick: () => console.log("Home") },
    { icon: "📱", label: "Apps", onClick: () => console.log("Apps") },
    { icon: "⚙️", label: "Settings", onClick: () => console.log("Settings") },
    { icon: "👤", label: "Profile", onClick: () => console.log("Profile") },
    { icon: "📧", label: "Mail", onClick: () => console.log("Mail") },
  ];

  const sliderItems = [
    "🚀 Fast Performance",
    "🎨 Beautiful Design",
    "⚡ Lightning Speed",
    "💎 Premium Quality",
    "🔥 Hot Features",
    "✨ Smooth Animations",
  ];

  const magneticButtonCode = `import { MagneticButton } from "./components/MagneticButton";

<MagneticButton strength={0.5}>
  Hover to See Magic ✨
</MagneticButton>`;

  const bentoGridCode = `import { BentoGrid, BentoCard } from "./components/BentoGrid";

<BentoGrid gap={16}>
  <BentoCard span={2} icon={🚀} title="Fast" description="Lightning-fast performance" />
  <BentoCard icon={⭐} title="Quality" description="High-quality components" />
  <BentoCard icon={⚡} title="Powerful" description="Everything you need" />
</BentoGrid>`;

  const floatingDockCode = `import { FloatingDock } from "./components/FloatingDock";

const items = [
  { icon: "🏠", label: "Home", onClick: () => {} },
  { icon: "📱", label: "Apps", onClick: () => {} },
  { icon: "⚙️", label: "Settings", onClick: () => {} },
];

<FloatingDock items={items} />`;

  const glassCardCode = `import { GlassCard } from "./components/GlassCard";

<GlassCard title="Glass Effect" description="Beautiful frosted glass" blur={10}>
  Content here
</GlassCard>`;

  const infiniteSliderCode = `import { InfiniteSlider } from "./components/InfiniteSlider";

const items = ["🚀 Fast", "🎨 Beautiful", "⚡ Speed"];

<InfiniteSlider items={items} speed={20} direction="left" />`;

  const parallaxCardCode = `import { ParallaxCard } from "./components/ParallaxCard";

<ParallaxCard title="Explore" description="Mouse parallax effect">
  <Button>Discover More</Button>
</ParallaxCard>`;

  const countUpCode = `import { CountUpAnimation } from "./components/CountUpAnimation";

<CountUpAnimation end={1000} duration={2000} suffix="+" />
<CountUpAnimation end={99.9} decimals={1} suffix="%" />`;

  const gradientTextCode = `import { GradientText } from "./components/GradientText";

<GradientText>Static Gradient</GradientText>
<GradientText animated>Animated Gradient ✨</GradientText>`;

  const codeBlockCode = `import { CodeBlock } from "./components/CodeBlock";

const code = "const hello = 'world';";

<CodeBlock code={code} language="javascript" showLineNumbers />`;

  const toastCode = `import { useToast } from "./components/Toast";

const { showToast, ToastContainer } = useToast();

showToast("Success!", "success");
showToast("Error occurred", "error");

<ToastContainer />`;

  return (
    <Space direction="vertical" size="large" style={{ width: "100%" }}>
      <ToastContainer />

      <div style={{ 
        background: "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
        padding: "32px",
        borderRadius: 16,
        marginBottom: 24,
        border: "1px solid rgba(102, 126, 234, 0.2)"
      }}>
        <Title level={1} style={{ margin: 0, marginBottom: 8 }}>
          <GradientText animated style={{ fontSize: 48, fontWeight: 800 }}>🔥 Modern Components</GradientText>
        </Title>
        <Paragraph style={{ fontSize: 16, margin: 0 }} type="secondary">
          Cutting-edge UI components with the latest design trends - Magnetic interactions, Glassmorphism, Parallax effects & more!
        </Paragraph>
      </div>

      {/* Magnetic Button */}
      <Card 
        title={<span style={{ fontSize: 18, fontWeight: 600 }}>🧲 Magnetic Button</span>} 
        size="large"
        style={{ 
          borderRadius: 12,
          border: "1px solid rgba(102, 126, 234, 0.2)",
          overflow: "hidden"
        }}
      >
        <Space direction="vertical" size="middle" style={{ width: "100%" }}>
          <Text type="secondary" style={{ fontSize: 14 }}>Button that follows your cursor movement with magnetic effect - Perfect for CTAs!</Text>
          <Divider style={{ margin: "12px 0" }} />
          <div style={{ 
            padding: "40px 0", 
            textAlign: "center",
            background: "linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)",
            borderRadius: 12
          }}>
            <MagneticButton strength={0.5}>
              Hover to See Magic ✨
            </MagneticButton>
          </div>
          <Divider style={{ margin: "12px 0" }}>Code Example</Divider>
          <CodeBlock code={magneticButtonCode} language="jsx" showLineNumbers />
        </Space>
      </Card>

      {/* Bento Grid */}
      <Card 
        title={<span style={{ fontSize: 18, fontWeight: 600 }}>📦 Bento Grid Layout</span>} 
        size="large"
        style={{ borderRadius: 12, border: "1px solid rgba(102, 126, 234, 0.2)" }}
      >
        <Space direction="vertical" size="middle" style={{ width: "100%" }}>
          <Text type="secondary" style={{ fontSize: 14 }}>Modern grid layout inspired by Apple's design language - Responsive & adaptive!</Text>
          <Divider style={{ margin: "12px 0" }} />
          <BentoGrid gap={16}>
            <BentoCard
              span={2}
              icon={<RocketOutlined style={{ fontSize: 40, color: "#667eea" }} />}
              title="Fast & Efficient"
              description="Lightning-fast performance with optimized rendering"
            />
            <BentoCard
              icon={<StarOutlined style={{ fontSize: 40, color: "#f59e0b" }} />}
              title="Premium Quality"
              description="High-quality components"
            />
            <BentoCard
              icon={<ThunderboltOutlined style={{ fontSize: 40, color: "#10b981" }} />}
              title="Powerful Features"
              description="Everything you need"
            />
            <BentoCard
              span={2}
              icon={<HeartOutlined style={{ fontSize: 40, color: "#ef4444" }} />}
              title="Built with Love"
              description="Crafted with attention to every detail"
            />
          </BentoGrid>
          <Divider style={{ margin: "12px 0" }}>Code Example</Divider>
          <CodeBlock code={bentoGridCode} language="jsx" showLineNumbers />
        </Space>
      </Card>

      {/* Floating Dock */}
      <Card 
        title={<span style={{ fontSize: 18, fontWeight: 600 }}>🎯 Floating Dock (macOS Style)</span>} 
        size="large"
        style={{ borderRadius: 12, border: "1px solid rgba(102, 126, 234, 0.2)" }}
      >
        <Space direction="vertical" size="middle" style={{ width: "100%" }}>
          <Text type="secondary" style={{ fontSize: 14 }}>Interactive dock with scaling animation on hover - Just like macOS!</Text>
          <Divider style={{ margin: "12px 0" }} />
          <div style={{ 
            padding: "40px 0", 
            display: "flex", 
            justifyContent: "center",
            background: "linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)",
            borderRadius: 12
          }}>
            <FloatingDock items={dockItems} />
          </div>
          <Divider style={{ margin: "12px 0" }}>Code Example</Divider>
          <CodeBlock code={floatingDockCode} language="jsx" showLineNumbers />
        </Space>
      </Card>

      {/* Glass Card */}
      <Card 
        title={<span style={{ fontSize: 18, fontWeight: 600 }}>✨ Glassmorphism Card</span>} 
        size="large"
        style={{ borderRadius: 12, border: "1px solid rgba(102, 126, 234, 0.2)" }}
      >
        <Space direction="vertical" size="middle" style={{ width: "100%" }}>
          <Text type="secondary" style={{ fontSize: 14 }}>Trendy glassmorphism design with frosted glass effect - iOS & Windows 11 style!</Text>
          <Divider style={{ margin: "12px 0" }} />
          <Row gutter={[16, 16]}>
            <Col xs={24} md={8}>
              <GlassCard title="Glass Effect" description="Beautiful frosted glass design" blur={10}>
                <Text style={{ fontSize: 12 }}>Backdrop blur with transparency</Text>
              </GlassCard>
            </Col>
            <Col xs={24} md={8}>
              <GlassCard title="Modern UI" description="Clean and elegant style" blur={15}>
                <Text style={{ fontSize: 12 }}>Perfect for overlays</Text>
              </GlassCard>
            </Col>
            <Col xs={24} md={8}>
              <GlassCard title="Customizable" description="Adjust blur levels easily" blur={20}>
                <Text style={{ fontSize: 12 }}>Flexible and adaptable</Text>
              </GlassCard>
            </Col>
          </Row>
          <Divider style={{ margin: "12px 0" }}>Code Example</Divider>
          <CodeBlock code={glassCardCode} language="jsx" showLineNumbers />
        </Space>
      </Card>

      {/* Infinite Slider */}
      <Card 
        title={<span style={{ fontSize: 18, fontWeight: 600 }}>♾️ Infinite Slider</span>} 
        size="large"
        style={{ borderRadius: 12, border: "1px solid rgba(102, 126, 234, 0.2)" }}
      >
        <Space direction="vertical" size="middle" style={{ width: "100%" }}>
          <Text type="secondary" style={{ fontSize: 14 }}>Auto-scrolling content with seamless loop animation - Great for showcasing logos & testimonials!</Text>
          <Divider style={{ margin: "12px 0" }} />
          <InfiniteSlider items={sliderItems} speed={20} direction="left" />
          <Divider style={{ margin: "12px 0" }}>Code Example</Divider>
          <CodeBlock code={infiniteSliderCode} language="jsx" showLineNumbers />
        </Space>
      </Card>

      {/* Parallax Card */}
      <Card 
        title={<span style={{ fontSize: 18, fontWeight: 600 }}>🎨 Parallax Card</span>} 
        size="large"
        style={{ borderRadius: 12, border: "1px solid rgba(102, 126, 234, 0.2)" }}
      >
        <Space direction="vertical" size="middle" style={{ width: "100%" }}>
          <Text type="secondary" style={{ fontSize: 14 }}>3D parallax effect that responds to mouse movement - Creates depth & immersion!</Text>
          <Divider style={{ margin: "12px 0" }} />
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <ParallaxCard
                title="Explore the World"
                description="Move your mouse to see the parallax effect"
              >
                <AntButton type="primary">Discover More</AntButton>
              </ParallaxCard>
            </Col>
            <Col xs={24} md={12}>
              <ParallaxCard
                title="Amazing Experience"
                description="Interactive 3D hover effect"
              >
                <AntButton type="primary">Get Started</AntButton>
              </ParallaxCard>
            </Col>
          </Row>
          <Divider style={{ margin: "12px 0" }}>Code Example</Divider>
          <CodeBlock code={parallaxCardCode} language="jsx" showLineNumbers />
        </Space>
      </Card>

      {/* Count Up Animation */}
      <Card 
        title={<span style={{ fontSize: 18, fontWeight: 600 }}>🔢 Count Up Animation</span>} 
        size="large"
        style={{ borderRadius: 12, border: "1px solid rgba(102, 126, 234, 0.2)" }}
      >
        <Space direction="vertical" size="middle" style={{ width: "100%" }}>
          <Text type="secondary" style={{ fontSize: 14 }}>Animated number counter with scroll trigger - Perfect for stats & metrics!</Text>
          <Divider style={{ margin: "12px 0" }} />
          <div style={{
            background: "linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)",
            padding: "32px 16px",
            borderRadius: 12
          }}>
            <Row gutter={[16, 16]} style={{ textAlign: "center" }}>
              <Col xs={8}>
                <div>
                  <CountUpAnimation
                    end={1000}
                    duration={2000}
                    suffix="+"
                    style={{ fontSize: 48, fontWeight: 700, color: "#667eea" }}
                  />
                  <div style={{ marginTop: 8, color: "#9ca3af", fontWeight: 500 }}>Users</div>
                </div>
              </Col>
              <Col xs={8}>
                <div>
                  <CountUpAnimation
                    end={50}
                    duration={2000}
                    suffix="K"
                    style={{ fontSize: 48, fontWeight: 700, color: "#10b981" }}
                  />
                  <div style={{ marginTop: 8, color: "#9ca3af", fontWeight: 500 }}>Downloads</div>
                </div>
              </Col>
              <Col xs={8}>
                <div>
                  <CountUpAnimation
                    end={99.9}
                    duration={2000}
                    suffix="%"
                    decimals={1}
                    style={{ fontSize: 48, fontWeight: 700, color: "#f59e0b" }}
                  />
                  <div style={{ marginTop: 8, color: "#9ca3af", fontWeight: 500 }}>Satisfaction</div>
                </div>
              </Col>
            </Row>
          </div>
          <Divider style={{ margin: "12px 0" }}>Code Example</Divider>
          <CodeBlock code={countUpCode} language="jsx" showLineNumbers />
        </Space>
      </Card>

      {/* Gradient Text */}
      <Card 
        title={<span style={{ fontSize: 18, fontWeight: 600 }}>🌈 Gradient Text</span>} 
        size="large"
        style={{ borderRadius: 12, border: "1px solid rgba(102, 126, 234, 0.2)" }}
      >
        <Space direction="vertical" size="middle" style={{ width: "100%" }}>
          <Text type="secondary" style={{ fontSize: 14 }}>Beautiful gradient text with optional animation - Eye-catching headlines!</Text>
          <Divider style={{ margin: "12px 0" }} />
          <div style={{ 
            padding: "24px",
            background: "linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)",
            borderRadius: 12,
            textAlign: "center"
          }}>
            <div style={{ fontSize: 32, fontWeight: 700, marginBottom: 16 }}>
              <GradientText>Static Gradient Text</GradientText>
            </div>
            <div style={{ fontSize: 32, fontWeight: 700 }}>
              <GradientText animated>Animated Gradient Text ✨</GradientText>
            </div>
          </div>
          <Divider style={{ margin: "12px 0" }}>Code Example</Divider>
          <CodeBlock code={gradientTextCode} language="jsx" showLineNumbers />
        </Space>
      </Card>

      {/* Code Block */}
      <Card 
        title={<span style={{ fontSize: 18, fontWeight: 600 }}>💻 Code Block</span>} 
        size="large"
        style={{ borderRadius: 12, border: "1px solid rgba(102, 126, 234, 0.2)" }}
      >
        <Space direction="vertical" size="middle" style={{ width: "100%" }}>
          <Text type="secondary" style={{ fontSize: 14 }}>GitHub-styled code display with copy functionality - Perfect for documentation!</Text>
          <Divider style={{ margin: "12px 0" }} />
          <CodeBlock code={codeBlockCode} language="jsx" showLineNumbers />
        </Space>
      </Card>

      {/* Toast Notifications */}
      <Card 
        title={<span style={{ fontSize: 18, fontWeight: 600 }}>🔔 Toast Notifications</span>} 
        size="large"
        style={{ borderRadius: 12, border: "1px solid rgba(102, 126, 234, 0.2)" }}
      >
        <Space direction="vertical" size="middle" style={{ width: "100%" }}>
          <Text type="secondary" style={{ fontSize: 14 }}>Modern notification system with multiple types - Non-intrusive user feedback!</Text>
          <Divider style={{ margin: "12px 0" }} />
          <div style={{
            padding: "24px",
            background: "linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)",
            borderRadius: 12,
            textAlign: "center"
          }}>
            <Space wrap size="middle">
              <AntButton
                type="primary"
                size="large"
                style={{ background: "#10b981", borderColor: "#10b981" }}
                onClick={() => showToast("Success! Operation completed ✓", "success")}
              >
                ✓ Show Success
              </AntButton>
              <AntButton
                danger
                size="large"
                onClick={() => showToast("Error! Something went wrong ✕", "error")}
              >
                ✕ Show Error
              </AntButton>
              <AntButton
                size="large"
                style={{ background: "#f59e0b", color: "#fff", borderColor: "#f59e0b" }}
                onClick={() => showToast("Warning! Please check this ⚠", "warning")}
              >
                ⚠ Show Warning
              </AntButton>
              <AntButton
                size="large"
                type="default"
                onClick={() => showToast("Info: This is an information message ℹ", "info")}
              >
                ℹ Show Info
              </AntButton>
            </Space>
          </div>
          <Divider style={{ margin: "12px 0" }}>Code Example</Divider>
          <CodeBlock code={toastCode} language="jsx" showLineNumbers />
        </Space>
      </Card>
    </Space>
  );
};
