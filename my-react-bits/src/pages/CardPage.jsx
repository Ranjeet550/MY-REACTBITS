import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { Typography, Space, Card as AntCard, Row, Col } from "antd";

const { Title, Paragraph, Text } = Typography;

const cardExampleCode = `import { Card } from "./components/Card";
import { Button } from "./components/Button";

export function Example() {
  return (
    <Card
      title="Upgrade to Pro"
      description="Unlock advanced analytics, priority support, and more."
    >
      <Button variant="primary">Upgrade</Button>
    </Card>
  );
}`;

export const CardPage = () => {
  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <div>
        <Title level={2}>Card</Title>
        <Paragraph type="secondary">
          A container for grouping related content and actions.
        </Paragraph>
      </div>

      <AntCard title="Live Preview" size="large">
        <div style={{ maxWidth: 400 }}>
          <Card
            title="Upgrade to Pro"
            description="Unlock advanced analytics, priority support, and more."
          >
            <div style={{ marginTop: 12 }}>
              <Button variant="primary">Upgrade</Button>
            </div>
          </Card>
        </div>
      </AntCard>

      <AntCard title="Code Example">
        <pre style={{ background: '#001529', padding: 16, borderRadius: 8, overflow: 'auto', margin: 0 }}>
          <code style={{ color: '#fff', fontSize: 13 }}>{cardExampleCode}</code>
        </pre>
      </AntCard>

      <AntCard title="Props">
        <Space direction="vertical">
          <div>
            <Text code>title</Text> <Text type="secondary">- Card title (required)</Text>
          </div>
          <div>
            <Text code>description</Text> <Text type="secondary">- Optional description text</Text>
          </div>
          <div>
            <Text code>children</Text> <Text type="secondary">- Card content</Text>
          </div>
        </Space>
      </AntCard>
    </Space>
  );
};
