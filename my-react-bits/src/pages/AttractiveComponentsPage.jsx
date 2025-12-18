import { CardStack } from "../components/CardStack";
import { ProgressRing } from "../components/ProgressRing";
import { SocialMediaCard } from "../components/SocialMediaCard";
import { Typography, Space, Card } from "antd";
import { useState } from "react";

const { Title, Paragraph, Text } = Typography;

const cardStackExampleCode = `import { CardStack } from "./components/CardStack";

export function Example() {
  const cards = [
    {
      title: "Premium",
      content: (
        <div>
          <h3 style={{ margin: 0, color: 'white' }}>Premium Plan</h3>
          <p style={{ margin: '8px 0 0', opacity: 0.8 }}>Unlock all features</p>
        </div>
      ),
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      title: "Pro",
      content: (
        <div>
          <h3 style={{ margin: 0, color: 'white' }}>Pro Plan</h3>
          <p style={{ margin: '8px 0 0', opacity: 0.8 }}>Advanced features</p>
        </div>
      ),
      background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      title: "Basic",
      content: (
        <div>
          <h3 style={{ margin: 0, color: 'white' }}>Basic Plan</h3>
          <p style={{ margin: '8px 0 0', opacity: 0.8 }}>Essential features</p>
        </div>
      ),
      background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    }
  ];

  return (
    <CardStack
      cards={cards}
      width={300}
      height={200}
      maxRotation={15}
      spacing={20}
    />
  );
}`;

const progressRingExampleCode = `import { ProgressRing } from "./components/ProgressRing";

export function Example() {
  return (
    <ProgressRing
      progress={75}
      size={120}
      color="#38bdf8"
      strokeWidth={8}
      showText
    />
  );
}`;

const socialMediaCardExampleCode = `import { SocialMediaCard } from "./components/SocialMediaCard";

export function Example() {
  return (
    <SocialMediaCard
      platform="twitter"
      username="designux"
      followers="10.5K"
      posts="245"
      verified
    />
  );
}`;

export const AttractiveComponentsPage = () => {
  const [progress, setProgress] = useState(65);

  const cards = [
    {
      title: "Premium",
      content: (
        <div>
          <h3 style={{ margin: 0, color: 'white', fontSize: 20 }}>Premium Plan</h3>
          <p style={{ margin: '8px 0 0', opacity: 0.8, fontSize: 14 }}>Unlock all features</p>
          <div style={{ marginTop: 12, display: 'flex', justifyContent: 'center' }}>
            <span style={{ fontSize: 24, fontWeight: 600 }}>$29/month</span>
          </div>
        </div>
      ),
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      title: "Pro",
      content: (
        <div>
          <h3 style={{ margin: 0, color: 'white', fontSize: 20 }}>Pro Plan</h3>
          <p style={{ margin: '8px 0 0', opacity: 0.8, fontSize: 14 }}>Advanced features</p>
          <div style={{ marginTop: 12, display: 'flex', justifyContent: 'center' }}>
            <span style={{ fontSize: 24, fontWeight: 600 }}>$19/month</span>
          </div>
        </div>
      ),
      background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      title: "Basic",
      content: (
        <div>
          <h3 style={{ margin: 0, color: 'white', fontSize: 20 }}>Basic Plan</h3>
          <p style={{ margin: '8px 0 0', opacity: 0.8, fontSize: 14 }}>Essential features</p>
          <div style={{ marginTop: 12, display: 'flex', justifyContent: 'center' }}>
            <span style={{ fontSize: 24, fontWeight: 600 }}>$9/month</span>
          </div>
        </div>
      ),
      background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    }
  ];

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <div>
        <Title level={2}>Attractive UI Components</Title>
        <Paragraph type="secondary">
          Visually appealing and interactive UI components designed for better user experience and engagement.
        </Paragraph>
      </div>

      {/* Card Stack Section */}
      <div>
        <Title level={3}>Card Stack</Title>
        <Paragraph type="secondary">
          A 3D card stack with smooth transitions and interactive animations for showcasing multiple items.
        </Paragraph>

        <Card title="Live preview">
          <div style={{ display: "flex", justifyContent: "center", padding: "24px 0" }}>
            <CardStack
              cards={cards}
              width={300}
              height={200}
              maxRotation={15}
              spacing={20}
            />
          </div>
        </Card>

        <Card title="Code" style={{ marginTop: 16 }}>
          <pre style={{ background: '#001529', padding: 16, borderRadius: 8, overflow: 'auto' }}>
            <code style={{ color: '#fff', fontSize: 13 }}>{cardStackExampleCode}</code>
          </pre>
        </Card>

        <Card title="Props" style={{ marginTop: 16 }}>
          <Space direction="vertical">
            <div>
              <Text code>cards</Text> <Text type="secondary">- Array, card data with content and styling</Text>
            </div>
            <div>
              <Text code>width</Text> <Text type="secondary">- Number, card width (default: 300)</Text>
            </div>
            <div>
              <Text code>height</Text> <Text type="secondary">- Number, card height (default: 200)</Text>
            </div>
            <div>
              <Text code>maxRotation</Text> <Text type="secondary">- Number, maximum rotation angle (default: 15)</Text>
            </div>
            <div>
              <Text code>spacing</Text> <Text type="secondary">- Number, spacing between cards (default: 20)</Text>
            </div>
            <div>
              <Text code>onCardClick</Text> <Text type="secondary">- Function, callback when card is clicked</Text>
            </div>
          </Space>
        </Card>
      </div>

      {/* Progress Ring Section */}
      <div style={{ marginTop: 24 }}>
        <Title level={3}>Progress Ring</Title>
        <Paragraph type="secondary">
          An animated circular progress indicator with gradient effects and sparkle animations.
        </Paragraph>

        <Card title="Live preview">
          <Space direction="horizontal" size="large" wrap>
            <ProgressRing
              progress={progress}
              size={120}
              color="#38bdf8"
              strokeWidth={8}
              showText
            />

            <ProgressRing
              progress={85}
              size={120}
              color="#10b981"
              strokeWidth={10}
              showText
              animate={false}
            />

            <ProgressRing
              progress={45}
              size={120}
              color="#f093fb"
              strokeWidth={6}
              showText
              textColor="#333"
            />
          </Space>

          <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 12 }}>
            <Text strong style={{ color: '#fff' }}>Progress: {progress}%</Text>
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={(e) => setProgress(parseInt(e.target.value))}
              style={{ flex: 1 }}
            />
          </div>
        </Card>

        <Card title="Code" style={{ marginTop: 16 }}>
          <pre style={{ background: '#001529', padding: 16, borderRadius: 8, overflow: 'auto' }}>
            <code style={{ color: '#fff', fontSize: 13 }}>{progressRingExampleCode}</code>
          </pre>
        </Card>

        <Card title="Props" style={{ marginTop: 16 }}>
          <Space direction="vertical">
            <div>
              <Text code>progress</Text> <Text type="secondary">- Number, progress percentage (0-100)</Text>
            </div>
            <div>
              <Text code>size</Text> <Text type="secondary">- Number, ring diameter (default: 100)</Text>
            </div>
            <div>
              <Text code>strokeWidth</Text> <Text type="secondary">- Number, stroke width (default: 8)</Text>
            </div>
            <div>
              <Text code>color</Text> <Text type="secondary">- String, progress color (default: "#38bdf8")</Text>
            </div>
            <div>
              <Text code>showText</Text> <Text type="secondary">- Boolean, shows progress text (default: true)</Text>
            </div>
            <div>
              <Text code>animate</Text> <Text type="secondary">- Boolean, enables animation (default: true)</Text>
            </div>
            <div>
              <Text code>duration</Text> <Text type="secondary">- Number, animation duration (default: 1000)</Text>
            </div>
          </Space>
        </Card>
      </div>

      {/* Social Media Card Section */}
      <div style={{ marginTop: 24 }}>
        <Title level={3}>Social Media Card</Title>
        <Paragraph type="secondary">
          A visually appealing social media profile card with platform-specific styling and animations.
        </Paragraph>

        <Card title="Live preview">
          <Space direction="horizontal" size="large" wrap>
            <SocialMediaCard
              platform="twitter"
              username="designux"
              followers="10.5K"
              posts="245"
              verified
            />

            <SocialMediaCard
              platform="instagram"
              username="photo_lovers"
              followers="25.3K"
              posts="482"
              verified
            />

            <SocialMediaCard
              platform="linkedin"
              username="tech_pro"
              followers="5.2K"
              posts="128"
            />
          </Space>
        </Card>

        <Card title="Code" style={{ marginTop: 16 }}>
          <pre style={{ background: '#001529', padding: 16, borderRadius: 8, overflow: 'auto' }}>
            <code style={{ color: '#fff', fontSize: 13 }}>{socialMediaCardExampleCode}</code>
          </pre>
        </Card>

        <Card title="Props" style={{ marginTop: 16 }}>
          <Space direction="vertical">
            <div>
              <Text code>platform</Text> <Text type="secondary">- "twitter" | "instagram" | "facebook" | "linkedin" | "youtube" | "tiktok"</Text>
            </div>
            <div>
              <Text code>username</Text> <Text type="secondary">- String, user display name</Text>
            </div>
            <div>
              <Text code>followers</Text> <Text type="secondary">- String, follower count</Text>
            </div>
            <div>
              <Text code>posts</Text> <Text type="secondary">- String, post count</Text>
            </div>
            <div>
              <Text code>avatar</Text> <Text type="secondary">- String, avatar image URL</Text>
            </div>
            <div>
              <Text code>cover</Text> <Text type="secondary">- String, cover image URL</Text>
            </div>
            <div>
              <Text code>verified</Text> <Text type="secondary">- Boolean, shows verified badge</Text>
            </div>
            <div>
              <Text code>hoverEffect</Text> <Text type="secondary">- Boolean, enables hover animation (default: true)</Text>
            </div>
          </Space>
        </Card>
      </div>
    </Space>
  );
};