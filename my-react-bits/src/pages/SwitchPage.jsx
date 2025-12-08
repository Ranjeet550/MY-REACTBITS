import { useState } from "react";
import { Typography, Space, Row, Col } from "antd";
import { Switch } from "../components/Switch";
import { CodeBlock } from "../components/CodeBlock";

const { Title, Paragraph } = Typography;

export const SwitchPage = () => {
  const [checked, setChecked] = useState(false);

  const codeExample = `import { useState } from 'react';
import { Switch } from './components/Switch';

const [checked, setChecked] = useState(false);

// Basic switch
<Switch 
  checked={checked} 
  onChange={setChecked} 
/>

// With label
<Switch 
  checked={checked} 
  onChange={setChecked}
  label="Enable notifications"
/>

// Different sizes
<Switch size="small" />
<Switch size="medium" />
<Switch size="large" />

// Disabled
<Switch disabled />`;

  return (
    <div>
      <Title level={2}>Switch</Title>
      <Paragraph>
        A switch component for toggling between two states.
      </Paragraph>

      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <div>
          <Title level={4}>Basic Switch</Title>
          <Space size="large">
            <Switch checked={checked} onChange={setChecked} />
            <span style={{ color: '#9ca3af' }}>Status: {checked ? 'On' : 'Off'}</span>
          </Space>
        </div>

        <div>
          <Title level={4}>With Label</Title>
          <Space direction="vertical" size="middle">
            <Switch label="Enable notifications" />
            <Switch label="Dark mode" />
            <Switch label="Auto-save" />
          </Space>
        </div>

        <div>
          <Title level={4}>Sizes</Title>
          <Space size="large" align="center">
            <Switch size="small" label="Small" />
            <Switch size="medium" label="Medium" />
            <Switch size="large" label="Large" />
          </Space>
        </div>

        <div>
          <Title level={4}>Disabled</Title>
          <Space size="large">
            <Switch disabled />
            <Switch checked disabled />
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
