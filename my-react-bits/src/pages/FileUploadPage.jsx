import { FileUpload } from "../components/FileUpload";
import { Typography, Space, Card } from "antd";
import { useState } from "react";

const { Title, Paragraph, Text } = Typography;

const fileUploadExampleCode = `import { FileUpload } from "./components/FileUpload";
import { useState } from "react";

export function Example() {
  const [files, setFiles] = useState([]);

  return (
    <div>
      <FileUpload
        onChange={setFiles}
        accept="image/*,.pdf"
        multiple
        maxSize={10 * 1024 * 1024} // 10MB
      />
      {files.length > 0 && (
        <div style={{ marginTop: 16, color: '#fff' }}>
          {files.length} file(s) selected
        </div>
      )}
    </div>
  );
}`;

export const FileUploadPage = () => {
  const [singleFile, setSingleFile] = useState(null);
  const [multipleFiles, setMultipleFiles] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <div>
        <Title level={2}>FileUpload</Title>
        <Paragraph type="secondary">
          A drag-and-drop file upload component with preview and validation.
        </Paragraph>
      </div>

      <div>
        <Title level={4}>Usage</Title>
        <Paragraph type="secondary">
          Use the file upload component for handling file uploads with drag-and-drop support.
        </Paragraph>

        <Card title="Live preview">
          <Space direction="vertical" size="large">
            <div>
              <Text strong style={{ color: '#fff' }}>Single File Upload</Text>
              <div style={{ marginTop: 8 }}>
                <FileUpload
                  onChange={setSingleFile}
                  accept="*"
                  multiple={false}
                />
              </div>
            </div>

            <div>
              <Text strong style={{ color: '#fff' }}>Multiple File Upload</Text>
              <div style={{ marginTop: 8 }}>
                <FileUpload
                  onChange={setMultipleFiles}
                  accept="*"
                  multiple
                />
              </div>
            </div>

            <div>
              <Text strong style={{ color: '#fff' }}>Image Only Upload</Text>
              <div style={{ marginTop: 8 }}>
                <FileUpload
                  onChange={setImageFiles}
                  accept="image/*"
                  multiple
                  maxSize={5 * 1024 * 1024} // 5MB
                />
              </div>
            </div>
          </Space>
        </Card>

        <Card title="Code" style={{ marginTop: 16 }}>
          <pre style={{ background: '#001529', padding: 16, borderRadius: 8, overflow: 'auto' }}>
            <code style={{ color: '#fff', fontSize: 13 }}>{fileUploadExampleCode}</code>
          </pre>
        </Card>
      </div>

      <div>
        <Title level={4}>Props</Title>
        <Card>
          <Space direction="vertical">
            <div>
              <Text code>onChange</Text> <Text type="secondary">- Function, callback when files change</Text>
            </div>
            <div>
              <Text code>accept</Text> <Text type="secondary">- String, file types to accept (default: "*")</Text>
            </div>
            <div>
              <Text code>multiple</Text> <Text type="secondary">- Boolean, allow multiple files (default: false)</Text>
            </div>
            <div>
              <Text code>maxSize</Text> <Text type="secondary">- Number, maximum file size in bytes (default: 5MB)</Text>
            </div>
            <div>
              <Text code>children</Text> <Text type="secondary">- React node, custom upload content</Text>
            </div>
            <div>
              <Text code>disabled</Text> <Text type="secondary">- Boolean, disable the upload (default: false)</Text>
            </div>
          </Space>
        </Card>
      </div>
    </Space>
  );
};