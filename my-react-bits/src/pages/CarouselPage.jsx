import { Carousel } from "../components/Carousel";
import { Button } from "../components/Button";
import { Typography, Space, Card } from "antd";

const { Title, Paragraph, Text } = Typography;

const carouselExampleCode = `import { Carousel } from "./components/Carousel";

export function Example() {
  return (
    <div style={{ maxWidth: 600, margin: '0 auto' }}>
      <Carousel
        autoPlay
        interval={3000}
        showDots
        showArrows
      >
        <div style={{
          height: 300,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: 24,
          fontWeight: 600
        }}>
          Slide 1
        </div>
        <div style={{
          height: 300,
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: 24,
          fontWeight: 600
        }}>
          Slide 2
        </div>
        <div style={{
          height: 300,
          background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: 24,
          fontWeight: 600
        }}>
          Slide 3
        </div>
      </Carousel>
    </div>
  );
}`;

export const CarouselPage = () => {
  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <div>
        <Title level={2}>Carousel</Title>
        <Paragraph type="secondary">
          A responsive carousel component for displaying slides with automatic or manual navigation.
        </Paragraph>
      </div>

      <div>
        <Title level={4}>Usage</Title>
        <Paragraph type="secondary">
          Use the carousel to showcase images, content, or any other elements in a sliding format.
        </Paragraph>

        <Card title="Live preview">
          <div style={{ maxWidth: 600, margin: '0 auto' }}>
            <Carousel
              autoPlay
              interval={3000}
              showDots
              showArrows
            >
              <div style={{
                height: 300,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: 24,
                fontWeight: 600
              }}>
                Slide 1
              </div>
              <div style={{
                height: 300,
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: 24,
                fontWeight: 600
              }}>
                Slide 2
              </div>
              <div style={{
                height: 300,
                background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: 24,
                fontWeight: 600
              }}>
                Slide 3
              </div>
            </Carousel>
          </div>
        </Card>

        <Card title="Code" style={{ marginTop: 16 }}>
          <pre style={{ background: '#001529', padding: 16, borderRadius: 8, overflow: 'auto' }}>
            <code style={{ color: '#fff', fontSize: 13 }}>{carouselExampleCode}</code>
          </pre>
        </Card>
      </div>

      <div>
        <Title level={4}>Props</Title>
        <Card>
          <Space direction="vertical">
            <div>
              <Text code>items</Text> <Text type="secondary">- Array of items to display (alternative to children)</Text>
            </div>
            <div>
              <Text code>children</Text> <Text type="secondary">- React children to display as slides</Text>
            </div>
            <div>
              <Text code>autoPlay</Text> <Text type="secondary">- Boolean, enables auto-play (default: false)</Text>
            </div>
            <div>
              <Text code>interval</Text> <Text type="secondary">- Number, auto-play interval in ms (default: 3000)</Text>
            </div>
            <div>
              <Text code>showDots</Text> <Text type="secondary">- Boolean, shows navigation dots (default: true)</Text>
            </div>
            <div>
              <Text code>showArrows</Text> <Text type="secondary">- Boolean, shows navigation arrows (default: true)</Text>
            </div>
          </Space>
        </Card>
      </div>
    </Space>
  );
};