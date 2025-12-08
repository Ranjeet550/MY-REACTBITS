import { Typography, Space, Row, Col } from "antd";
import { StatsCard } from "../components/StatsCard";
import { CodeBlock } from "../components/CodeBlock";

const { Title, Paragraph } = Typography;

export const StatsCardPage = () => {
  const codeExample = `import { StatsCard } from './components/StatsCard';

<StatsCard 
  title="Total Users"
  value="12,345"
  change="+12.5%"
  trend="up"
  icon="👥"
  color="#38bdf8"
/>

<StatsCard 
  title="Revenue"
  value="$54,321"
  change="-5.2%"
  trend="down"
  icon="💰"
  color="#22c55e"
/>`;

  return (
    <div>
      <Title level={2}>Stats Card</Title>
      <Paragraph>Display key metrics and statistics with trend indicators.</Paragraph>

      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <div>
          <Title level={4}>Examples</Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} lg={6}>
              <StatsCard 
                title="Total Users"
                value="12,345"
                change="+12.5%"
                trend="up"
                icon="👥"
                color="#38bdf8"
              />
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <StatsCard 
                title="Revenue"
                value="$54,321"
                change="+8.2%"
                trend="up"
                icon="💰"
                color="#22c55e"
              />
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <StatsCard 
                title="Orders"
                value="3,456"
                change="-2.1%"
                trend="down"
                icon="📦"
                color="#f59e0b"
              />
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <StatsCard 
                title="Visitors"
                value="89,234"
                change="+0%"
                trend="neutral"
                icon="👁️"
                color="#8b5cf6"
              />
            </Col>
          </Row>
        </div>

        <div>
          <Title level={4}>Usage</Title>
          <CodeBlock code={codeExample} language="jsx" />
        </div>
      </Space>
    </div>
  );
};
