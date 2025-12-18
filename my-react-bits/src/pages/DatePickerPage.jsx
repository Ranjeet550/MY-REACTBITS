import { DatePicker } from "../components/DatePicker";
import { Typography, Space, Card } from "antd";
import { useState } from "react";

const { Title, Paragraph, Text } = Typography;

const datePickerExampleCode = `import { DatePicker } from "./components/DatePicker";
import { useState } from "react";

export function Example() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div>
      <DatePicker
        value={selectedDate}
        onChange={setSelectedDate}
        placeholder="Select a date"
      />
      {selectedDate && (
        <div style={{ marginTop: 16, color: '#fff' }}>
          Selected: {selectedDate.toLocaleDateString()}
        </div>
      )}
    </div>
  );
}`;

export const DatePickerPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDateRange, setSelectedDateRange] = useState(null);

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <div>
        <Title level={2}>DatePicker</Title>
        <Paragraph type="secondary">
          A customizable date picker component with calendar dropdown.
        </Paragraph>
      </div>

      <div>
        <Title level={4}>Usage</Title>
        <Paragraph type="secondary">
          Use the date picker for form inputs where date selection is required.
        </Paragraph>

        <Card title="Live preview">
          <Space direction="vertical" size="large">
            <div>
              <Text strong style={{ color: '#fff' }}>Basic DatePicker</Text>
              <div style={{ marginTop: 8 }}>
                <DatePicker
                  value={selectedDate}
                  onChange={setSelectedDate}
                  placeholder="Select a date"
                />
              </div>
              {selectedDate && (
                <div style={{ marginTop: 8, color: '#9ca3af', fontSize: 13 }}>
                  Selected: {selectedDate.toLocaleDateString()}
                </div>
              )}
            </div>

            <div>
              <Text strong style={{ color: '#fff' }}>DatePicker with min/max dates</Text>
              <div style={{ marginTop: 8 }}>
                <DatePicker
                  value={selectedDateRange}
                  onChange={setSelectedDateRange}
                  placeholder="Select a date (limited range)"
                  minDate={new Date(new Date().setDate(new Date().getDate() - 7))}
                  maxDate={new Date(new Date().setDate(new Date().getDate() + 7))}
                />
              </div>
              {selectedDateRange && (
                <div style={{ marginTop: 8, color: '#9ca3af', fontSize: 13 }}>
                  Selected: {selectedDateRange.toLocaleDateString()}
                </div>
              )}
            </div>
          </Space>
        </Card>

        <Card title="Code" style={{ marginTop: 16 }}>
          <pre style={{ background: '#001529', padding: 16, borderRadius: 8, overflow: 'auto' }}>
            <code style={{ color: '#fff', fontSize: 13 }}>{datePickerExampleCode}</code>
          </pre>
        </Card>
      </div>

      <div>
        <Title level={4}>Props</Title>
        <Card>
          <Space direction="vertical">
            <div>
              <Text code>value</Text> <Text type="secondary">- Date object, the selected date</Text>
            </div>
            <div>
              <Text code>onChange</Text> <Text type="secondary">- Function, callback when date changes</Text>
            </div>
            <div>
              <Text code>placeholder</Text> <Text type="secondary">- String, input placeholder (default: "Select a date")</Text>
            </div>
            <div>
              <Text code>minDate</Text> <Text type="secondary">- Date object, minimum selectable date</Text>
            </div>
            <div>
              <Text code>maxDate</Text> <Text type="secondary">- Date object, maximum selectable date</Text>
            </div>
          </Space>
        </Card>
      </div>
    </Space>
  );
};