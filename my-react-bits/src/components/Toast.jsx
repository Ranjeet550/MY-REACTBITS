import { useState, useEffect } from "react";

export const Toast = ({ 
  message, 
  type = "info", 
  duration = 3000, 
  onClose,
  position = "top-right" 
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onClose && onClose(), 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const colors = {
    success: { bg: "#10b981", icon: "✓" },
    error: { bg: "#ef4444", icon: "✕" },
    warning: { bg: "#f59e0b", icon: "⚠" },
    info: { bg: "#3b82f6", icon: "ℹ" },
  };

  const positions = {
    "top-left": { top: 20, left: 20 },
    "top-right": { top: 20, right: 20 },
    "bottom-left": { bottom: 20, left: 20 },
    "bottom-right": { bottom: 20, right: 20 },
    "top-center": { top: 20, left: "50%", transform: "translateX(-50%)" },
    "bottom-center": { bottom: 20, left: "50%", transform: "translateX(-50%)" },
  };

  return (
    <div
      style={{
        position: "fixed",
        ...positions[position],
        background: colors[type].bg,
        color: "#fff",
        padding: "12px 20px",
        borderRadius: 8,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
        display: "flex",
        alignItems: "center",
        gap: 12,
        zIndex: 10000,
        minWidth: 250,
        animation: `${isVisible ? "slideIn" : "slideOut"} 0.3s ease`,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <span style={{ fontSize: 18 }}>{colors[type].icon}</span>
      <span style={{ flex: 1, fontSize: 14 }}>{message}</span>
      <button
        onClick={() => {
          setIsVisible(false);
          setTimeout(() => onClose && onClose(), 300);
        }}
        style={{
          background: "none",
          border: "none",
          color: "#fff",
          cursor: "pointer",
          fontSize: 18,
          padding: 0,
          opacity: 0.8,
        }}
      >
        ×
      </button>
      <style>
        {`
          @keyframes slideIn {
            from {
              transform: translateY(-20px) ${positions[position].transform || ""};
              opacity: 0;
            }
            to {
              transform: translateY(0) ${positions[position].transform || ""};
              opacity: 1;
            }
          }
          @keyframes slideOut {
            from {
              transform: translateY(0) ${positions[position].transform || ""};
              opacity: 1;
            }
            to {
              transform: translateY(-20px) ${positions[position].transform || ""};
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

// Toast Container Hook
export const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type = "info", duration = 3000) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type, duration }]);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const ToastContainer = () => (
    <>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          duration={toast.duration}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </>
  );

  return { showToast, ToastContainer };
};
