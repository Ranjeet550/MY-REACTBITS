import { Typography, Space } from "antd";
import { Timeline } from "../components/Timeline";
import { CodeBlock } from "../components/CodeBlock";

const { Title, Paragraph } = Typography;

export const TimelinePage = () => {
  const items = [
    { time: '2024-01-15', title: 'Project Started', description: 'Initial project setup and planning' },
    { time: '2024-02-20', title: 'First Release', description: 'Launched v1.0 with core features', color: '#22c55e' },
    { time: '2024-03-10', title: 'Major Update', description: 'Added 20+ new components', color: '#f59e0b' },
    { time: 'Present', title: 'Current Version', description: 'Continuous improvements and bug fixes', color: '#38bdf8' }
  ];

  const codeExample = `import { Timeline } from './components/Timeline';

const items = [
  { 
    time: '2024-01-15', 
    title: 'Project Started', 
    description: 'Initial setup' 
  },
  { 
    time: '2024-02-20', 
    title: 'First Release', 
    description: 'v1.0 launched',
    color: '#22c55e' 
  }
];

<Timeline items={items} />`;

  return (
    <div>
      <Title level={2}>Timeline</Title>
      <Paragraph>Display a vertical timeline of events.</Paragraph>

      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <div>
          <Title level={4}>Basic Timeline</Title>
          <Timeline items={items} />
        </div>

        <div>
          <Title level={4}>Usage</Title>
          <CodeBlock code={codeExample} language="jsx" />
        </div>
      </Space>
    </div>
  );
};
