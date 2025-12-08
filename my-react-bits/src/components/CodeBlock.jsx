import { useState } from "react";

export const CodeBlock = ({ code, language = "javascript", showLineNumbers = true }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split("\n");

  return (
    <div
      style={{
        position: "relative",
        background: "#0d1117",
        borderRadius: 12,
        overflow: "hidden",
        border: "1px solid #30363d",
        fontFamily: "'Fira Code', 'Consolas', monospace",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "8px 16px",
          background: "#161b22",
          borderBottom: "1px solid #30363d",
        }}
      >
        <span style={{ fontSize: 12, color: "#8b949e", textTransform: "uppercase" }}>
          {language}
        </span>
        <button
          onClick={handleCopy}
          style={{
            padding: "4px 12px",
            fontSize: 12,
            background: copied ? "#238636" : "#21262d",
            color: "#c9d1d9",
            border: "1px solid #30363d",
            borderRadius: 6,
            cursor: "pointer",
            transition: "all 0.2s",
          }}
        >
          {copied ? "✓ Copied!" : "Copy"}
        </button>
      </div>
      <div style={{ overflow: "auto", maxHeight: 400 }}>
        <pre style={{ margin: 0, padding: 16 }}>
          {showLineNumbers ? (
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                {lines.map((line, index) => (
                  <tr key={index}>
                    <td
                      style={{
                        color: "#6e7681",
                        textAlign: "right",
                        paddingRight: 16,
                        userSelect: "none",
                        width: 40,
                        fontSize: 13,
                      }}
                    >
                      {index + 1}
                    </td>
                    <td>
                      <code style={{ color: "#c9d1d9", fontSize: 13 }}>
                        {line || " "}
                      </code>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <code style={{ color: "#c9d1d9", fontSize: 13 }}>{code}</code>
          )}
        </pre>
      </div>
    </div>
  );
};
