import { Typography, Space } from "antd";
import { Alert } from "../components/Alert";
import { CodeBlock } from "../components/CodeBlock";

const { Title, Paragraph } = Typography;

export const AlertPage = () => {
  const codeExample = `import { Alert } from './components/Alert';

// Basic alert
<Alert 
  type="info" 
  message="This is an informational message" 
/>

// With title and message
<Alert 
  type="success"
  title="Success"
  message="Your operation was completed successfully"
/>

// Closable
<Alert 
  type="warning"
  title="Warning"
  message="Please review before proceeding"
  closable
  onClose={() => console.log('Alert closed')}
/>

// Different types
<Alert type="info" message="Info message" />
<Alert type="success" message="Success message" />
<Alert type="warning" message="Warning message" />
<Alert type="error" message="Error message" />`;

  return (
    <div>
      <Title level={2}>Alert</Title>
      <Paragraph>
        Display important messages and notifications to users.
      </Paragraph>

      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <div>
          <Title level={4}>Types</Title>
          <Space direction="vertical" size="middle" style={{ width: "100%" }}>
            <Alert type="info" message="This is an informational message" />
            <Alert type="success" message="Your action was successful" />
            <Alert type="warning" message="Please be careful with this action" />
            <Alert type="error" message="An error has occurred" />
          </Space>
        </div>

        <div>
          <Title level={4}>With Title</Title>
          <Space direction="vertical" size="middle" style={{ width: "100%" }}>
            <Alert 
              type="info"
              title="Information"
              message="Here are some important details you should know about this feature."
            />
            <Alert 
              type="success"
              title="Success!"
              message="Your changes have been saved successfully."
            />
          </Space>
        </div>

        <div>
          <Title level={4}>Closable</Title>
          <Space direction="vertical" size="middle" style={{ width: "100%" }}>
            <Alert 
              type="warning"
              title="Warning"
              message="This action cannot be undone"
              closable
            />
            <Alert 
              type="error"
              title="Error"
              message="Failed to connect to server"
              closable
            />
          </Space>
        </div>

        <div>
          <Title level={4}>Usage</Title>
          <CodeBlock code={codeExample} language="jsx" />
        </div>
      </Space>
    </div>
  );
};
