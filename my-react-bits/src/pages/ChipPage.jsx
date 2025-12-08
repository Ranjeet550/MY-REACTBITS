import { Typography, Space } from "antd";
import { Chip } from "../components/Chip";
import { CodeBlock } from "../components/CodeBlock";

const { Title, Paragraph } = Typography;

export const ChipPage = () => {
  const codeExample = `import { Chip } from './components/Chip';

// Basic chip
<Chip label="Default" />

// Variants
<Chip label="Filled" variant="filled" />
<Chip label="Outlined" variant="outlined" />
<Chip label="Light" variant="light" />

// Colors
<Chip label="Primary" color="primary" />
<Chip label="Success" color="success" />
<Chip label="Warning" color="warning" />
<Chip label="Error" color="error" />

// Sizes
<Chip label="Small" size="small" />
<Chip label="Medium" size="medium" />
<Chip label="Large" size="large" />

// Deletable
<Chip label="Delete me" onDelete={() => console.log('deleted')} />

// Clickable
<Chip label="Click me" clickable onClick={() => console.log('clicked')} />`;

  return (
    <div>
      <Title level={2}>Chip</Title>
      <Paragraph>
        Compact elements that represent an input, attribute, or action.
      </Paragraph>

      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <div>
          <Title level={4}>Variants</Title>
          <Space size="middle" wrap>
            <Chip label="Filled" variant="filled" />
            <Chip label="Outlined" variant="outlined" />
            <Chip label="Light" variant="light" />
          </Space>
        </div>

        <div>
          <Title level={4}>Colors</Title>
          <Space size="middle" wrap>
            <Chip label="Primary" color="primary" />
            <Chip label="Success" color="success" />
            <Chip label="Warning" color="warning" />
            <Chip label="Error" color="error" />
            <Chip label="Gray" color="gray" />
          </Space>
        </div>

        <div>
          <Title level={4}>Sizes</Title>
          <Space size="middle" align="center" wrap>
            <Chip label="Small" size="small" />
            <Chip label="Medium" size="medium" />
            <Chip label="Large" size="large" />
          </Space>
        </div>

        <div>
          <Title level={4}>Deletable</Title>
          <Space size="middle" wrap>
            <Chip label="React" onDelete={() => alert('Deleted React')} />
            <Chip label="TypeScript" color="success" onDelete={() => alert('Deleted TypeScript')} />
            <Chip label="JavaScript" color="warning" onDelete={() => alert('Deleted JavaScript')} />
          </Space>
        </div>

        <div>
          <Title level={4}>Clickable</Title>
          <Space size="middle" wrap>
            <Chip label="Click me" clickable onClick={() => alert('Clicked!')} />
            <Chip label="Category" color="success" clickable onClick={() => alert('Category clicked')} />
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
