import { ColorPicker } from "../components/ColorPicker";
import { Typography, Space, Card } from "antd";
import { useState } from "react";

const { Title, Paragraph, Text } = Typography;

const colorPickerExampleCode = `import { ColorPicker } from "./components/ColorPicker";
import { useState } from "react";

export function Example() {
  const [color, setColor] = useState("#38bdf8");

  return (
    <div>
      <ColorPicker
        value={color}
        onChange={setColor}
        showAlpha
        width={200}
        height={150}
      />
      <div style={{ marginTop: 16, color: '#fff' }}>
        Selected color: {color}
      </div>
    </div>
  );
}`;

export const ColorPickerPage = () => {
  const [color1, setColor1] = useState("#38bdf8");
  const [color2, setColor2] = useState("#667eea");
  const [color3, setColor3] = useState("#f093fb");

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <div>
        <Title level={2}>ColorPicker</Title>
        <Paragraph type="secondary">
          An advanced color picker component with HSL color model, alpha channel support, and real-time preview.
        </Paragraph>
      </div>

      <div>
        <Title level={4}>Usage</Title>
        <Paragraph type="secondary">
          Use the color picker for color selection in design tools, theme customization, or any application requiring color input.
        </Paragraph>

        <Card title="Live preview">
          <Space direction="horizontal" size="large" wrap>
            <div>
              <Text strong style={{ color: '#fff', display: 'block', marginBottom: 8 }}>
                Basic Color Picker
              </Text>
              <ColorPicker
                value={color1}
                onChange={setColor1}
                width={200}
                height={150}
              />
              <div style={{ marginTop: 8, color: '#9ca3af', fontSize: 12 }}>
                {color1.toUpperCase()}
              </div>
            </div>

            <div>
              <Text strong style={{ color: '#fff', display: 'block', marginBottom: 8 }}>
                Color Picker with Alpha
              </Text>
              <ColorPicker
                value={color2}
                onChange={setColor2}
                showAlpha
                width={200}
                height={150}
              />
              <div style={{ marginTop: 8, color: '#9ca3af', fontSize: 12 }}>
                {color2.toUpperCase()}
              </div>
            </div>

            <div>
              <Text strong style={{ color: '#fff', display: 'block', marginBottom: 8 }}>
                Compact Color Picker
              </Text>
              <ColorPicker
                value={color3}
                onChange={setColor3}
                width={150}
                height={120}
              />
              <div style={{ marginTop: 8, color: '#9ca3af', fontSize: 12 }}>
                {color3.toUpperCase()}
              </div>
            </div>
          </Space>
        </Card>

        <Card title="Code" style={{ marginTop: 16 }}>
          <pre style={{ background: '#001529', padding: 16, borderRadius: 8, overflow: 'auto' }}>
            <code style={{ color: '#fff', fontSize: 13 }}>{colorPickerExampleCode}</code>
          </pre>
        </Card>
      </div>

      <div>
        <Title level={4}>Props</Title>
        <Card>
          <Space direction="vertical">
            <div>
              <Text code>value</Text> <Text type="secondary">- String, current color value (hex, rgb, hsl)</Text>
            </div>
            <div>
              <Text code>onChange</Text> <Text type="secondary">- Function, callback when color changes</Text>
            </div>
            <div>
              <Text code>showAlpha</Text> <Text type="secondary">- Boolean, shows alpha/transparency slider (default: false)</Text>
            </div>
            <div>
              <Text code>width</Text> <Text type="secondary">- Number, picker width in pixels (default: 200)</Text>
            </div>
            <div>
              <Text code>height</Text> <Text type="secondary">- Number, picker height in pixels (default: 150)</Text>
            </div>
          </Space>
        </Card>
      </div>
    </Space>
  );
};