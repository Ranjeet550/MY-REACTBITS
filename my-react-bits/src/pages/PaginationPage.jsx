import { useState } from "react";
import { Typography, Space } from "antd";
import { Pagination } from "../components/Pagination";
import { CodeBlock } from "../components/CodeBlock";

const { Title, Paragraph } = Typography;

export const PaginationPage = () => {
  const [current, setCurrent] = useState(1);

  const codeExample = `import { useState } from 'react';
import { Pagination } from './components/Pagination';

const [current, setCurrent] = useState(1);

<Pagination 
  total={100}
  pageSize={10}
  current={current}
  onChange={setCurrent}
/>

// With size changer
<Pagination 
  total={200}
  showSizeChanger
  onChange={(page, size) => console.log(page, size)}
/>`;

  return (
    <div>
      <Title level={2}>Pagination</Title>
      <Paragraph>Navigate through pages of data.</Paragraph>

      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <div>
          <Title level={4}>Basic</Title>
          <Pagination total={100} current={current} onChange={setCurrent} />
        </div>

        <div>
          <Title level={4}>With Size Changer</Title>
          <Pagination total={200} showSizeChanger />
        </div>

        <div>
          <Title level={4}>Usage</Title>
          <CodeBlock code={codeExample} language="jsx" />
        </div>
      </Space>
    </div>
  );
};
