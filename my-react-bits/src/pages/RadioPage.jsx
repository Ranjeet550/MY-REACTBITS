import { useState } from "react";
import { Typography, Space } from "antd";
import { RadioGroup } from "../components/Radio";
import { CodeBlock } from "../components/CodeBlock";

const { Title, Paragraph } = Typography;

export const RadioPage = () => {
  const [value, setValue] = useState('option1');

  const options = ['Option 1', 'Option 2', 'Option 3'];
  
  const objectOptions = [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
    { value: 'large', label: 'Large' },
  ];

  const codeExample = `import { useState } from 'react';
import { RadioGroup } from './components/Radio';

const [value, setValue] = useState('option1');

// Simple array of strings
const options = ['Option 1', 'Option 2', 'Option 3'];
<RadioGroup 
  value={value} 
  onChange={setValue}
  options={options}
/>

// Array of objects
const options = [
  { value: 'small', label: 'Small' },
  { value: 'medium', label: 'Medium' },
  { value: 'large', label: 'Large' },
];
<RadioGroup options={options} />

// Horizontal direction
<RadioGroup options={options} direction="horizontal" />

// Disabled options
const options = [
  { value: 'opt1', label: 'Enabled' },
  { value: 'opt2', label: 'Disabled', disabled: true },
];`;

  return (
    <div>
      <Title level={2}>Radio Group</Title>
      <Paragraph>
        Radio buttons allow users to select a single option from a set.
      </Paragraph>

      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <div>
          <Title level={4}>Vertical (Default)</Title>
          <RadioGroup 
            value={value} 
            onChange={setValue}
            options={options}
          />
          <div style={{ marginTop: 16, color: '#9ca3af' }}>
            Selected: {value}
          </div>
        </div>

        <div>
          <Title level={4}>Horizontal</Title>
          <RadioGroup 
            options={objectOptions}
            direction="horizontal"
          />
        </div>

        <div>
          <Title level={4}>With Disabled Options</Title>
          <RadioGroup 
            options={[
              { value: 'enabled', label: 'Enabled option' },
              { value: 'disabled', label: 'Disabled option', disabled: true },
              { value: 'another', label: 'Another enabled' },
            ]}
          />
        </div>

        <div>
          <Title level={4}>Disabled Group</Title>
          <RadioGroup 
            options={options}
            disabled
          />
        </div>

        <div>
          <Title level={4}>Usage</Title>
          <CodeBlock code={codeExample} language="jsx" />
        </div>
      </Space>
    </div>
  );
};
