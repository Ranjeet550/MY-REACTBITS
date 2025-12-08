import { useState, useEffect } from "react";
import { DotsLoader } from "../components/DotsLoader";
import { Spinner } from "../components/Spinner";
import { ProgressBar } from "../components/ProgressBar";
import { Skeleton } from "../components/Skeleton";
import { Typography, Space, Card, Row, Col, Divider } from "antd";

const { Title, Paragraph, Text } = Typography;

const code = `import { DotsLoader, Spinner, ProgressBar, Skeleton } from "./components";

<DotsLoader />
<Spinner size={40} />
<ProgressBar progress={65} />
<Skeleton width="100%" height={20} />`;

export const LoadersPage = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <div>
        <Title level={2}>Loaders & Skeletons</Title>
        <Paragraph type="secondary">
          Loading indicators and skeleton screens for better UX.
        </Paragraph>
      </div>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Card title="Dots Loader" size="large">
            <Space direction="vertical" align="center" style={{ width: '100%', padding: '20px 0' }}>
              <DotsLoader />
              <Text type="secondary">Bouncing dots animation</Text>
            </Space>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="Spinner" size="large">
            <Space direction="vertical" align="center" style={{ width: '100%', padding: '20px 0' }}>
              <Spinner size={40} />
              <Text type="secondary">Classic spinning loader</Text>
            </Space>
          </Card>
        </Col>
      </Row>

      <Card title="Progress Bar" size="large">
        <Space direction="vertical" style={{ width: '100%' }}>
          <ProgressBar progress={progress} />
          <Text type="secondary">Animated progress indicator - {progress}%</Text>
        </Space>
      </Card>

      <Card title="Skeleton Screen" size="large">
        <Space direction="vertical" style={{ width: '100%', gap: 8 }}>
          <Skeleton width="100%" height={20} />
          <Skeleton width="80%" height={20} />
          <Skeleton width="60%" height={20} />
          <Text type="secondary" style={{ marginTop: 12 }}>Loading placeholder animation</Text>
        </Space>
      </Card>

      <Divider />

      <Card title="Code Example">
        <pre style={{ background: '#001529', padding: 16, borderRadius: 8, overflow: 'auto', margin: 0 }}>
          <code style={{ color: '#fff', fontSize: 13 }}>{code}</code>
        </pre>
      </Card>
    </Space>
  );
};
