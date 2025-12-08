import { useState } from 'react';

export const Checkbox = ({ 
  checked: controlledChecked, 
  onChange, 
  disabled = false, 
  label,
  indeterminate = false,
  ...rest 
}) => {
  const [internalChecked, setInternalChecked] = useState(false);
  const isControlled = controlledChecked !== undefined;
  const checked = isControlled ? controlledChecked : internalChecked;

  const handleChange = () => {
    if (disabled) return;
    const newValue = !checked;
    if (!isControlled) {
      setInternalChecked(newValue);
    }
    onChange?.(newValue);
  };

  return (
    <div 
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: 10,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
      }}
      onClick={handleChange}
    >
      <div
        style={{
          width: 20,
          height: 20,
          borderRadius: 4,
          border: `2px solid ${checked || indeterminate ? '#38bdf8' : '#4b5563'}`,
          background: checked || indeterminate ? '#38bdf8' : 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.2s ease',
          ...rest.style,
        }}
      >
        {indeterminate ? (
          <div style={{ width: 10, height: 2, background: '#fff', borderRadius: 1 }} />
        ) : checked ? (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path 
              d="M11.6666 3.5L5.24992 9.91667L2.33325 7" 
              stroke="#fff" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        ) : null}
      </div>
      {label && (
        <span style={{ fontSize: 14, color: '#e5e7eb', userSelect: 'none' }}>
          {label}
        </span>
      )}
    </div>
  );
};
