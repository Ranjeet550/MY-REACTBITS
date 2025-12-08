import { useState } from 'react';

export const Alert = ({ 
  type = 'info',
  title,
  message,
  closable = false,
  onClose,
  icon,
  ...rest 
}) => {
  const [visible, setVisible] = useState(true);

  const typeStyles = {
    info: {
      background: 'rgba(59, 130, 246, 0.1)',
      border: '1px solid rgba(59, 130, 246, 0.3)',
      color: '#60a5fa',
      iconColor: '#3b82f6',
    },
    success: {
      background: 'rgba(34, 197, 94, 0.1)',
      border: '1px solid rgba(34, 197, 94, 0.3)',
      color: '#4ade80',
      iconColor: '#22c55e',
    },
    warning: {
      background: 'rgba(251, 146, 60, 0.1)',
      border: '1px solid rgba(251, 146, 60, 0.3)',
      color: '#fb923c',
      iconColor: '#f97316',
    },
    error: {
      background: 'rgba(239, 68, 68, 0.1)',
      border: '1px solid rgba(239, 68, 68, 0.3)',
      color: '#f87171',
      iconColor: '#ef4444',
    },
  };

  const defaultIcons = {
    info: 'ℹ',
    success: '✓',
    warning: '⚠',
    error: '✕',
  };

  const styles = typeStyles[type] || typeStyles.info;

  const handleClose = () => {
    setVisible(false);
    onClose?.();
  };

  if (!visible) return null;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 12,
        padding: '16px 20px',
        borderRadius: 8,
        background: styles.background,
        border: styles.border,
        ...rest.style,
      }}
    >
      <div
        style={{
          fontSize: 18,
          color: styles.iconColor,
          fontWeight: 'bold',
          flexShrink: 0,
        }}
      >
        {icon || defaultIcons[type]}
      </div>
      <div style={{ flex: 1 }}>
        {title && (
          <div
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: styles.color,
              marginBottom: message ? 4 : 0,
            }}
          >
            {title}
          </div>
        )}
        {message && (
          <div
            style={{
              fontSize: 14,
              color: styles.color,
              opacity: 0.9,
              lineHeight: 1.5,
            }}
          >
            {message}
          </div>
        )}
      </div>
      {closable && (
        <div
          onClick={handleClose}
          style={{
            fontSize: 18,
            color: styles.color,
            cursor: 'pointer',
            flexShrink: 0,
            opacity: 0.7,
            transition: 'opacity 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.7')}
        >
          ×
        </div>
      )}
    </div>
  );
};
