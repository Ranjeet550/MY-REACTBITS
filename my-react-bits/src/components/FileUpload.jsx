import { useState, useRef } from "react";

export const FileUpload = ({
  onChange,
  accept = "*",
  multiple = false,
  maxSize = 5 * 1024 * 1024, // 5MB default
  children,
  disabled = false,
}) => {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    processFiles(selectedFiles);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    processFiles(droppedFiles);
  };

  const processFiles = (fileList) => {
    if (disabled) return;

    setError(null);

    // Check if files exceed max size
    const oversizedFiles = fileList.filter(file => file.size > maxSize);
    if (oversizedFiles.length > 0) {
      setError(`File${oversizedFiles.length > 1 ? 's' : ''} exceed maximum size of ${formatFileSize(maxSize)}`);
      return;
    }

    if (!multiple && fileList.length > 1) {
      setError("Multiple file selection not allowed");
      return;
    }

    const newFiles = multiple ? [...files, ...fileList] : [fileList[0]];
    setFiles(newFiles);

    if (onChange) {
      onChange(multiple ? newFiles : newFiles[0]);
    }
  };

  const removeFile = (index) => {
    if (disabled) return;

    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);

    if (onChange) {
      onChange(multiple ? newFiles : null);
    }
  };

  const triggerFileInput = () => {
    if (!disabled && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <div style={{ width: "100%" }}>
      <div
        onClick={triggerFileInput}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        style={{
          border: `2px dashed ${isDragging ? "#38bdf8" : error ? "#f5576c" : "#1f2933"}`,
          borderRadius: 12,
          padding: 24,
          textAlign: "center",
          cursor: disabled ? "not-allowed" : "pointer",
          backgroundColor: "#020617",
          transition: "all 0.2s",
          opacity: disabled ? 0.6 : 1,
          minHeight: 150,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        onMouseEnter={(e) => !disabled && (e.currentTarget.style.borderColor = "#38bdf8")}
        onMouseLeave={(e) => !disabled && (e.currentTarget.style.borderColor = isDragging ? "#38bdf8" : error ? "#f5576c" : "#1f2933")}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          style={{ display: "none" }}
        />

        {children ? (
          children
        ) : (
          <>
            <div style={{
              color: "#9ca3af",
              fontSize: 24,
              marginBottom: 12,
            }}>
              📁
            </div>
            <div style={{
              color: "#fff",
              fontSize: 16,
              fontWeight: 600,
              marginBottom: 8,
            }}>
              {isDragging ? "Drop files here" : "Upload files"}
            </div>
            <div style={{
              color: "#6b7280",
              fontSize: 14,
            }}>
              {isDragging
                ? "Release to upload"
                : `Drag & drop files or click to browse (Max: ${formatFileSize(maxSize)})`}
            </div>
          </>
        )}
      </div>

      {error && (
        <div style={{
          color: "#f5576c",
          fontSize: 14,
          marginTop: 12,
          padding: "8px 12px",
          backgroundColor: "rgba(245, 87, 108, 0.1)",
          borderRadius: 8,
        }}>
          {error}
        </div>
      )}

      {files.length > 0 && (
        <div style={{
          marginTop: 16,
          border: "1px solid #1f2933",
          borderRadius: 8,
          padding: 12,
        }}>
          <div style={{
            color: "#9ca3af",
            fontSize: 14,
            marginBottom: 8,
            fontWeight: 500,
          }}>
            Selected Files ({files.length})
          </div>

          {files.map((file, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "8px 0",
                borderBottom: index < files.length - 1 ? "1px solid #1f2933" : "none",
              }}
            >
              <div style={{ flex: 1, overflow: "hidden" }}>
                <div style={{
                  color: "#fff",
                  fontSize: 14,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}>
                  {file.name}
                </div>
                <div style={{
                  color: "#6b7280",
                  fontSize: 12,
                }}>
                  {formatFileSize(file.size)}
                </div>
              </div>

              {!disabled && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(index);
                  }}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#f5576c",
                    cursor: "pointer",
                    padding: "4px 8px",
                    borderRadius: 4,
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgba(245, 87, 108, 0.1)"}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                >
                  Remove
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};