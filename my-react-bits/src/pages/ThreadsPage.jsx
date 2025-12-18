import { Threads } from "../components/Threads";
import { Typography, Space, Card, Slider, Switch, ColorPicker, InputNumber } from "antd";
import { useState } from "react";

const { Title, Paragraph, Text } = Typography;

const threadsExampleCode = `import { Threads } from "./components/Threads";

<Threads
  color="#667eea"
  threadCount={20}
  speed={1}
  opacity={0.3}
  width={2}
  blendMode="screen"
/>`;

export const ThreadsPage = () => {
  const [color, setColor] = useState("#667eea");
  const [threadCount, setThreadCount] = useState(20);
  const [speed, setSpeed] = useState(1);
  const [opacity, setOpacity] = useState(0.3);
  const [width, setWidth] = useState(2);
  const [blendMode, setBlendMode] = useState("screen");

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <div>
        <Title level={2} style={{ 
         
          WebkitTextFillColor: 'transparent',
          fontWeight: 800
        }}>
          Threads
        </Title>
        <Paragraph type="secondary" style={{ fontSize: '16px', lineHeight: '1.6' }}>
          An animated background component with moving thread-like lines that create a dynamic, flowing pattern.
        </Paragraph>
      </div>

      {/* Demo Section */}
      <div>
        <Title level={3}>Interactive Demo</Title>
        <Paragraph type="secondary">
          Adjust the settings below to customize the thread animation.
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
            borderRadius: '0 0 8px 8px',
            position: 'relative',
            minHeight: '300px'
          }}
        >
          <div style={{ 
            minHeight: 300,
            background: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
            borderRadius: 8,
            border: '1px solid rgba(102, 126, 234, 0.3)',
            boxShadow: '0 8px 32px rgba(31, 38, 135, 0.3)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            position: 'relative'
          }}>
            <div style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%', 
              borderRadius: 8,
              overflow: 'hidden'
            }}>
              <Threads
                color={color}
                threadCount={threadCount}
                speed={speed}
                opacity={opacity}
                width={width}
                blendMode={blendMode}
              />
            </div>
            
            
          </div>
        </Card>
      </div>

      {/* Controls Section */}
      <Card 
       
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', flex: '1 1 200px' }}>
            <Text strong style={{ color: '#a0aec0', marginBottom: '8px' }}>Thread Color:</Text>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ColorPicker value={color} onChange={(value) => setColor(value.toHexString())} showText />
            </div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', flex: '1 1 200px' }}>
            <Text strong style={{ color: '#a0aec0', marginBottom: '8px' }}>Thread Count: {threadCount}</Text>
            <Slider
              min={5}
              max={50}
              step={1}
              value={threadCount}
              onChange={setThreadCount}
            />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', flex: '1 1 200px' }}>
            <Text strong style={{ color: '#a0aec0', marginBottom: '8px' }}>Speed: {speed.toFixed(1)}</Text>
            <Slider
              min={0.1}
              max={5}
              step={0.1}
              value={speed}
              onChange={setSpeed}
            />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', flex: '1 1 200px' }}>
            <Text strong style={{ color: '#a0aec0', marginBottom: '8px' }}>Opacity: {opacity.toFixed(2)}</Text>
            <Slider
              min={0}
              max={1}
              step={0.01}
              value={opacity}
              onChange={setOpacity}
            />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', flex: '1 1 200px' }}>
            <Text strong style={{ color: '#a0aec0', marginBottom: '8px' }}>Width: {width}px</Text>
            <Slider
              min={1}
              max={10}
              step={1}
              value={width}
              onChange={setWidth}
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
          <code style={{ color: '#fff', fontSize: 13 }}>{threadsExampleCode}</code>
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
            <Text code>color</Text> <Text type="secondary">- String, thread color (default: "#667eea")</Text>
          </div>
          <div>
            <Text code>threadCount</Text> <Text type="secondary">- Number, number of threads (default: 20)</Text>
          </div>
          <div>
            <Text code>speed</Text> <Text type="secondary">- Number, animation speed (default: 1)</Text>
          </div>
          <div>
            <Text code>opacity</Text> <Text type="secondary">- Number, thread opacity (default: 0.3)</Text>
          </div>
          <div>
            <Text code>width</Text> <Text type="secondary">- Number, thread width in pixels (default: 2)</Text>
          </div>
          <div>
            <Text code>blendMode</Text> <Text type="secondary">- String, CSS blend mode (default: "screen")</Text>
          </div>
          <div>
            <Text code>className</Text> <Text type="secondary">- String, additional CSS classes</Text>
          </div>
          <div>
            <Text code>style</Text> <Text type="secondary">- Object, additional styles</Text>
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
            <span style={{ fontSize: '20px', marginRight: '12px' }}>🧵</span>
            <span>Animated thread-like lines moving across the background</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '20px', marginRight: '12px' }}>🎨</span>
            <span>Fully customizable color, count, speed, and opacity</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '20px', marginRight: '12px' }}>⚡</span>
            <span>Pure CSS animations for optimal performance</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '20px', marginRight: '12px' }}>🌈</span>
            <span>Supports CSS blend modes for visual effects</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '20px', marginRight: '12px' }}>📱</span>
            <span>Responsive and works on all screen sizes</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '20px', marginRight: '12px' }}>🧩</span>
            <span>Easy to integrate with any React component</span>
          </div>
        </Space>
      </Card>
    </Space>
  );
};