import { useState } from 'react';

export const Accordion = ({ items = [], allowMultiple = false }) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleItem = (index) => {
    if (allowMultiple) {
      setOpenIndexes(prev =>
        prev.includes(index)
          ? prev.filter(i => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndexes(prev =>
        prev.includes(index) ? [] : [index]
      );
    }
  };

  return (
    <div style={{ width: '100%' }}>
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        return (
          <div
            key={index}
            style={{
              marginBottom: 12,
              borderRadius: 8,
              border: '1px solid #1f2933',
              background: '#020617',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
            }}
          >
            <div
              onClick={() => toggleItem(index)}
              style={{
                padding: '16px 20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
                userSelect: 'none',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#0f172a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <span style={{ fontSize: 15, fontWeight: 600, color: '#fff' }}>
                {item.title}
              </span>
              <span
                style={{
                  fontSize: 14,
                  color: '#9ca3af',
                  transition: 'transform 0.3s ease',
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              >
                ▼
              </span>
            </div>
            <div
              style={{
                maxHeight: isOpen ? '500px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.3s ease, padding 0.3s ease',
                padding: isOpen ? '0 20px 16px' : '0 20px',
              }}
            >
              <div style={{ fontSize: 14, color: '#9ca3af', lineHeight: 1.6 }}>
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
