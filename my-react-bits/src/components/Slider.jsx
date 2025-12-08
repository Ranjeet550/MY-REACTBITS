import { useState, useRef } from 'react';

export const Slider = ({ 
  value: controlledValue, 
  onChange, 
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  showValue = true,
  ...rest 
}) => {
  const [internalValue, setInternalValue] = useState(min);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);
  
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;
  
  const percentage = ((value - min) / (max - min)) * 100;

  const updateValue = (clientX) => {
    if (!sliderRef.current || disabled) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const newPercentage = x / rect.width;
    let newValue = min + (max - min) * newPercentage;
    
    // Round to step
    newValue = Math.round(newValue / step) * step;
    newValue = Math.max(min, Math.min(max, newValue));
    
    if (!isControlled) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  const handleMouseDown = (e) => {
    if (disabled) return;
    setIsDragging(true);
    updateValue(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      updateValue(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Add global listeners for dragging
  useState(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  });

  return (
    <div style={{ width: '100%', ...rest.style }}>
      <div
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        style={{
          position: 'relative',
          height: 6,
          background: '#374151',
          borderRadius: 3,
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.5 : 1,
        }}
      >
        <div
          style={{
            position: 'absolute',
            height: '100%',
            width: `${percentage}%`,
            background: '#38bdf8',
            borderRadius: 3,
            transition: isDragging ? 'none' : 'width 0.2s ease',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: `${percentage}%`,
            transform: 'translate(-50%, -50%)',
            width: 18,
            height: 18,
            background: '#38bdf8',
            borderRadius: '50%',
            border: '3px solid #020617',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            transition: isDragging ? 'none' : 'left 0.2s ease',
            cursor: disabled ? 'not-allowed' : 'grab',
          }}
          onMouseDown={(e) => e.currentTarget.style.cursor = 'grabbing'}
          onMouseUp={(e) => e.currentTarget.style.cursor = 'grab'}
        />
      </div>
      {showValue && (
        <div style={{ 
          marginTop: 8, 
          fontSize: 13, 
          color: '#9ca3af', 
          textAlign: 'center' 
        }}>
          {value}
        </div>
      )}
    </div>
  );
};
