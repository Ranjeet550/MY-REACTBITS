import { ToggleSwitch } from "../components/ToggleSwitch";
import { Stepper } from "../components/Stepper";
import { Typography, Space, Card } from "antd";
import { useState } from "react";

const { Title, Paragraph, Text } = Typography;

const toggleSwitchExampleCode = `import { ToggleSwitch } from "./components/ToggleSwitch";
import { useState } from "react";

export function Example() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div>
      <ToggleSwitch
        checked={isToggled}
        onChange={setIsToggled}
        size="medium"
        onColor="#38bdf8"
        offColor="#4b5563"
        onText="ON"
        offText="OFF"
      />
    </div>
  );
}`;

const stepperExampleCode = `import { Stepper } from "./components/Stepper";
import { useState } from "react";

export function Example() {
  const [value, setValue] = useState(0);

  return (
    <div>
      <Stepper
        value={value}
        onChange={setValue}
        min={0}
        max={10}
        step={1}
        size="medium"
      />
    </div>
  );
}`;

export const ToggleStepperPage = () => {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(true);
  const [toggle3, setToggle3] = useState(false);

  const [stepper1, setStepper1] = useState(5);
  const [stepper2, setStepper2] = useState(0);
  const [stepper3, setStepper3] = useState(10);

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <div>
        <Title level={2}>Toggle Switch & Stepper</Title>
        <Paragraph type="secondary">
          Interactive toggle switch and stepper components for boolean and numeric inputs.
        </Paragraph>
      </div>

      {/* Toggle Switch Section */}
      <div>
        <Title level={3}>Toggle Switch</Title>

        <Card title="Live preview">
          <Space direction="vertical" size="large">
            <div>
              <Text strong style={{ color: '#fff', display: 'block', marginBottom: 8 }}>
                Basic Toggle Switch
              </Text>
              <ToggleSwitch
                checked={toggle1}
                onChange={setToggle1}
                size="medium"
                onText="ON"
                offText="OFF"
              />
              <div style={{ marginTop: 8, color: '#9ca3af', fontSize: 12 }}>
                State: {toggle1 ? "ON" : "OFF"}
              </div>
            </div>

            <div>
              <Text strong style={{ color: '#fff', display: 'block', marginBottom: 8 }}>
                Custom Colors
              </Text>
              <ToggleSwitch
                checked={toggle2}
                onChange={setToggle2}
                size="medium"
                onColor="#f093fb"
                offColor="#6b7280"
                onText="YES"
                offText="NO"
              />
              <div style={{ marginTop: 8, color: '#9ca3af', fontSize: 12 }}>
                State: {toggle2 ? "YES" : "NO"}
              </div>
            </div>

            <div>
              <Text strong style={{ color: '#fff', display: 'block', marginBottom: 8 }}>
                Different Sizes
              </Text>
              <Space>
                <ToggleSwitch
                  checked={toggle3}
                  onChange={setToggle3}
                  size="small"
                />
                <ToggleSwitch
                  checked={toggle3}
                  onChange={setToggle3}
                  size="medium"
                />
                <ToggleSwitch
                  checked={toggle3}
                  onChange={setToggle3}
                  size="large"
                />
              </Space>
              <div style={{ marginTop: 8, color: '#9ca3af', fontSize: 12 }}>
                State: {toggle3 ? "ON" : "OFF"}
              </div>
            </div>
          </Space>
        </Card>

        <Card title="Code" style={{ marginTop: 16 }}>
          <pre style={{ background: '#001529', padding: 16, borderRadius: 8, overflow: 'auto' }}>
            <code style={{ color: '#fff', fontSize: 13 }}>{toggleSwitchExampleCode}</code>
          </pre>
        </Card>

        <Card title="Props" style={{ marginTop: 16 }}>
          <Space direction="vertical">
            <div>
              <Text code>checked</Text> <Text type="secondary">- Boolean, toggle state</Text>
            </div>
            <div>
              <Text code>onChange</Text> <Text type="secondary">- Function, callback when toggle changes</Text>
            </div>
            <div>
              <Text code>size</Text> <Text type="secondary">- "small" | "medium" | "large" (default: "medium")</Text>
            </div>
            <div>
              <Text code>disabled</Text> <Text type="secondary">- Boolean, disables the toggle (default: false)</Text>
            </div>
            <div>
              <Text code>onColor</Text> <Text type="secondary">- String, color when ON (default: "#38bdf8")</Text>
            </div>
            <div>
              <Text code>offColor</Text> <Text type="secondary">- String, color when OFF (default: "#4b5563")</Text>
            </div>
            <div>
              <Text code>onText</Text> <Text type="secondary">- String, text when ON</Text>
            </div>
            <div>
              <Text code>offText</Text> <Text type="secondary">- String, text when OFF</Text>
            </div>
          </Space>
        </Card>
      </div>

      {/* Stepper Section */}
      <div style={{ marginTop: 24 }}>
        <Title level={3}>Stepper</Title>

        <Card title="Live preview">
          <Space direction="vertical" size="large">
            <div>
              <Text strong style={{ color: '#fff', display: 'block', marginBottom: 8 }}>
                Basic Stepper
              </Text>
              <Stepper
                value={stepper1}
                onChange={setStepper1}
                min={0}
                max={10}
                step={1}
                size="medium"
              />
              <div style={{ marginTop: 8, color: '#9ca3af', fontSize: 12 }}>
                Value: {stepper1}
              </div>
            </div>

            <div>
              <Text strong style={{ color: '#fff', display: 'block', marginBottom: 8 }}>
                Stepper with Custom Range
              </Text>
              <Stepper
                value={stepper2}
                onChange={setStepper2}
                min={-10}
                max={10}
                step={0.5}
                size="medium"
              />
              <div style={{ marginTop: 8, color: '#9ca3af', fontSize: 12 }}>
                Value: {stepper2}
              </div>
            </div>

            <div>
              <Text strong style={{ color: '#fff', display: 'block', marginBottom: 8 }}>
                Different Sizes
              </Text>
              <Space direction="vertical">
                <Stepper
                  value={stepper3}
                  onChange={setStepper3}
                  min={0}
                  max={20}
                  size="small"
                />
                <Stepper
                  value={stepper3}
                  onChange={setStepper3}
                  min={0}
                  max={20}
                  size="medium"
                />
                <Stepper
                  value={stepper3}
                  onChange={setStepper3}
                  min={0}
                  max={20}
                  size="large"
                />
              </Space>
              <div style={{ marginTop: 8, color: '#9ca3af', fontSize: 12 }}>
                Value: {stepper3}
              </div>
            </div>
          </Space>
        </Card>

        <Card title="Code" style={{ marginTop: 16 }}>
          <pre style={{ background: '#001529', padding: 16, borderRadius: 8, overflow: 'auto' }}>
            <code style={{ color: '#fff', fontSize: 13 }}>{stepperExampleCode}</code>
          </pre>
        </Card>

        <Card title="Props" style={{ marginTop: 16 }}>
          <Space direction="vertical">
            <div>
              <Text code>value</Text> <Text type="secondary">- Number, current value</Text>
            </div>
            <div>
              <Text code>onChange</Text> <Text type="secondary">- Function, callback when value changes</Text>
            </div>
            <div>
              <Text code>min</Text> <Text type="secondary">- Number, minimum value (default: 0)</Text>
            </div>
            <div>
              <Text code>max</Text> <Text type="secondary">- Number, maximum value (default: 100)</Text>
            </div>
            <div>
              <Text code>step</Text> <Text type="secondary">- Number, increment/decrement step (default: 1)</Text>
            </div>
            <div>
              <Text code>size</Text> <Text type="secondary">- "small" | "medium" | "large" (default: "medium")</Text>
            </div>
            <div>
              <Text code>disabled</Text> <Text type="secondary">- Boolean, disables the stepper (default: false)</Text>
            </div>
            <div>
              <Text code>showButtons</Text> <Text type="secondary">- Boolean, shows increment/decrement buttons (default: true)</Text>
            </div>
            <div>
              <Text code>showInput</Text> <Text type="secondary">- Boolean, shows numeric input (default: true)</Text>
            </div>
          </Space>
        </Card>
      </div>
    </Space>
  );
};