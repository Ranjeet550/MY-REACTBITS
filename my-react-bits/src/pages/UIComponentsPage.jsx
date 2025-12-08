import { useState } from "react";
import { Badge } from "../components/Badge";
import { Avatar } from "../components/Avatar";
import { Tooltip } from "../components/Tooltip";
import { Modal } from "../components/Modal";
import { Button } from "../components/Button";
import { Typography, Space, Card as AntCard, Row, Col, Divider, Button as AntButton } from "antd";

const { Title, Paragraph, Text } = Typography;

const code = `import { Badge, Avatar, Tooltip, Modal } from "./components";

<Badge variant="primary">New</Badge>
<Badge variant="success">Active</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="error">Error</Badge>

<Avatar fallback="AB" size={40} />

<Tooltip content="This is a tooltip" position="top">
  <Button>Hover me</Button>
</Tooltip>

<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Modal Title">
  <p>Modal content goes here</p>
</Modal>`;

export const UIComponentsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <div>
        <Title level={2}>UI Components</Title>
        <Paragraph type="secondary">
          Essential UI elements for building modern interfaces.
        </Paragraph>
      </div>

      <AntCard title="Badges" size="large">
        <Space size="middle" wrap>
          <Badge variant="default">Default</Badge>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
        </Space>
      </AntCard>

      <AntCard title="Avatars" size="large">
        <Space size="large">
          <Avatar fallback="AB" size={40} />
          <Avatar fallback="CD" size={50} />
          <Avatar fallback="EF" size={60} />
        </Space>
      </AntCard>

      <AntCard title="Tooltips" size="large">
        <Space size="middle" wrap>
          <Tooltip content="Tooltip on top" position="top">
            <Button variant="ghost">Hover Top</Button>
          </Tooltip>
          <Tooltip content="Tooltip on bottom" position="bottom">
            <Button variant="ghost">Hover Bottom</Button>
          </Tooltip>
          <Tooltip content="Tooltip on left" position="left">
            <Button variant="ghost">Hover Left</Button>
          </Tooltip>
          <Tooltip content="Tooltip on right" position="right">
            <Button variant="ghost">Hover Right</Button>
          </Tooltip>
        </Space>
      </AntCard>

      <AntCard title="Modal" size="large">
        <Space direction="vertical">
          <Text type="secondary">Click the button to open a modal dialog</Text>
          <Button variant="primary" onClick={() => setIsModalOpen(true)}>
            Open Modal
          </Button>
        </Space>
      </AntCard>

      <Divider />

      <AntCard title="Code Example">
        <pre style={{ background: '#001529', padding: 16, borderRadius: 8, overflow: 'auto', margin: 0 }}>
          <code style={{ color: '#fff', fontSize: 13 }}>{code}</code>
        </pre>
      </AntCard>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Example Modal"
      >
        <p style={{ color: '#9ca3af', marginBottom: 16 }}>
          This is an example modal dialog. You can put any content here.
        </p>
        <Button variant="primary" onClick={() => setIsModalOpen(false)}>
          Close Modal
        </Button>
      </Modal>
    </Space>
  );
};
