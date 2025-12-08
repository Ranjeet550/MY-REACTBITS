import { ShimmerButton } from "../components/ShimmerButton";
import { PulseButton } from "../components/PulseButton";
import { RippleButton } from "../components/RippleButton";
import { GradientButton } from "../components/GradientButton";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { Typography, Space, Card, Row, Col, Divider } from "antd";

const { Title, Paragraph, Text } = Typography;

const code = `import { ShimmerButton, PulseButton, RippleButton, GradientButton, AnimatedBorderButton } from "./components";

<ShimmerButton>Shimmer Effect</ShimmerButton>
<PulseButton>Pulse Animation</PulseButton>
<RippleButton>Click for Ripple</RippleButton>
<GradientButton>Gradient Flow</GradientButton>
<AnimatedBorderButton>Animated Border</AnimatedBorderButton>`;

export const AnimatedButtonsPage = () => {
  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <div>
        <Title level={2}>Animated Buttons</Title>
        <Paragraph type="secondary">
          Collection of beautifully animated button components with various effects.
        </Paragraph>
      </div>

      <Card title="Live Preview" size="large">
        <Space size="middle" wrap>
          <ShimmerButton>Shimmer Effect</ShimmerButton>
          <PulseButton>Pulse Animation</PulseButton>
          <RippleButton>Click for Ripple</RippleButton>
          <GradientButton>Gradient Flow</GradientButton>
          <AnimatedBorderButton>Animated Border</AnimatedBorderButton>
        </Space>
      </Card>

      <Card title="Code Example">
        <pre style={{ background: '#001529', padding: 16, borderRadius: 8, overflow: 'auto', margin: 0 }}>
          <code style={{ color: '#fff', fontSize: 13 }}>{code}</code>
        </pre>
      </Card>

      <Divider />

      <Title level={4}>Individual Components</Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Card title="Shimmer Button" size="small">
            <Space direction="vertical" style={{ width: '100%' }}>
              <ShimmerButton>Shimmer Effect</ShimmerButton>
              <Text type="secondary">Animated shimmer overlay effect</Text>
            </Space>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="Pulse Button" size="small">
            <Space direction="vertical" style={{ width: '100%' }}>
              <PulseButton>Pulse Animation</PulseButton>
              <Text type="secondary">Pulsing opacity animation</Text>
            </Space>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="Ripple Button" size="small">
            <Space direction="vertical" style={{ width: '100%' }}>
              <RippleButton>Click for Ripple</RippleButton>
              <Text type="secondary">Material design ripple effect</Text>
            </Space>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="Gradient Button" size="small">
            <Space direction="vertical" style={{ width: '100%' }}>
              <GradientButton>Gradient Flow</GradientButton>
              <Text type="secondary">Animated gradient background</Text>
            </Space>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="Animated Border Button" size="small">
            <Space direction="vertical" style={{ width: '100%' }}>
              <AnimatedBorderButton>Animated Border</AnimatedBorderButton>
              <Text type="secondary">Flowing gradient border</Text>
            </Space>
          </Card>
        </Col>
      </Row>
    </Space>
  );
};
