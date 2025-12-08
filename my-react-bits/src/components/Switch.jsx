import { useState } from 'react';

export const Switch = ({ 
  checked: controlledChecked, 
  onChange, 
  disabled = false, 
  size = 'medium',
  label,
  ...rest 
}) => {
  const [internalChecked, setInternalChecked] = useState(false);
  const isControlled = controlledChecked !== undefined;
  const checked = isControlled ? controlledChecked : internalChecked;

  const sizes = {
    small: { width: 36, height: 20, knob: 14, padding: 3 },
    medium: { width: 44, height: 24, knob: 18, padding: 3 },
    large: { width: 52, height: 28, knob: 22, padding: 3 },
  };

  const { width, height, knob, padding } = sizes[size] || sizes.medium;

  const handleChange = () => {
    if (disabled) return;
    const newValue = !checked;
    if (!isControlled) {
      setInternalChecked(newValue);
    }
    onChange?.(newValue);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <div
        onClick={handleChange}
        style={{
          width,
          height,
          borderRadius: height / 2,
          background: checked ? '#38bdf8' : '#374151',
          cursor: disabled ? 'not-allowed' : 'pointer',
          position: 'relative',
          transition: 'background 0.3s ease',
          opacity: disabled ? 0.5 : 1,
          ...rest.style,
        }}
        onMouseEnter={(e) => {
          if (!disabled) {
            e.currentTarget.style.background = checked ? '#0ea5e9' : '#4b5563';
          }
        }}
        onMouseLeave={(e) => {
          if (!disabled) {
            e.currentTarget.style.background = checked ? '#38bdf8' : '#374151';
          }
        }}
      >
        <div
          style={{
            width: knob,
            height: knob,
            borderRadius: '50%',
            background: '#fff',
            position: 'absolute',
            top: padding,
            left: checked ? width - knob - padding : padding,
            transition: 'left 0.3s ease',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          }}
        />
      </div>
      {label && (
        <span style={{ fontSize: 14, color: disabled ? '#6b7280' : '#e5e7eb' }}>
          {label}
        </span>
      )}
    </div>
  );
};
