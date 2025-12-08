import { useState } from "react";
import { AnimatedInput } from "../components/AnimatedInput";
import { Typography, Space, Card } from "antd";

const { Title, Paragraph, Text } = Typography;

const basicExampleCode = `import { AnimatedInput } from "./components/AnimatedInput";

export function Example() {
  return (
    <AnimatedInput 
      label="Email" 
      type="email" 
      placeholder="Enter your email"
    />
  );
}`;

const fullExampleCode = `import { useState } from "react";
import { AnimatedInput } from "./components/AnimatedInput";

export function Example() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    message: ""
  });

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <AnimatedInput 
        label="Full Name" 
        type="text"
        value={formData.name}
        onChange={handleChange("name")}
      />
      <AnimatedInput 
        label="Email Address" 
        type="email"
        value={formData.email}
        onChange={handleChange("email")}
      />
      <AnimatedInput 
        label="Password" 
        type="password"
        value={formData.password}
        onChange={handleChange("password")}
      />
      <AnimatedInput 
        label="Message" 
        type="text"
        value={formData.message}
        onChange={handleChange("message")}
      />
    </div>
  );
}`;

export const InputsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    message: ""
  });

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <div>
        <Title level={2}>Animated Input</Title>
        <Paragraph type="secondary">
          A floating label input component with smooth animations and focus states.
        </Paragraph>
      </div>

      <div>
        <Title level={4}>Basic Usage</Title>
        <Paragraph type="secondary">
          The animated input features a floating label that moves up when focused or filled.
        </Paragraph>

        <Card title="Live preview">
          <div style={{ maxWidth: 400 }}>
            <AnimatedInput 
              label="Email" 
              type="email" 
              placeholder="Enter your email"
            />
          </div>
        </Card>

        <Card title="Code" style={{ marginTop: 16 }}>
          <pre style={{ background: '#001529', padding: 16, borderRadius: 8, overflow: 'auto' }}>
            <code style={{ color: '#fff', fontSize: 13 }}>{basicExampleCode}</code>
          </pre>
        </Card>
      </div>

      <div>
        <Title level={4}>Form Example</Title>
        <Paragraph type="secondary">
          Multiple animated inputs working together in a form.
        </Paragraph>

        <Card title="Live preview">
          <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 400 }}>
            <AnimatedInput 
              label="Full Name" 
              type="text"
              value={formData.name}
              onChange={handleChange("name")}
            />
            <AnimatedInput 
              label="Email Address" 
              type="email"
              value={formData.email}
              onChange={handleChange("email")}
            />
            <AnimatedInput 
              label="Password" 
              type="password"
              value={formData.password}
              onChange={handleChange("password")}
            />
            <AnimatedInput 
              label="Message" 
              type="text"
              value={formData.message}
              onChange={handleChange("message")}
            />
          </div>
        </Card>

        <Card title="Code" style={{ marginTop: 16 }}>
          <pre style={{ background: '#001529', padding: 16, borderRadius: 8, overflow: 'auto' }}>
            <code style={{ color: '#fff', fontSize: 13 }}>{fullExampleCode}</code>
          </pre>
        </Card>
      </div>

      <div>
        <Title level={4}>Props</Title>
        <Card>
          <ul>
            <li>
              <Text code>label</Text> - String - The floating label text for the input
            </li>
            <li>
              <Text code>type</Text> - String - HTML input type (text, email, password, etc.)
            </li>
            <li>
              <Text code>placeholder</Text> - String - Placeholder text (optional)
            </li>
            <li>
              <Text code>value</Text> - String - Controlled input value
            </li>
            <li>
              <Text code>onChange</Text> - Function - Change event handler
            </li>
            <li>
              <Text code>onFocus</Text> - Function - Focus event handler
            </li>
            <li>
              <Text code>onBlur</Text> - Function - Blur event handler
            </li>
            <li>
              <Text code>style</Text> - Object - Custom styles for the input element
            </li>
            <li>
              <Text code>...rest</Text> - All standard input HTML attributes
            </li>
          </ul>
        </Card>
      </div>

      <div>
        <Title level={4}>Features</Title>
        <Card>
          <ul>
            <li>Floating label animation on focus and when input has value</li>
            <li>Smooth color transitions for border and label</li>
            <li>Dark theme optimized with cyan accent color</li>
            <li>Fully accessible with proper focus states</li>
            <li>Supports all standard HTML input attributes</li>
          </ul>
        </Card>
      </div>
    </Space>
  );
};
