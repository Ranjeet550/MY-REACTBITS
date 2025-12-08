import { useState } from 'react';

export const Tabs = ({ items = [], defaultActive = 0, variant = 'underline' }) => {
  const [activeIndex, setActiveIndex] = useState(defaultActive);

  const variantStyles = {
    underline: {
      tab: {
        padding: '12px 24px',
        cursor: 'pointer',
        fontSize: 14,
        fontWeight: 500,
        color: '#9ca3af',
        borderBottom: '2px solid transparent',
        transition: 'all 0.2s ease',
        background: 'transparent',
      },
      activeTab: {
        color: '#38bdf8',
        borderBottomColor: '#38bdf8',
      },
    },
    pills: {
      tab: {
        padding: '8px 20px',
        cursor: 'pointer',
        fontSize: 14,
        fontWeight: 500,
        color: '#9ca3af',
        borderRadius: 8,
        transition: 'all 0.2s ease',
        background: 'transparent',
      },
      activeTab: {
        color: '#0b0c10',
        background: '#38bdf8',
      },
    },
  };

  const styles = variantStyles[variant] || variantStyles.underline;

  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', gap: 4, borderBottom: variant === 'underline' ? '1px solid #1f2933' : 'none' }}>
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            style={{
              ...styles.tab,
              ...(activeIndex === index ? styles.activeTab : {}),
            }}
            onMouseEnter={(e) => {
              if (activeIndex !== index) {
                e.currentTarget.style.color = '#cbd5e1';
              }
            }}
            onMouseLeave={(e) => {
              if (activeIndex !== index) {
                e.currentTarget.style.color = '#9ca3af';
              }
            }}
          >
            {item.label}
          </div>
        ))}
      </div>
      <div style={{ padding: '24px 0' }}>
        {items[activeIndex]?.content}
      </div>
    </div>
  );
};
