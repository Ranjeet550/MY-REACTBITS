import { TypingEffect } from "../components/TypingEffect";
import { Typography, Space, Card, Alert } from "antd";

const { Title, Paragraph, Text } = Typography;

const code = `import { TypingEffect } from "./components";

<TypingEffect 
  text="Welcome to My React Bits - Animated Components Library" 
  speed={100} 
/>`;

export const TextAnimationsPage = () => {
  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <div>
        <Title level={2}>Text Animations</Title>
        <Paragraph type="secondary">
          Animated text effects to make your content more engaging.
        </Paragraph>
      </div>

      <Card title="Typing Effect" size="large">
        <Space direction="vertical" style={{ width: '100%' }}>
          <div style={{ fontSize: 20, fontWeight: 500, minHeight: 60 }}>
            <TypingEffect 
              text="Welcome to My React Bits - Animated Components Library" 
              speed={100} 
            />
          </div>
          <Alert
            message="Typing Animation"
            description="The typing effect component simulates typing text character by character. You can control the speed with the speed prop (milliseconds per character)."
            type="info"
            showIcon
          />
        </Space>
      </Card>

      <Card title="Code Example">
        <pre style={{ background: '#001529', padding: 16, borderRadius: 8, overflow: 'auto', margin: 0 }}>
          <code style={{ color: '#fff', fontSize: 13 }}>{code}</code>
        </pre>
      </Card>

      <Card title="Props">
        <Space direction="vertical">
          <div>
            <Text code>text</Text> <Text type="secondary">- The text to animate (string)</Text>
          </div>
          <div>
            <Text code>speed</Text> <Text type="secondary">- Milliseconds per character (default: 100)</Text>
          </div>
        </Space>
      </Card>
    </Space>
  );
};
