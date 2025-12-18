import { FloatingActionButton } from "../components/FloatingActionButton";
import { HoverCard } from "../components/HoverCard";
import { RippleEffect } from "../components/RippleEffect";
import { Typography, Space, Card, Button } from "antd";
import { useState } from "react";

const { Title, Paragraph, Text } = Typography;

const floatingActionButtonExampleCode = `import { FloatingActionButton } from "./components/FloatingActionButton";

export function Example() {
  return (
    <FloatingActionButton
      icon="+"
      position="bottom-right"
      color="#38bdf8"
      secondaryColor="#667eea"
      direction="up"
    >
      <button style={{ width: 40, height: 40, borderRadius: "50%", background: "#f093fb" }}>📧</button>
      <button style={{ width: 40, height: 40, borderRadius: "50%", background: "#10b981" }}>📞</button>
      <button style={{ width: 40, height: 40, borderRadius: "50%", background: "#f5576c" }}>🔕</button>
    </FloatingActionButton>
  );
}`;

const hoverCardExampleCode = `import { HoverCard } from "./components/HoverCard";

export function Example() {
  return (
    <HoverCard
      content="This is a tooltip with more information"
      position="top"
      width={200}
      background="#0b0c10"
      borderColor="#38bdf8"
    >
      <button style={{ padding: "8px 16px", background: "#38bdf8", color: "white", border: "none", borderRadius: 4 }}>
        Hover Me
      </button>
    </HoverCard>
  );
}`;

const rippleEffectExampleCode = `import { RippleEffect } from "./components/RippleEffect";

export function Example() {
  return (
    <RippleEffect
      color="rgba(56, 189, 248, 0.3)"
      duration={600}
    >
      <button style={{
        padding: "12px 24px",
        background: "#38bdf8",
        color: "white",
        border: "none",
        borderRadius: 8,
        fontSize: 16,
        fontWeight: 600,
        cursor: "pointer"
      }}>
        Click Me
      </button>
    </RippleEffect>
  );
}`;

export const AnimationComponentsPage = () => {
  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <div>
        <Title level={2}>Animation Components</Title>
        <Paragraph type="secondary">
          Interactive and animated UI components with smooth transitions and visual feedback.
        </Paragraph>
      </div>

      {/* Floating Action Button Section */}
      <div>
        <Title level={3}>Floating Action Button</Title>
        <Paragraph type="secondary">
          An animated floating action button with expandable menu and smooth transitions.
        </Paragraph>

        <Card title="Live preview">
          <div style={{ height: 300, position: "relative", border: "1px dashed #333", borderRadius: 8 }}>
            <FloatingActionButton
              icon="+"
              position="bottom-right"
              color="#38bdf8"
              secondaryColor="#667eea"
              direction="up"
              distance={100}
            >
              <button style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "#f093fb",
                color: "white",
                border: "none",
                fontSize: 16,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>📧</button>
              <button style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "#10b981",
                color: "white",
                border: "none",
                fontSize: 16,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>📞</button>
              <button style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "#f5576c",
                color: "white",
                border: "none",
                fontSize: 16,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>🔕</button>
            </FloatingActionButton>
          </div>
        </Card>

        <Card title="Code" style={{ marginTop: 16 }}>
          <pre style={{ background: '#001529', padding: 16, borderRadius: 8, overflow: 'auto' }}>
            <code style={{ color: '#fff', fontSize: 13 }}>{floatingActionButtonExampleCode}</code>
          </pre>
        </Card>

        <Card title="Props" style={{ marginTop: 16 }}>
          <Space direction="vertical">
            <div>
              <Text code>icon</Text> <Text type="secondary">- String, main button icon (default: "+")</Text>
            </div>
            <div>
              <Text code>onClick</Text> <Text type="secondary">- Function, click handler for main button</Text>
            </div>
            <div>
              <Text code>position</Text> <Text type="secondary">- "bottom-right" | "bottom-left" | "top-right" | "top-left" (default: "bottom-right")</Text>
            </div>
            <div>
              <Text code>size</Text> <Text type="secondary">- Number, button size in pixels (default: 56)</Text>
            </div>
            <div>
              <Text code>color</Text> <Text type="secondary">- String, primary color (default: "#38bdf8")</Text>
            </div>
            <div>
              <Text code>secondaryColor</Text> <Text type="secondary">- String, secondary gradient color (default: "#667eea")</Text>
            </div>
            <div>
              <Text code>direction</Text> <Text type="secondary">- "up" | "down" | "left" | "right" (default: "up")</Text>
            </div>
            <div>
              <Text code>distance</Text> <Text type="secondary">- Number, distance for action items (default: 120)</Text>
            </div>
          </Space>
        </Card>
      </div>

      {/* Hover Card Section */}
      <div style={{ marginTop: 24 }}>
        <Title level={3}>Hover Card</Title>
        <Paragraph type="secondary">
          A tooltip-style hover card with smooth fade-in animations and customizable positions.
        </Paragraph>

        <Card title="Live preview">
          <Space direction="horizontal" size="large" wrap>
            <HoverCard
              content="This is a top tooltip"
              position="top"
              width={180}
            >
              <Button type="primary">Top Tooltip</Button>
            </HoverCard>

            <HoverCard
              content="This is a right tooltip with more content"
              position="right"
              width={200}
            >
              <Button type="primary">Right Tooltip</Button>
            </HoverCard>

            <HoverCard
              content="This is a bottom tooltip"
              position="bottom"
              width={180}
            >
              <Button type="primary">Bottom Tooltip</Button>
            </HoverCard>

            <HoverCard
              content="This is a left tooltip"
              position="left"
              width={180}
            >
              <Button type="primary">Left Tooltip</Button>
            </HoverCard>
          </Space>
        </Card>

        <Card title="Code" style={{ marginTop: 16 }}>
          <pre style={{ background: '#001529', padding: 16, borderRadius: 8, overflow: 'auto' }}>
            <code style={{ color: '#fff', fontSize: 13 }}>{hoverCardExampleCode}</code>
          </pre>
        </Card>

        <Card title="Props" style={{ marginTop: 16 }}>
          <Space direction="vertical">
            <div>
              <Text code>children</Text> <Text type="secondary">- React node, trigger element</Text>
            </div>
            <div>
              <Text code>content</Text> <Text type="secondary">- String or Function, tooltip content</Text>
            </div>
            <div>
              <Text code>position</Text> <Text type="secondary">- "top" | "bottom" | "left" | "right" (default: "top")</Text>
            </div>
            <div>
              <Text code>delay</Text> <Text type="secondary">- Number, delay in ms (default: 300)</Text>
            </div>
            <div>
              <Text code>width</Text> <Text type="secondary">- Number, card width (default: 200)</Text>
            </div>
            <div>
              <Text code>background</Text> <Text type="secondary">- String, background color</Text>
            </div>
            <div>
              <Text code>borderColor</Text> <Text type="secondary">- String, border color</Text>
            </div>
          </Space>
        </Card>
      </div>

      {/* Ripple Effect Section */}
      <div style={{ marginTop: 24 }}>
        <Title level={3}>Ripple Effect</Title>
        <Paragraph type="secondary">
          A material design ripple effect that provides visual feedback on click interactions.
        </Paragraph>

        <Card title="Live preview">
          <Space direction="horizontal" size="large" wrap>
            <RippleEffect color="rgba(56, 189, 248, 0.3)">
              <Button type="primary" style={{ padding: "12px 24px" }}>
                Click for Ripple
              </Button>
            </RippleEffect>

            <RippleEffect color="rgba(240, 147, 251, 0.3)">
              <div style={{
                width: 100,
                height: 100,
                background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: 600,
                cursor: "pointer"
              }}>
                Click Me
              </div>
            </RippleEffect>

            <RippleEffect color="rgba(16, 185, 129, 0.3)" duration={800}>
              <Button type="primary" style={{ padding: "12px 24px" }}>
                Slow Ripple
              </Button>
            </RippleEffect>
          </Space>
        </Card>

        <Card title="Code" style={{ marginTop: 16 }}>
          <pre style={{ background: '#001529', padding: 16, borderRadius: 8, overflow: 'auto' }}>
            <code style={{ color: '#fff', fontSize: 13 }}>{rippleEffectExampleCode}</code>
          </pre>
        </Card>

        <Card title="Props" style={{ marginTop: 16 }}>
          <Space direction="vertical">
            <div>
              <Text code>children</Text> <Text type="secondary">- React node, element to apply ripple to</Text>
            </div>
            <div>
              <Text code>color</Text> <Text type="secondary">- String, ripple color (default: "rgba(56, 189, 248, 0.3)")</Text>
            </div>
            <div>
              <Text code>duration</Text> <Text type="secondary">- Number, animation duration in ms (default: 600)</Text>
            </div>
            <div>
              <Text code>onClick</Text> <Text type="secondary">- Function, click handler</Text>
            </div>
            <div>
              <Text code>disabled</Text> <Text type="secondary">- Boolean, disables ripple effect (default: false)</Text>
            </div>
            <div>
              <Text code>style</Text> <Text type="secondary">- Object, additional styles for container</Text>
            </div>
          </Space>
        </Card>
      </div>
    </Space>
  );
};