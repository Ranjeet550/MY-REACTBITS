import { Typography, Space } from "antd";
import { Divider } from "../components/Divider";
import { CodeBlock } from "../components/CodeBlock";

const { Title, Paragraph } = Typography;

export const DividerPage = () => {
  const codeExample = `import { Divider } from './components/Divider';

// Basic horizontal divider
<Divider />

// With text
<Divider text="Section Title" />

// Text alignment
<Divider text="Left" textAlign="left" />
<Divider text="Center" textAlign="center" />
<Divider text="Right" textAlign="right" />

// Vertical divider
<div style={{ display: 'flex' }}>
  <span>Item 1</span>
  <Divider orientation="vertical" />
  <span>Item 2</span>
</div>

// Custom spacing
<Divider spacing={32} />`;

  return (
    <div>
      <Title level={2}>Divider</Title>
      <Paragraph>
        A divider line separates different content sections.
      </Paragraph>

      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <div>
          <Title level={4}>Basic Divider</Title>
          <div style={{ color: '#9ca3af' }}>Content above</div>
          <Divider />
          <div style={{ color: '#9ca3af' }}>Content below</div>
        </div>

        <div>
          <Title level={4}>With Text</Title>
          <Divider text="Section Break" />
        </div>

        <div>
          <Title level={4}>Text Alignment</Title>
          <Divider text="Left Aligned" textAlign="left" />
          <Divider text="Center Aligned" textAlign="center" />
          <Divider text="Right Aligned" textAlign="right" />
        </div>

        <div>
          <Title level={4}>Vertical Divider</Title>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ color: '#9ca3af' }}>Item 1</span>
            <Divider orientation="vertical" spacing={24} />
            <span style={{ color: '#9ca3af' }}>Item 2</span>
            <Divider orientation="vertical" spacing={24} />
            <span style={{ color: '#9ca3af' }}>Item 3</span>
          </div>
        </div>

        <div>
          <Title level={4}>Usage</Title>
          <CodeBlock code={codeExample} language="jsx" />
        </div>
      </Space>
    </div>
  );
};
