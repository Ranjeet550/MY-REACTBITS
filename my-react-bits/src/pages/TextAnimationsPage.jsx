import { TypingEffect } from "../components/TypingEffect";
import { GradientText } from "../components/GradientText";
import { FadeInText } from "../components/FadeInText";
import { GlitchText } from "../components/GlitchText";
import { WaveText } from "../components/WaveText";
import { RevealText } from "../components/RevealText";
import { BouncingText } from "../components/BouncingText";
import { Typography, Space, Card, Row, Col, Divider } from "antd";
import { ThunderboltOutlined } from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

export const TextAnimationsPage = () => {
  return (
    <div style={{ width: '100%' }}>
      {/* Header Section */}
      

      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        {/* Typing Effect */}
        <Card 
          title={<span style={{ fontSize: 18, fontWeight: 600 }}>⌨️ Typing Effect</span>}
          style={{ borderRadius: 12, border: "1px solid rgba(102, 126, 234, 0.2)" }}
        >
          <Space direction="vertical" size="middle" style={{ width: "100%" }}>
            <div
              style={{
                padding: "40px 24px",
                background: "linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)",
                borderRadius: 12,
                textAlign: "center",
                minHeight: 100,
              }}
            >
              <div style={{ fontSize: 24, fontWeight: 500, color: "#1f2937" }}>
                <TypingEffect 
                  text="Welcome to My React Bits - Beautiful Animated Components 🚀" 
                  speed={80} 
                />
              </div>
            </div>
            <Divider style={{ margin: "12px 0" }}>Code Example</Divider>
            <pre style={{ background: '#0f172a', padding: 20, borderRadius: 8, overflow: 'auto', margin: 0 }}>
              <code style={{ color: '#e2e8f0', fontSize: 13 }}>{`import { TypingEffect } from "./components";

<TypingEffect 
  text="Welcome to My React Bits" 
  speed={80} 
/>`}</code>
            </pre>
            <Divider style={{ margin: "12px 0" }}>Props</Divider>
            <Row gutter={[16, 8]}>
              <Col span={24}>
                <Text code>text</Text> <Text type="secondary">string - The text to animate</Text>
              </Col>
              <Col span={24}>
                <Text code>speed</Text> <Text type="secondary">number - Milliseconds per character (default: 100)</Text>
              </Col>
            </Row>
          </Space>
        </Card>

        {/* Gradient Text */}
        <Card 
          title={<span style={{ fontSize: 18, fontWeight: 600 }}>🌈 Gradient Text</span>}
          style={{ borderRadius: 12, border: "1px solid rgba(102, 126, 234, 0.2)" }}
        >
          <Space direction="vertical" size="middle" style={{ width: "100%" }}>
            <div
              style={{
                padding: "40px 24px",
                background: "#0f172a",
                borderRadius: 12,
                textAlign: "center",
              }}
            >
              <div style={{ marginBottom: 24 }}>
                <GradientText 
                  gradient="linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)"
                >
                  <span style={{ fontSize: 32, fontWeight: 700 }}>Static Gradient</span>
                </GradientText>
              </div>
              <div>
                <GradientText 
                  gradient="linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)"
                  animated
                >
                  <span style={{ fontSize: 32, fontWeight: 700 }}>Animated Gradient ✨</span>
                </GradientText>
              </div>
            </div>
            <Divider style={{ margin: "12px 0" }}>Code Example</Divider>
            <pre style={{ background: '#0f172a', padding: 20, borderRadius: 8, overflow: 'auto', margin: 0 }}>
              <code style={{ color: '#e2e8f0', fontSize: 13 }}>{`import { GradientText } from "./components";

<GradientText>Static Gradient</GradientText>
<GradientText animated>Animated Gradient ✨</GradientText>`}</code>
            </pre>
            <Divider style={{ margin: "12px 0" }}>Props</Divider>
            <Row gutter={[16, 8]}>
              <Col span={24}>
                <Text code>gradient</Text> <Text type="secondary">string - CSS gradient (default: purple-pink gradient)</Text>
              </Col>
              <Col span={24}>
                <Text code>animated</Text> <Text type="secondary">boolean - Enable gradient animation (default: false)</Text>
              </Col>
            </Row>
          </Space>
        </Card>

        {/* Fade In Text */}
        <Card 
          title={<span style={{ fontSize: 18, fontWeight: 600 }}>✨ Fade In Text</span>}
          style={{ borderRadius: 12, border: "1px solid rgba(102, 126, 234, 0.2)" }}
        >
          <Space direction="vertical" size="middle" style={{ width: "100%" }}>
            <div
              style={{
                padding: "40px 24px",
                background: "linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%)",
                borderRadius: 12,
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 28, fontWeight: 600, color: "#1f2937" }}>
                <FadeInText 
                  text="Beautiful fade in animation with staggered words"
                  duration={800}
                  staggerDelay={100}
                />
              </div>
            </div>
            <Divider style={{ margin: "12px 0" }}>Code Example</Divider>
            <pre style={{ background: '#0f172a', padding: 20, borderRadius: 8, overflow: 'auto', margin: 0 }}>
              <code style={{ color: '#e2e8f0', fontSize: 13 }}>{`import { FadeInText } from "./components";

<FadeInText 
  text="Beautiful fade in animation"
  duration={800}
  staggerDelay={100}
/>`}</code>
            </pre>
            <Divider style={{ margin: "12px 0" }}>Props</Divider>
            <Row gutter={[16, 8]}>
              <Col span={24}>
                <Text code>text</Text> <Text type="secondary">string - The text to animate</Text>
              </Col>
              <Col span={24}>
                <Text code>delay</Text> <Text type="secondary">number - Initial delay in ms (default: 0)</Text>
              </Col>
              <Col span={24}>
                <Text code>duration</Text> <Text type="secondary">number - Animation duration per word (default: 1000)</Text>
              </Col>
              <Col span={24}>
                <Text code>staggerDelay</Text> <Text type="secondary">number - Delay between words in ms (default: 50)</Text>
              </Col>
            </Row>
          </Space>
        </Card>

        {/* Wave Text */}
        <Card 
          title={<span style={{ fontSize: 18, fontWeight: 600 }}>🌊 Wave Text</span>}
          style={{ borderRadius: 12, border: "1px solid rgba(102, 126, 234, 0.2)" }}
        >
          <Space direction="vertical" size="middle" style={{ width: "100%" }}>
            <div
              style={{
                padding: "50px 24px",
                background: "linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 51, 234, 0.05) 100%)",
                borderRadius: 12,
                textAlign: "center",
              }}
            >
              <WaveText color="#3b82f6" fontSize={36}>
                Wave Animation!
              </WaveText>
            </div>
            <Divider style={{ margin: "12px 0" }}>Code Example</Divider>
            <pre style={{ background: '#0f172a', padding: 20, borderRadius: 8, overflow: 'auto', margin: 0 }}>
              <code style={{ color: '#e2e8f0', fontSize: 13 }}>{`import { WaveText } from "./components";

<WaveText color="#3b82f6" fontSize={36}>
  Wave Animation!
</WaveText>`}</code>
            </pre>
            <Divider style={{ margin: "12px 0" }}>Props</Divider>
            <Row gutter={[16, 8]}>
              <Col span={24}>
                <Text code>color</Text> <Text type="secondary">string - Text color (default: "#667eea")</Text>
              </Col>
              <Col span={24}>
                <Text code>fontSize</Text> <Text type="secondary">number - Font size in px (default: 32)</Text>
              </Col>
            </Row>
          </Space>
        </Card>

        {/* Bouncing Text */}
        <Card 
          title={<span style={{ fontSize: 18, fontWeight: 600 }}>🎾 Bouncing Text</span>}
          style={{ borderRadius: 12, border: "1px solid rgba(102, 126, 234, 0.2)" }}
        >
          <Space direction="vertical" size="middle" style={{ width: "100%" }}>
            <div
              style={{
                padding: "50px 24px",
                background: "linear-gradient(135deg, rgba(251, 146, 60, 0.05) 0%, rgba(239, 68, 68, 0.05) 100%)",
                borderRadius: 12,
                textAlign: "center",
              }}
            >
              <BouncingText color="#f59e0b" fontSize={36}>
                Bounce!
              </BouncingText>
            </div>
            <Divider style={{ margin: "12px 0" }}>Code Example</Divider>
            <pre style={{ background: '#0f172a', padding: 20, borderRadius: 8, overflow: 'auto', margin: 0 }}>
              <code style={{ color: '#e2e8f0', fontSize: 13 }}>{`import { BouncingText } from "./components";

<BouncingText color="#f59e0b" fontSize={36}>
  Bounce!
</BouncingText>`}</code>
            </pre>
            <Divider style={{ margin: "12px 0" }}>Props</Divider>
            <Row gutter={[16, 8]}>
              <Col span={24}>
                <Text code>color</Text> <Text type="secondary">string - Text color (default: "#667eea")</Text>
              </Col>
              <Col span={24}>
                <Text code>fontSize</Text> <Text type="secondary">number - Font size in px (default: 32)</Text>
              </Col>
            </Row>
          </Space>
        </Card>

        {/* Glitch Text */}
        <Card 
          title={<span style={{ fontSize: 18, fontWeight: 600 }}>⚡ Glitch Text</span>}
          style={{ borderRadius: 12, border: "1px solid rgba(102, 126, 234, 0.2)" }}
        >
          <Space direction="vertical" size="middle" style={{ width: "100%" }}>
            <div
              style={{
                padding: "50px 24px",
                background: "#0f172a",
                borderRadius: 12,
                textAlign: "center",
              }}
            >
              <GlitchText color="#fff" fontSize={40}>
                GLITCH EFFECT
              </GlitchText>
            </div>
            <Divider style={{ margin: "12px 0" }}>Code Example</Divider>
            <pre style={{ background: '#0f172a', padding: 20, borderRadius: 8, overflow: 'auto', margin: 0 }}>
              <code style={{ color: '#e2e8f0', fontSize: 13 }}>{`import { GlitchText } from "./components";

<GlitchText color="#fff" fontSize={40}>
  GLITCH EFFECT
</GlitchText>`}</code>
            </pre>
            <Divider style={{ margin: "12px 0" }}>Props</Divider>
            <Row gutter={[16, 8]}>
              <Col span={24}>
                <Text code>color</Text> <Text type="secondary">string - Text color (default: "#667eea")</Text>
              </Col>
              <Col span={24}>
                <Text code>fontSize</Text> <Text type="secondary">number - Font size in px (default: 32)</Text>
              </Col>
            </Row>
          </Space>
        </Card>

        {/* Reveal Text */}
        <Card 
          title={<span style={{ fontSize: 18, fontWeight: 600 }}>🎭 Reveal Text</span>}
          style={{ borderRadius: 12, border: "1px solid rgba(102, 126, 234, 0.2)" }}
        >
          <Space direction="vertical" size="middle" style={{ width: "100%" }}>
            <div
              style={{
                padding: "50px 24px",
                background: "linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, rgba(236, 72, 153, 0.05) 100%)",
                borderRadius: 12,
                textAlign: "center",
              }}
            >
              <RevealText color="#8b5cf6" fontSize={36}>
                Smooth Reveal!
              </RevealText>
            </div>
            <Divider style={{ margin: "12px 0" }}>Code Example</Divider>
            <pre style={{ background: '#0f172a', padding: 20, borderRadius: 8, overflow: 'auto', margin: 0 }}>
              <code style={{ color: '#e2e8f0', fontSize: 13 }}>{`import { RevealText } from "./components";

<RevealText color="#8b5cf6" fontSize={36}>
  Smooth Reveal!
</RevealText>`}</code>
            </pre>
            <Divider style={{ margin: "12px 0" }}>Props</Divider>
            <Row gutter={[16, 8]}>
              <Col span={24}>
                <Text code>delay</Text> <Text type="secondary">number - Initial delay in ms (default: 0)</Text>
              </Col>
              <Col span={24}>
                <Text code>color</Text> <Text type="secondary">string - Text color (default: "#fff")</Text>
              </Col>
              <Col span={24}>
                <Text code>fontSize</Text> <Text type="secondary">number - Font size in px (default: 32)</Text>
              </Col>
            </Row>
          </Space>
        </Card>

        {/* Usage Tips */}
        <Card
          style={{
            borderRadius: 12,
            background: "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
            border: "1px solid rgba(102, 126, 234, 0.3)",
          }}
        >
          <Title level={4} style={{ marginBottom: 16 }}>💡 Usage Tips</Title>
          <Space direction="vertical" size="small">
            <Text>• Use <Text strong>Typing Effect</Text> for hero sections and interactive demos</Text>
            <Text>• Apply <Text strong>Gradient Text</Text> to highlight important headlines and CTAs</Text>
            <Text>• Combine <Text strong>Fade In</Text> with scroll triggers for dynamic content reveals</Text>
            <Text>• Use <Text strong>Wave</Text> and <Text strong>Bounce</Text> animations sparingly for playful accents</Text>
            <Text>• <Text strong>Glitch</Text> effect works great for tech-themed or cyberpunk designs</Text>
            <Text>• <Text strong>Reveal</Text> animations create elegant, professional transitions</Text>
          </Space>
        </Card>
      </Space>
    </div>
  );
};
