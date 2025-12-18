import { FallingText } from "../components/FallingText";
import { Typography, Space, Card, Select, Slider, Switch } from "antd";
import { useState } from "react";

const { Title, Paragraph, Text } = Typography;

const fallingTextExampleCode = `import { FallingText } from "./components/FallingText";

<FallingText
  color="red"
  fontSize={32}
  animationDuration={1.5}
  fallDistance={100}
>
  React Bits is a library of animated and interactive React components
</FallingText>`;

export const FallingTextPage = () => {
  const [trigger, setTrigger] = useState("auto");
  const [gravity, setGravity] = useState(1);
  const [fontSize, setFontSize] = useState("1.5rem");
  const [wireframes, setWireframes] = useState(false);

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <div>
        <Title level={2} style={{ 
          
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 800
        }}>
          Falling Text
        </Title>
        <Paragraph type="secondary" style={{ fontSize: '16px', lineHeight: '1.6' }}>
          A physics-based text animation component that makes words fall and interact with each other using the Matter.js physics engine.
        </Paragraph>
      </div>

      {/* Demo Section */}
      <div>
        <Title level={3}>Interactive Demo</Title>
        <Paragraph type="secondary">
          Adjust the settings below to see how the physics-based text animation behaves.
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
            minHeight: 300,
            background: "rgba(0, 0, 0, 0.3)",
            borderRadius: 8,
            border: '1px solid rgba(102, 126, 234, 0.3)',
            boxShadow: '0 8px 32px rgba(31, 38, 135, 0.3)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}>
            <FallingText
              color="#667eea"
              fontSize={parseInt(fontSize) * 10}
              animationDuration={2 - gravity * 0.5}
              fallDistance={gravity * 50}
            >
              React Bits is a library of animated and interactive React components designed to streamline UI development and simplify your workflow.
            </FallingText>
          </div>
        </Card>
      </div>

      {/* Controls Section */}
      <Card 
        title="Controls" 
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
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', flex: '1 1 200px' }}>
            <Text strong style={{ color: '#a0aec0', marginBottom: '8px' }}>Trigger Method:</Text>
            <Select
              defaultValue="auto"
              onChange={setTrigger}
              options={[
                { value: 'auto', label: 'Auto' },
                { value: 'hover', label: 'Hover' },
                { value: 'click', label: 'Click' },
                { value: 'scroll', label: 'Scroll' }
              ]}
            />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', flex: '1 1 200px' }}>
            <Text strong style={{ color: '#a0aec0', marginBottom: '8px' }}>Gravity: {gravity.toFixed(2)}</Text>
            <Slider
              min={0}
              max={2}
              step={0.1}
              defaultValue={gravity}
              onChange={setGravity}
            />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', flex: '1 1 150px' }}>
            <Text strong style={{ color: '#a0aec0', marginBottom: '8px' }}>Font Size:</Text>
            <Select
              defaultValue="1.5rem"
              onChange={setFontSize}
              options={[
                { value: '1rem', label: 'Small' },
                { value: '1.5rem', label: 'Medium' },
                { value: '2rem', label: 'Large' },
                { value: '2.5rem', label: 'X-Large' }
              ]}
            />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', flex: '1 1 150px' }}>
            <Text strong style={{ color: '#a0aec0', marginBottom: '8px' }}>Wireframes:</Text>
            <Switch 
              checked={wireframes} 
              onChange={setWireframes} 
            />
          </div>
        </div>
      </Card>

      {/* Code Example */}
      <Card 
        title="Code Example" 
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
        <pre style={{ background: '#001529', padding: 16, borderRadius: 8, overflow: 'auto' }}>
          <code style={{ color: '#fff', fontSize: 13 }}>{fallingTextExampleCode}</code>
        </pre>
      </Card>

      {/* Props Documentation */}
      <Card 
        title="Props" 
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
            <Text code>children</Text> <Text type="secondary">- String, the text to animate (required)</Text>
          </div>
          <div>
            <Text code>color</Text> <Text type="secondary">- String, text color (default: "#667eea")</Text>
          </div>
          <div>
            <Text code>fontSize</Text> <Text type="secondary">- Number, font size in pixels (default: 32)</Text>
          </div>
          <div>
            <Text code>fontWeight</Text> <Text type="secondary">- Number, font weight (default: 700)</Text>
          </div>
          <div>
            <Text code>animationDuration</Text> <Text type="secondary">- Number, animation duration in seconds (default: 1.5)</Text>
          </div>
          <div>
            <Text code>staggerDelay</Text> <Text type="secondary">- Number, delay between character animations (default: 0.05)</Text>
          </div>
          <div>
            <Text code>fallDistance</Text> <Text type="secondary">- Number, distance characters fall (default: 100)</Text>
          </div>
          <div>
            <Text code>opacity</Text> <Text type="secondary">- Number, text opacity (default: 1)</Text>
          </div>
        </Space>
      </Card>

      {/* Features Section */}
      <Card 
        title="Features" 
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
            <span style={{ fontSize: '20px', marginRight: '12px' }}>🔬</span>
            <span>Physics-based animation using Matter.js engine</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '20px', marginRight: '12px' }}>🎯</span>
            <span>Interactive word physics with collision detection</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '20px', marginRight: '12px' }}>🎮</span>
            <span>Mouse interaction with adjustable stiffness</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '20px', marginRight: '12px' }}>⚡</span>
            <span>Multiple trigger modes: auto, hover, click, scroll</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '20px', marginRight: '12px' }}>🎨</span>
            <span>Customizable gravity, font size, and visual styles</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '20px', marginRight: '12px' }}>✨</span>
            <span>Word highlighting capability for emphasis</span>
          </div>
        </Space>
      </Card>
    </Space>
  );
};