import { useState, useRef, useEffect } from 'react';

export const Dropdown = ({ 
  trigger, 
  items = [],
  placement = 'bottom',
  ...rest 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const placementStyles = {
    top: { bottom: '100%', marginBottom: 8 },
    bottom: { top: '100%', marginTop: 8 },
    left: { right: '100%', marginRight: 8 },
    right: { left: '100%', marginLeft: 8 },
  };

  return (
    <div ref={dropdownRef} style={{ position: 'relative', display: 'inline-block', ...rest.style }}>
      <div onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>
        {trigger}
      </div>
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            zIndex: 1000,
            minWidth: 180,
            background: '#020617',
            border: '1px solid #1f2933',
            borderRadius: 8,
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)',
            padding: '8px 0',
            animation: 'fadeIn 0.2s ease',
            ...placementStyles[placement],
          }}
        >
          {items.map((item, index) => {
            if (item.divider) {
              return (
                <div
                  key={index}
                  style={{
                    height: 1,
                    background: '#1f2933',
                    margin: '8px 0',
                  }}
                />
              );
            }

            return (
              <div
                key={index}
                onClick={() => {
                  item.onClick?.();
                  if (!item.keepOpen) setIsOpen(false);
                }}
                style={{
                  padding: '10px 16px',
                  fontSize: 14,
                  color: item.danger ? '#ef4444' : '#e5e7eb',
                  cursor: item.disabled ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  transition: 'background 0.2s ease',
                  opacity: item.disabled ? 0.5 : 1,
                }}
                onMouseEnter={(e) => {
                  if (!item.disabled) {
                    e.currentTarget.style.background = '#0f172a';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                {item.icon && <span style={{ fontSize: 16 }}>{item.icon}</span>}
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      )}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};
