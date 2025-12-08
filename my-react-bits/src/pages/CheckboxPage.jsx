import { useState } from "react";
import { Typography, Space } from "antd";
import { Checkbox } from "../components/Checkbox";
import { CodeBlock } from "../components/CodeBlock";

const { Title, Paragraph } = Typography;

export const CheckboxPage = () => {
  const [checked, setChecked] = useState(false);

  const codeExample = `import { useState } from 'react';
import { Checkbox } from './components/Checkbox';

const [checked, setChecked] = useState(false);

// Basic checkbox
<Checkbox 
  checked={checked} 
  onChange={setChecked} 
/>

// With label
<Checkbox 
  checked={checked} 
  onChange={setChecked}
  label="I agree to terms"
/>

// Indeterminate state
<Checkbox indeterminate />

// Disabled
<Checkbox disabled />`;

  return (
    <div>
      <Title level={2}>Checkbox</Title>
      <Paragraph>
        Checkbox component for selecting multiple options from a set.
      </Paragraph>

      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <div>
          <Title level={4}>Basic Checkbox</Title>
          <Space size="large">
            <Checkbox checked={checked} onChange={setChecked} />
            <span style={{ color: '#9ca3af' }}>Status: {checked ? 'Checked' : 'Unchecked'}</span>
          </Space>
        </div>

        <div>
          <Title level={4}>With Labels</Title>
          <Space direction="vertical" size="middle">
            <Checkbox label="Accept terms and conditions" />
            <Checkbox label="Subscribe to newsletter" />
            <Checkbox label="Remember me" />
          </Space>
        </div>

        <div>
          <Title level={4}>States</Title>
          <Space direction="vertical" size="middle">
            <Checkbox label="Unchecked" />
            <Checkbox checked label="Checked" />
            <Checkbox indeterminate label="Indeterminate" />
          </Space>
        </div>

        <div>
          <Title level={4}>Disabled</Title>
          <Space size="large">
            <Checkbox disabled label="Disabled unchecked" />
            <Checkbox checked disabled label="Disabled checked" />
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
