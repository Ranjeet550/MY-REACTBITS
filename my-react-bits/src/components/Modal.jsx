import { useState } from "react";

export const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        animation: "fadeIn 0.2s ease",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#020617",
          borderRadius: 12,
          padding: 24,
          maxWidth: 500,
          width: "90%",
          border: "1px solid #1f2933",
          animation: "slideIn 0.3s ease",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>{title}</h3>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              color: "#9ca3af",
              fontSize: 24,
              cursor: "pointer",
              padding: 0,
              lineHeight: 1,
            }}
          >
            ×
          </button>
        </div>
        <div>{children}</div>
      </div>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideIn {
            from { transform: translateY(-20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};
