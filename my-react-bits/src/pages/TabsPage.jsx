import { Typography, Space } from "antd";
import { Tabs } from "../components/Tabs";
import { CodeBlock } from "../components/CodeBlock";

const { Title, Paragraph } = Typography;

export const TabsPage = () => {
  const tabItems = [
    {
      label: "Profile",
      content: (
        <div style={{ padding: 16 }}>
          <h3 style={{ color: '#fff' }}>Profile Information</h3>
          <p style={{ color: '#9ca3af' }}>Manage your profile settings and preferences here.</p>
        </div>
      )
    },
    {
      label: "Settings",
      content: (
        <div style={{ padding: 16 }}>
          <h3 style={{ color: '#fff' }}>Account Settings</h3>
          <p style={{ color: '#9ca3af' }}>Configure your account settings and security options.</p>
        </div>
      )
    },
    {
      label: "Notifications",
      content: (
        <div style={{ padding: 16 }}>
          <h3 style={{ color: '#fff' }}>Notification Preferences</h3>
          <p style={{ color: '#9ca3af' }}>Choose how you want to be notified about updates.</p>
        </div>
      )
    }
  ];

  const codeExample = `import { Tabs } from './components/Tabs';

const items = [
  {
    label: "Profile",
    content: <div>Profile content...</div>
  },
  {
    label: "Settings",
    content: <div>Settings content...</div>
  }
];

// Underline variant (default)
<Tabs items={items} />

// Pills variant
<Tabs items={items} variant="pills" />

// Set default active tab
<Tabs items={items} defaultActive={1} />`;

  return (
    <div>
      <Title level={2}>Tabs</Title>
      <Paragraph>
        Organize content into separate views where only one view can be visible at a time.
      </Paragraph>

      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <div>
          <Title level={4}>Underline Tabs</Title>
          <Tabs items={tabItems} variant="underline" />
        </div>

        <div>
          <Title level={4}>Pills Tabs</Title>
          <Tabs items={tabItems} variant="pills" />
        </div>

        <div>
          <Title level={4}>Usage</Title>
          <CodeBlock code={codeExample} language="jsx" />
        </div>
      </Space>
    </div>
  );
};
