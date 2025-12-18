import { CurvedLoop } from "../components/CurvedLoop";
import { Typography, Space, Card } from "antd";

const { Title, Paragraph, Text } = Typography;

const curvedLoopExampleCode = `import { CurvedLoop } from "./components/CurvedLoop";

export function Example() {
  return (
    <CurvedLoop
      size={150}
      color="#667eea"
      thickness={4}
      duration={2}
      glow={true}
    />
  );
}`;

const curvedLoopWithContentCode = `import { CurvedLoop } from "./components/CurvedLoop";

export function Example() {
  return (
    <CurvedLoop
      size={200}
      color="#38bdf8"
      thickness={6}
      duration={3}
      glow={true}
    >
      <div style={{ color: "#fff", fontSize: 16, fontWeight: 600 }}>
        Loading
      </div>
    </CurvedLoop>
  );
}`;

export const CurvedLoopPage = () => {
  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <div>
        <Title level={2} style={{ 
          background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 800
        }}>
          Curved Loop
        </Title>
        <Paragraph type="secondary" style={{ fontSize: '16px', lineHeight: '1.6' }}>
          An elegant animated curved loop component with SVG-based path animation and moving dot effect. Perfect for loading states, decorative elements, or visual feedback.
        </Paragraph>
      </div>

      {/* Basic Example Section */}
      <div>
        <Title level={3}>Basic Curved Loop</Title>
        <Paragraph type="secondary">
          A simple curved loop animation with default settings.
        </Paragraph>

        <Card 
          title="Live preview" 
          headStyle={{ 
            background: 'linear-gradient(90deg, #1a1a2e 0%, #16213e 100%)',
            color: 'white',
            fontWeight: 600
          }}
          bodyStyle={{ 
            background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.8) 0%, rgba(22, 33, 62, 0.9) 100%)',
            borderRadius: '0 0 8px 8px'
          }}
        >
          <div style={{ 
            padding: "40px", 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center",
            minHeight: 250,
            background: "rgba(0, 0, 0, 0.3)",
            borderRadius: 8,
            border: '1px solid rgba(102, 126, 234, 0.3)',
            boxShadow: '0 8px 32px rgba(31, 38, 135, 0.2)'
          }}>
            <CurvedLoop
              size={180}
              color="#667eea"
              thickness={5}
              duration={2.5}
              glow={true}
            />
          </div>
        </Card>

        <Card title="Code" style={{ marginTop: 16 }}>
          <pre style={{ background: '#001529', padding: 16, borderRadius: 8, overflow: 'auto' }}>
            <code style={{ color: '#fff', fontSize: 13 }}>{curvedLoopExampleCode}</code>
          </pre>
        </Card>
      </div>

      {/* Variations Section */}
      <div style={{ marginTop: 24 }}>
        <Title level={3}>Variations</Title>
        <Paragraph type="secondary">
          Different sizes, colors, and animation speeds.
        </Paragraph>

        <Card 
          title="Variations" 
          headStyle={{ 
            background: 'linear-gradient(90deg, #1a1a2e 0%, #16213e 100%)',
            color: 'white',
            fontWeight: 600
          }}
          bodyStyle={{ 
            background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.8) 0%, rgba(22, 33, 62, 0.9) 100%)',
            borderRadius: '0 0 8px 8px'
          }}
        >
          <Space direction="horizontal" size="large" wrap style={{ 
            padding: "30px", 
            display: "flex", 
            justifyContent: "center",
            alignItems: "center"
          }}>
            <div style={{ textAlign: "center", padding: "20px" }}>
              <CurvedLoop
                size={100}
                color="#10b981"
                thickness={3}
                duration={1.5}
                glow={true}
              />
              <div style={{ marginTop: 12, color: "#a0aec0", fontWeight: 600 }}>Fast & Small</div>
            </div>

            <div style={{ textAlign: "center", padding: "20px" }}>
              <CurvedLoop
                size={150}
                color="#f093fb"
                thickness={5}
                duration={2.5}
                glow={true}
              />
              <div style={{ marginTop: 12, color: "#a0aec0", fontWeight: 600 }}>Medium</div>
            </div>

            <div style={{ textAlign: "center", padding: "20px" }}>
              <CurvedLoop
                size={200}
                color="#f5576c"
                thickness={6}
                duration={3}
                glow={true}
              />
              <div style={{ marginTop: 12, color: "#a0aec0", fontWeight: 600 }}>Large & Slow</div>
            </div>
          </Space>
        </Card>
      </div>

      {/* With Content Section */}
      <div style={{ marginTop: 24 }}>
        <Title level={3}>With Content</Title>
        <Paragraph type="secondary">
          Display content in the center of the curved loop.
        </Paragraph>

        <Card 
          title="With Content" 
          headStyle={{ 
            background: 'linear-gradient(90deg, #1a1a2e 0%, #16213e 100%)',
            color: 'white',
            fontWeight: 600
          }}
          bodyStyle={{ 
            background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.8) 0%, rgba(22, 33, 62, 0.9) 100%)',
            borderRadius: '0 0 8px 8px'
          }}
        >
          <div style={{ 
            padding: "40px", 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center",
            minHeight: 300,
            background: "rgba(0, 0, 0, 0.3)",
            borderRadius: 8,
            border: '1px solid rgba(56, 189, 248, 0.3)',
            boxShadow: '0 8px 32px rgba(31, 38, 135, 0.3)'
          }}>
            <CurvedLoop
              size={220}
              color="#38bdf8"
              thickness={6}
              duration={3}
              glow={true}
            >
              <div style={{ 
                color: "#fff", 
                fontSize: 18, 
                fontWeight: 700,
                textAlign: "center",
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
              }}>
                Loading...
              </div>
            </CurvedLoop>
          </div>
        </Card>

        <Card title="Code" style={{ marginTop: 16 }}>
          <pre style={{ background: '#001529', padding: 16, borderRadius: 8, overflow: 'auto' }}>
            <code style={{ color: '#fff', fontSize: 13 }}>{curvedLoopWithContentCode}</code>
          </pre>
        </Card>
      </div>

      {/* Props Documentation */}
      <Card 
          title="Props" 
          style={{ marginTop: 24 }}
          headStyle={{ 
            background: 'linear-gradient(90deg, #1a1a2e 0%, #16213e 100%)',
            color: 'white',
            fontWeight: 600
          }}
          bodyStyle={{ 
            background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.8) 0%, rgba(22, 33, 62, 0.9) 100%)',
            borderRadius: '0 0 8px 8px'
          }}
        >
        <Space direction="vertical">
          <div>
            <Text code>size</Text> <Text type="secondary">- Number, width and height of the component in pixels (default: 100)</Text>
          </div>
          <div>
            <Text code>color</Text> <Text type="secondary">- String, color of the loop and dot (default: "#667eea")</Text>
          </div>
          <div>
            <Text code>thickness</Text> <Text type="secondary">- Number, stroke thickness (default: 4)</Text>
          </div>
          <div>
            <Text code>duration</Text> <Text type="secondary">- Number, animation duration in seconds (default: 2)</Text>
          </div>
          <div>
            <Text code>glow</Text> <Text type="secondary">- Boolean, enable/disable glow effect (default: true)</Text>
          </div>
          <div>
            <Text code>children</Text> <Text type="secondary">- React node, optional content to display in the center</Text>
          </div>
        </Space>
      </Card>

      {/* Features Section */}
      <Card 
          title="Features" 
          style={{ marginTop: 16 }}
          headStyle={{ 
            background: 'linear-gradient(90deg, #1a1a2e 0%, #16213e 100%)',
            color: 'white',
            fontWeight: 600
          }}
          bodyStyle={{ 
            background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.8) 0%, rgba(22, 33, 62, 0.9) 100%)',
            borderRadius: '0 0 8px 8px'
          }}
        >
        <Space direction="vertical" size="middle">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '20px', marginRight: '12px' }}>✨</span>
            <span>Smooth curved path animation with infinity-loop style shape</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '20px', marginRight: '12px' }}>🎨</span>
            <span>Gradient effect on the loop for visual depth</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '20px', marginRight: '12px' }}>🌟</span>
            <span>Glow effect for enhanced visual appeal</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '20px', marginRight: '12px' }}>🔄</span>
            <span>Rotating and scaling animation for dynamic effect</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '20px', marginRight: '12px' }}>🎯</span>
            <span>Moving dot that follows the curved path with pulsing effect</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '20px', marginRight: '12px' }}>🎭</span>
            <span>Customizable size, color, thickness, duration, and glow</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '20px', marginRight: '12px' }}>📦</span>
            <span>Optional content display in the center</span>
          </div>
        </Space>
      </Card>
    </Space>
  );
};
