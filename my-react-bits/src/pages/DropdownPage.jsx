import { Typography, Space } from "antd";
import { Dropdown } from "../components/Dropdown";
import { Button } from "../components/Button";
import { CodeBlock } from "../components/CodeBlock";

const { Title, Paragraph } = Typography;

export const DropdownPage = () => {
  const items = [
    { label: 'Profile', onClick: () => alert('Profile') },
    { label: 'Settings', onClick: () => alert('Settings') },
    { divider: true },
    { label: 'Logout', danger: true, onClick: () => alert('Logout') }
  ];

  const codeExample = `import { Dropdown } from './components/Dropdown';

const items = [
  { label: 'Profile', onClick: () => {} },
  { label: 'Settings', onClick: () => {} },
  { divider: true },
  { label: 'Logout', danger: true, onClick: () => {} }
];

<Dropdown 
  trigger={<Button>Menu</Button>}
  items={items}
/>`;

  return (
    <div>
      <Title level={2}>Dropdown</Title>
      <Paragraph>A dropdown menu for displaying choices.</Paragraph>

      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <div>
          <Title level={4}>Basic</Title>
          <Dropdown trigger={<Button>Click me</Button>} items={items} />
        </div>

        <div>
          <Title level={4}>Usage</Title>
          <CodeBlock code={codeExample} language="jsx" />
        </div>
      </Space>
    </div>
  );
};
