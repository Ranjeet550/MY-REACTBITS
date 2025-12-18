import { GlassCard } from "../components/GlassCard";
import { NeonButton } from "../components/NeonButton";
import { GradientAvatar } from "../components/GradientAvatar";
import { Typography, Space, Card } from "antd";
import { useState } from "react";

const { Title, Paragraph, Text } = Typography;

const glassCardExampleCode = `import { GlassCard } from "./components/GlassCard";

export function Example() {
  return (
    <GlassCard
      width={300}
      height={200}
      borderRadius={16}
      blur={10}
      glow
      glowColor="#38bdf8"
    >
      <div style={{ color: 'white', textAlign: 'center' }}>
        <h3>Glassmorphism Card</h3>
        <p>Modern UI with blur effect</p>
      </div>
    </GlassCard>
  );
}`;

const neonButtonExampleCode = `import { NeonButton } from "./components/NeonButton";

export function Example() {
  return (
    <NeonButton
      color="#38bdf8"
      size="medium"
      pulse
      rounded
    >
      Click Me
    </NeonButton>
  );
}`;

const gradientAvatarExampleCode = `import { GradientAvatar } from "./components/GradientAvatar";

export function Example() {
  return (
    <GradientAvatar
      name="John Doe"
      size={56}
      gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      status="online"
    />
  );
}`;

export const TrendingComponentsPage = () => {
  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <div>
        <Title level={2}>Trending UI Components</Title>
        <Paragraph type="secondary">
          Modern, trendy UI components featuring glassmorphism, neon effects, and gradient designs.
        </Paragraph>
      </div>

      {/* Glass Card Section */}
      <div>
        <Title level={3}>Glass Card</Title>
        <Paragraph type="secondary">
          A modern glassmorphism card with blur effects and customizable glow.
        </Paragraph>

        <Card title="Live preview">
          <Space direction="horizontal" size="large" wrap>
            <GlassCard
              width={250}
              height={180}
              borderRadius={16}
              blur={10}
              glow
              glowColor="#38bdf8"
            >
              <div style={{ color: 'white', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ margin: 0, fontSize: 18 }}>Glassmorphism</h3>
                <p style={{ margin: '8px 0 0', fontSize: 12, opacity: 0.8 }}>Modern UI Design</p>
              </div>
            </GlassCard>

            <GlassCard
              width={250}
              height={180}
              borderRadius={20}
              blur={15}
              glow
              glowColor="#f093fb"
              background="rgba(255, 255, 255, 0.08)"
            >
              <div style={{ color: 'white', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ margin: 0, fontSize: 18 }}>Premium</h3>
                <p style={{ margin: '8px 0 0', fontSize: 12, opacity: 0.8 }}>Exclusive Content</p>
              </div>
            </GlassCard>
          </Space>
        </Card>

        <Card title="Code" style={{ marginTop: 16 }}>
          <pre style={{ background: '#001529', padding: 16, borderRadius: 8, overflow: 'auto' }}>
            <code style={{ color: '#fff', fontSize: 13 }}>{glassCardExampleCode}</code>
          </pre>
        </Card>

        <Card title="Props" style={{ marginTop: 16 }}>
          <Space direction="vertical">
            <div>
              <Text code>children</Text> <Text type="secondary">- React node, card content</Text>
            </div>
            <div>
              <Text code>width</Text> <Text type="secondary">- Number, card width (default: 300)</Text>
            </div>
            <div>
              <Text code>height</Text> <Text type="secondary">- Number, card height (default: 200)</Text>
            </div>
            <div>
              <Text code>borderRadius</Text> <Text type="secondary">- Number, border radius (default: 16)</Text>
            </div>
            <div>
              <Text code>blur</Text> <Text type="secondary">- Number, blur intensity (default: 10)</Text>
            </div>
            <div>
              <Text code>glow</Text> <Text type="secondary">- Boolean, enables glow effect (default: false)</Text>
            </div>
            <div>
              <Text code>glowColor</Text> <Text type="secondary">- String, glow color (default: "#38bdf8")</Text>
            </div>
            <div>
              <Text code>hoverEffect</Text> <Text type="secondary">- Boolean, enables hover animation (default: true)</Text>
            </div>
          </Space>
        </Card>
      </div>

      {/* Neon Button Section */}
      <div style={{ marginTop: 24 }}>
        <Title level={3}>Neon Button</Title>
        <Paragraph type="secondary">
          A vibrant neon button with glow effects and pulse animation.
        </Paragraph>

        <Card title="Live preview">
          <Space direction="horizontal" size="large" wrap>
            <NeonButton
              color="#38bdf8"
              size="medium"
              pulse
            >
              Primary
            </NeonButton>

            <NeonButton
              color="#f093fb"
              size="medium"
              rounded
            >
              Rounded
            </NeonButton>

            <NeonButton
              color="#10b981"
              size="large"
              pulse
              rounded
            >
              Success
            </NeonButton>

            <NeonButton
              color="#f5576c"
              size="small"
            >
              Delete
            </NeonButton>
          </Space>
        </Card>

        <Card title="Code" style={{ marginTop: 16 }}>
          <pre style={{ background: '#001529', padding: 16, borderRadius: 8, overflow: 'auto' }}>
            <code style={{ color: '#fff', fontSize: 13 }}>{neonButtonExampleCode}</code>
          </pre>
        </Card>

        <Card title="Props" style={{ marginTop: 16 }}>
          <Space direction="vertical">
            <div>
              <Text code>children</Text> <Text type="secondary">- React node, button text</Text>
            </div>
            <div>
              <Text code>onClick</Text> <Text type="secondary">- Function, click handler</Text>
            </div>
            <div>
              <Text code>color</Text> <Text type="secondary">- String, button color (default: "#38bdf8")</Text>
            </div>
            <div>
              <Text code>size</Text> <Text type="secondary">- "small" | "medium" | "large" (default: "medium")</Text>
            </div>
            <div>
              <Text code>disabled</Text> <Text type="secondary">- Boolean, disables button (default: false)</Text>
            </div>
            <div>
              <Text code>pulse</Text> <Text type="secondary">- Boolean, enables pulse animation (default: false)</Text>
            </div>
            <div>
              <Text code>rounded</Text> <Text type="secondary">- Boolean, makes button rounded (default: false)</Text>
            </div>
          </Space>
        </Card>
      </div>

      {/* Gradient Avatar Section */}
      <div style={{ marginTop: 24 }}>
        <Title level={3}>Gradient Avatar</Title>
        <Paragraph type="secondary">
          A modern avatar component with gradient backgrounds and status indicators.
        </Paragraph>

        <Card title="Live preview">
          <Space direction="horizontal" size="large" wrap>
            <GradientAvatar
              name="John Doe"
              size={64}
              gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
              status="online"
            />

            <GradientAvatar
              name="Jane Smith"
              size={64}
              gradient="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
              shape="square"
            />

            <GradientAvatar
              name="Alex Johnson"
              size={64}
              gradient="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
              status="online"
              statusColor="#10b981"
            />

            <GradientAvatar
              name="Sarah Williams"
              size={64}
              src="https://i.pravatar.cc/150?img=3"
              status="online"
            />
          </Space>
        </Card>

        <Card title="Code" style={{ marginTop: 16 }}>
          <pre style={{ background: '#001529', padding: 16, borderRadius: 8, overflow: 'auto' }}>
            <code style={{ color: '#fff', fontSize: 13 }}>{gradientAvatarExampleCode}</code>
          </pre>
        </Card>

        <Card title="Props" style={{ marginTop: 16 }}>
          <Space direction="vertical">
            <div>
              <Text code>name</Text> <Text type="secondary">- String, user name for initials</Text>
            </div>
            <div>
              <Text code>size</Text> <Text type="secondary">- Number, avatar size (default: 48)</Text>
            </div>
            <div>
              <Text code>src</Text> <Text type="secondary">- String, image source URL</Text>
            </div>
            <div>
              <Text code>gradient</Text> <Text type="secondary">- String, gradient CSS (default: purple gradient)</Text>
            </div>
            <div>
              <Text code>shape</Text> <Text type="secondary">- "circle" | "square" (default: "circle")</Text>
            </div>
            <div>
              <Text code>status</Text> <Text type="secondary">- String, shows status indicator</Text>
            </div>
            <div>
              <Text code>statusColor</Text> <Text type="secondary">- String, status indicator color</Text>
            </div>
            <div>
              <Text code>online</Text> <Text type="secondary">- Boolean, adds online glow effect</Text>
            </div>
          </Space>
        </Card>
      </div>
    </Space>
  );
};