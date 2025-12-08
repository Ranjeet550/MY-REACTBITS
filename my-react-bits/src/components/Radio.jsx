import { useState } from 'react';

export const RadioGroup = ({ 
  value: controlledValue, 
  onChange, 
  options = [],
  disabled = false,
  direction = 'vertical',
  ...rest 
}) => {
  const [internalValue, setInternalValue] = useState('');
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;

  const handleChange = (newValue) => {
    if (disabled) return;
    if (!isControlled) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  return (
    <div 
      style={{ 
        display: 'flex', 
        flexDirection: direction === 'vertical' ? 'column' : 'row',
        gap: direction === 'vertical' ? 12 : 20,
        ...rest.style,
      }}
    >
      {options.map((option) => {
        const optionValue = typeof option === 'string' ? option : option.value;
        const optionLabel = typeof option === 'string' ? option : option.label;
        const optionDisabled = typeof option === 'object' ? option.disabled : false;
        const isChecked = value === optionValue;
        const isDisabled = disabled || optionDisabled;

        return (
          <div
            key={optionValue}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              cursor: isDisabled ? 'not-allowed' : 'pointer',
              opacity: isDisabled ? 0.5 : 1,
            }}
            onClick={() => handleChange(optionValue)}
          >
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: '50%',
                border: `2px solid ${isChecked ? '#38bdf8' : '#4b5563'}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
              }}
            >
              {isChecked && (
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    background: '#38bdf8',
                    transition: 'all 0.2s ease',
                  }}
                />
              )}
            </div>
            <span style={{ fontSize: 14, color: '#e5e7eb', userSelect: 'none' }}>
              {optionLabel}
            </span>
          </div>
        );
      })}
    </div>
  );
};
