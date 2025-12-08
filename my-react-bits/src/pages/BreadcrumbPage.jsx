import { Typography, Space } from "antd";
import { Breadcrumb } from "../components/Breadcrumb";
import { CodeBlock } from "../components/CodeBlock";

const { Title, Paragraph } = Typography;

export const BreadcrumbPage = () => {
  const items = [
    { label: 'Home', href: '#', onClick: () => alert('Home clicked') },
    { label: 'Components', href: '#', onClick: () => alert('Components clicked') },
    { label: 'Breadcrumb' }
  ];

  const codeExample = `import { Breadcrumb } from './components/Breadcrumb';

const items = [
  { label: 'Home', href: '#' },
  { label: 'Components', href: '#' },
  { label: 'Breadcrumb' }
];

<Breadcrumb items={items} />

// Custom separator
<Breadcrumb items={items} separator=">" />`;

  return (
    <div>
      <Title level={2}>Breadcrumb</Title>
      <Paragraph>Display the current location within a navigational hierarchy.</Paragraph>

      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <div>
          <Title level={4}>Basic</Title>
          <Breadcrumb items={items} />
        </div>

        <div>
          <Title level={4}>Custom Separator</Title>
          <Breadcrumb items={items} separator=">" />
        </div>

        <div>
          <Title level={4}>Usage</Title>
          <CodeBlock code={codeExample} language="jsx" />
        </div>
      </Space>
    </div>
  );
};
