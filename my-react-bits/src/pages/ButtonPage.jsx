import { Button } from "../components/Button";
import { Typography, Space, Card } from "antd";

const { Title, Paragraph, Text } = Typography;

const buttonExampleCode = `import { Button } from "./components/Button";

export function Example() {
  return (
    <div style={{ display: "flex", gap: 8 }}>
      <Button variant="primary">Primary</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  );
}`;

export const ButtonPage = () => {
  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <div>
        <Title level={2}>Button</Title>
        <Paragraph type="secondary">
          A simple button component for primary actions and subtle actions.
        </Paragraph>
      </div>

      <div>
        <Title level={4}>Usage</Title>
        <Paragraph type="secondary">
          Use the button for user actions. Choose the variant that matches the
          importance of the action.
        </Paragraph>

        <Card title="Live preview">
          <Space>
            <Button variant="primary">Primary</Button>
            <Button variant="ghost">Ghost</Button>
          </Space>
        </Card>

        <Card title="Code" style={{ marginTop: 16 }}>
          <pre style={{ background: '#001529', padding: 16, borderRadius: 8, overflow: 'auto' }}>
            <code style={{ color: '#fff', fontSize: 13 }}>{buttonExampleCode}</code>
          </pre>
        </Card>
      </div>

      <div>
        <Title level={4}>Props</Title>
        <Card>
          <ul>
            <li>
              <Text code>variant</Text> - "primary" | "ghost" (default: "primary")
            </li>
            <li>
              <Text code>children</Text> - Button text content
            </li>
            <li>
              <Text code>...rest</Text> - All standard button HTML attributes
            </li>
          </ul>
        </Card>
      </div>
    </Space>
  );
};
