import { Typography, Space } from "antd";
import { Accordion } from "../components/Accordion";
import { CodeBlock } from "../components/CodeBlock";

const { Title, Paragraph } = Typography;

export const AccordionPage = () => {
  const accordionItems = [
    {
      title: "What is React?",
      content: "React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called components."
    },
    {
      title: "Why use React?",
      content: "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."
    },
    {
      title: "What are React Hooks?",
      content: "Hooks are functions that let you use state and other React features without writing a class. They let you use state and lifecycle methods inside functional components."
    }
  ];

  const codeExample = `import { Accordion } from './components/Accordion';

const items = [
  {
    title: "What is React?",
    content: "React is a JavaScript library..."
  },
  {
    title: "Why use React?",
    content: "React makes it painless..."
  }
];

<Accordion items={items} />

// Allow multiple panels open
<Accordion items={items} allowMultiple={true} />`;

  return (
    <div>
      <Title level={2}>Accordion</Title>
      <Paragraph>
        Collapsible content panels for organizing information in a compact space.
      </Paragraph>

      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <div>
          <Title level={4}>Basic Accordion</Title>
          <Accordion items={accordionItems} />
        </div>

        <div>
          <Title level={4}>Multiple Open</Title>
          <Accordion items={accordionItems} allowMultiple={true} />
        </div>

        <div>
          <Title level={4}>Usage</Title>
          <CodeBlock code={codeExample} language="jsx" />
        </div>
      </Space>
    </div>
  );
};
