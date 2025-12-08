export const Timeline = ({ 
  items = [],
  color = '#38bdf8',
  ...rest 
}) => {
  return (
    <div style={{ position: 'relative', paddingLeft: 32, ...rest.style }}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const itemColor = item.color || color;
        
        return (
          <div
            key={index}
            style={{
              position: 'relative',
              paddingBottom: isLast ? 0 : 32,
            }}
          >
            {/* Vertical Line */}
            {!isLast && (
              <div
                style={{
                  position: 'absolute',
                  left: -24,
                  top: 16,
                  bottom: -16,
                  width: 2,
                  background: '#1f2933',
                }}
              />
            )}
            
            {/* Dot */}
            <div
              style={{
                position: 'absolute',
                left: -30,
                top: 0,
                width: 14,
                height: 14,
                borderRadius: '50%',
                background: itemColor,
                border: '3px solid #020617',
                boxShadow: `0 0 0 1px ${itemColor}`,
              }}
            />
            
            {/* Content */}
            <div>
              {item.time && (
                <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 4 }}>
                  {item.time}
                </div>
              )}
              <div style={{ fontSize: 15, fontWeight: 600, color: '#e5e7eb', marginBottom: 4 }}>
                {item.title}
              </div>
              {item.description && (
                <div style={{ fontSize: 14, color: '#9ca3af', lineHeight: 1.5 }}>
                  {item.description}
                </div>
              )}
              {item.content && (
                <div style={{ marginTop: 8 }}>
                  {item.content}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
