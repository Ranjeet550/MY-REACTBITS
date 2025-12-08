export const Chip = ({ 
  label,
  variant = 'filled',
  color = 'primary',
  size = 'medium',
  onDelete,
  icon,
  clickable = false,
  onClick,
  ...rest 
}) => {
  const colors = {
    primary: { main: '#38bdf8', light: 'rgba(56, 189, 248, 0.15)' },
    success: { main: '#22c55e', light: 'rgba(34, 197, 94, 0.15)' },
    warning: { main: '#f59e0b', light: 'rgba(245, 158, 11, 0.15)' },
    error: { main: '#ef4444', light: 'rgba(239, 68, 68, 0.15)' },
    gray: { main: '#9ca3af', light: 'rgba(156, 163, 175, 0.15)' },
  };

  const sizes = {
    small: { padding: '4px 10px', fontSize: 12, height: 24 },
    medium: { padding: '6px 14px', fontSize: 13, height: 28 },
    large: { padding: '8px 18px', fontSize: 14, height: 32 },
  };

  const colorStyle = colors[color] || colors.primary;
  const sizeStyle = sizes[size] || sizes.medium;

  const variantStyles = {
    filled: {
      background: colorStyle.main,
      color: '#0b0c10',
      border: 'none',
    },
    outlined: {
      background: 'transparent',
      color: colorStyle.main,
      border: `1px solid ${colorStyle.main}`,
    },
    light: {
      background: colorStyle.light,
      color: colorStyle.main,
      border: `1px solid ${colorStyle.light}`,
    },
  };

  const style = variantStyles[variant] || variantStyles.filled;

  return (
    <div
      onClick={clickable ? onClick : undefined}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        borderRadius: sizeStyle.height / 2,
        padding: sizeStyle.padding,
        fontSize: sizeStyle.fontSize,
        fontWeight: 500,
        cursor: clickable || onDelete ? 'pointer' : 'default',
        transition: 'all 0.2s ease',
        userSelect: 'none',
        ...style,
        ...rest.style,
      }}
      onMouseEnter={(e) => {
        if (clickable || onDelete) {
          e.currentTarget.style.opacity = '0.8';
        }
      }}
      onMouseLeave={(e) => {
        if (clickable || onDelete) {
          e.currentTarget.style.opacity = '1';
        }
      }}
    >
      {icon && <span style={{ display: 'flex', fontSize: sizeStyle.fontSize + 2 }}>{icon}</span>}
      <span>{label}</span>
      {onDelete && (
        <span
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          style={{
            display: 'flex',
            fontSize: sizeStyle.fontSize + 4,
            fontWeight: 'bold',
            opacity: 0.7,
            transition: 'opacity 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.7')}
        >
          ×
        </span>
      )}
    </div>
  );
};
