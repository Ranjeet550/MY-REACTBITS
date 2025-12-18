import { Rating } from "../components/Rating";
import { ProgressCircle } from "../components/ProgressCircle";
import { Typography, Space, Card, Slider } from "antd";
import { useState } from "react";

const { Title, Paragraph, Text } = Typography;

const ratingExampleCode = `import { Rating } from "./components/Rating";
import { useState } from "react";

export function Example() {
  const [rating, setRating] = useState(0);

  return (
    <div>
      <Rating
        value={rating}
        onChange={setRating}
        maxStars={5}
        size={28}
        showValue
      />
    </div>
  );
}`;

const progressCircleExampleCode = `import { ProgressCircle } from "./components/ProgressCircle";
import { useState } from "react";

export function Example() {
  const [progress, setProgress] = useState(50);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
      <ProgressCircle
        progress={progress}
        size={120}
        color="#667eea"
        showText
      />
      <Slider
        value={progress}
        onChange={setProgress}
        min={0}
        max={100}
        style={{ width: 200 }}
      />
    </div>
  );
}`;

export const RatingProgressPage = () => {
  const [ratingValue, setRatingValue] = useState(3);
  const [progressValue, setProgressValue] = useState(65);
  const [circleSize, setCircleSize] = useState(120);

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <div>
        <Title level={2}>Rating & Progress Components</Title>
        <Paragraph type="secondary">
          Interactive rating and progress visualization components.
        </Paragraph>
      </div>

      {/* Rating Component Section */}
      <div>
        <Title level={3}>Rating Component</Title>

        <Card title="Live preview">
          <Space direction="vertical" size="large">
            <div>
              <Text strong style={{ color: '#fff' }}>Basic Rating</Text>
              <div style={{ marginTop: 8 }}>
                <Rating
                  value={ratingValue}
                  onChange={setRatingValue}
                  maxStars={5}
                  size={28}
                />
              </div>
            </div>

            <div>
              <Text strong style={{ color: '#fff' }}>Rating with Value Display</Text>
              <div style={{ marginTop: 8 }}>
                <Rating
                  value={ratingValue}
                  onChange={setRatingValue}
                  maxStars={5}
                  size={24}
                  showValue
                />
              </div>
            </div>

            <div>
              <Text strong style={{ color: '#fff' }}>Read-only Rating</Text>
              <div style={{ marginTop: 8 }}>
                <Rating
                  value={4}
                  readOnly
                  maxStars={5}
                  size={20}
                  showValue
                />
              </div>
            </div>
          </Space>
        </Card>

        <Card title="Code" style={{ marginTop: 16 }}>
          <pre style={{ background: '#001529', padding: 16, borderRadius: 8, overflow: 'auto' }}>
            <code style={{ color: '#fff', fontSize: 13 }}>{ratingExampleCode}</code>
          </pre>
        </Card>

        <Card title="Props" style={{ marginTop: 16 }}>
          <Space direction="vertical">
            <div>
              <Text code>value</Text> <Text type="secondary">- Number, current rating value</Text>
            </div>
            <div>
              <Text code>onChange</Text> <Text type="secondary">- Function, callback when rating changes</Text>
            </div>
            <div>
              <Text code>maxStars</Text> <Text type="secondary">- Number, total number of stars (default: 5)</Text>
            </div>
            <div>
              <Text code>size</Text> <Text type="secondary">- Number, star size in pixels (default: 24)</Text>
            </div>
            <div>
              <Text code>color</Text> <Text type="secondary">- String, filled star color (default: "#38bdf8")</Text>
            </div>
            <div>
              <Text code>hoverColor</Text> <Text type="secondary">- String, hover star color (default: "#667eea")</Text>
            </div>
            <div>
              <Text code>readOnly</Text> <Text type="secondary">- Boolean, makes rating read-only (default: false)</Text>
            </div>
            <div>
              <Text code>showValue</Text> <Text type="secondary">- Boolean, shows numeric value (default: false)</Text>
            </div>
          </Space>
        </Card>
      </div>

      {/* ProgressCircle Component Section */}
      <div style={{ marginTop: 24 }}>
        <Title level={3}>Progress Circle Component</Title>

        <Card title="Live preview">
          <Space direction="vertical" size="large" style={{ alignItems: "center" }}>
            <ProgressCircle
              progress={progressValue}
              size={circleSize}
              color="#667eea"
              showText
            />

            <div style={{ width: "100%", maxWidth: 400 }}>
              <div style={{ marginBottom: 16 }}>
                <Text strong style={{ color: '#fff', display: 'block', marginBottom: 8 }}>
                  Progress: {progressValue}%
                </Text>
                <Slider
                  value={progressValue}
                  onChange={setProgressValue}
                  min={0}
                  max={100}
                />
              </div>

              <div>
                <Text strong style={{ color: '#fff', display: 'block', marginBottom: 8 }}>
                  Size: {circleSize}px
                </Text>
                <Slider
                  value={circleSize}
                  onChange={setCircleSize}
                  min={50}
                  max={200}
                />
              </div>
            </div>
          </Space>
        </Card>

        <Card title="Code" style={{ marginTop: 16 }}>
          <pre style={{ background: '#001529', padding: 16, borderRadius: 8, overflow: 'auto' }}>
            <code style={{ color: '#fff', fontSize: 13 }}>{progressCircleExampleCode}</code>
          </pre>
        </Card>

        <Card title="Props" style={{ marginTop: 16 }}>
          <Space direction="vertical">
            <div>
              <Text code>progress</Text> <Text type="secondary">- Number, progress percentage (0-100)</Text>
            </div>
            <div>
              <Text code>size</Text> <Text type="secondary">- Number, circle diameter in pixels (default: 100)</Text>
            </div>
            <div>
              <Text code>strokeWidth</Text> <Text type="secondary">- Number, stroke width (default: 8)</Text>
            </div>
            <div>
              <Text code>color</Text> <Text type="secondary">- String, progress color (default: "#38bdf8")</Text>
            </div>
            <div>
              <Text code>backgroundColor</Text> <Text type="secondary">- String, background color (default: "#1f2933")</Text>
            </div>
            <div>
              <Text code>showText</Text> <Text type="secondary">- Boolean, shows progress text (default: true)</Text>
            </div>
            <div>
              <Text code>textColor</Text> <Text type="secondary">- String, text color (default: "#fff")</Text>
            </div>
            <div>
              <Text code>textSize</Text> <Text type="secondary">- Number, text size in pixels (default: 16)</Text>
            </div>
          </Space>
        </Card>
      </div>
    </Space>
  );
};