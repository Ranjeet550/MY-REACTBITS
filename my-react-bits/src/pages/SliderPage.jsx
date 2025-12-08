import { useState } from "react";
import { Typography, Space } from "antd";
import { Slider } from "../components/Slider";
import { CodeBlock } from "../components/CodeBlock";

const { Title, Paragraph } = Typography;

export const SliderPage = () => {
  const [value, setValue] = useState(50);

  const codeExample = `import { useState } from 'react';
import { Slider } from './components/Slider';

const [value, setValue] = useState(50);

// Basic slider
<Slider 
  value={value} 
  onChange={setValue} 
/>

// Custom range
<Slider 
  min={0}
  max={200}
  step={5}
  value={value}
  onChange={setValue}
/>

// Without value display
<Slider showValue={false} />

// Disabled
<Slider disabled />`;

  return (
    <div>
      <Title level={2}>Slider</Title>
      <Paragraph>
        A slider component for selecting a value from a range.
      </Paragraph>

      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <div>
          <Title level={4}>Basic Slider</Title>
          <Slider value={value} onChange={setValue} />
        </div>

        <div>
          <Title level={4}>Custom Range (0-200, step 10)</Title>
          <Slider min={0} max={200} step={10} />
        </div>

        <div>
          <Title level={4}>Without Value Display</Title>
          <Slider showValue={false} />
        </div>

        <div>
          <Title level={4}>Disabled</Title>
          <Slider value={75} disabled />
        </div>

        <div>
          <Title level={4}>Usage</Title>
          <CodeBlock code={codeExample} language="jsx" />
        </div>
      </Space>
    </div>
  );
};
