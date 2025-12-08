import { HoverCard } from "../components/HoverCard";
import { GlowCard } from "../components/GlowCard";
import { TiltCard } from "../components/TiltCard";
import { Button } from "../components/Button";
import { Typography, Space, Card as AntCard, Row, Col } from "antd";

const { Title, Paragraph, Text } = Typography;

const code = `import { HoverCard, GlowCard, TiltCard } from "./components";

<HoverCard title="Hover Card" description="Lifts up on hover">
  <Button variant="primary">Learn More</Button>
</HoverCard>

<GlowCard title="Glow Card" description="Animated glow effect">
  <Button variant="primary">Explore</Button>
</GlowCard>

<TiltCard title="Tilt Card" description="3D tilt effect on mouse move">
  <Button variant="primary">Discover</Button>
</TiltCard>`;

export const AnimatedCardsPage = () => {
  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <div>
        <Title level={2}>Animated Cards</Title>
        <Paragraph type="secondary">
          Interactive card components with hover effects and animations.
        </Paragraph>
      </div>

      <AntCard title="Live Preview" size="large">
        <Row gutter={[16, 16]}>
          <Col xs={24} md={8}>
            <HoverCard title="Hover Card" description="Lifts up with shadow on hover">
              <div style={{ marginTop: 12 }}>
                <Button variant="primary">Learn More</Button>
              </div>
            </HoverCard>
          </Col>
          <Col xs={24} md={8}>
            <GlowCard title="Glow Card" description="Animated glow border effect">
              <div style={{ marginTop: 12 }}>
                <Button variant="primary">Explore</Button>
              </div>
            </GlowCard>
          </Col>
          <Col xs={24} md={8}>
            <TiltCard title="Tilt Card" description="3D tilt effect on mouse movement">
              <div style={{ marginTop: 12 }}>
                <Button variant="primary">Discover</Button>
              </div>
            </TiltCard>
          </Col>
        </Row>
      </AntCard>

      <AntCard title="Code Example">
        <pre style={{ background: '#001529', padding: 16, borderRadius: 8, overflow: 'auto', margin: 0 }}>
          <code style={{ color: '#fff', fontSize: 13 }}>{code}</code>
        </pre>
      </AntCard>

      <Title level={4}>Component Features</Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <AntCard title="Hover Card" size="small" hoverable>
            <Text type="secondary">Smooth lift animation with shadow effect on hover</Text>
          </AntCard>
        </Col>
        <Col xs={24} md={8}>
          <AntCard title="Glow Card" size="small" hoverable>
            <Text type="secondary">Animated gradient glow around the border</Text>
          </AntCard>
        </Col>
        <Col xs={24} md={8}>
          <AntCard title="Tilt Card" size="small" hoverable>
            <Text type="secondary">3D perspective tilt following mouse position</Text>
          </AntCard>
        </Col>
      </Row>
    </Space>
  );
};
