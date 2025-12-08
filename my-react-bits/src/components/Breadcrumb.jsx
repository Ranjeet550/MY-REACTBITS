export const Breadcrumb = ({ 
  items = [],
  separator = '/',
  ...rest 
}) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        fontSize: 14,
        ...rest.style,
      }}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        
        return (
          <div key={index} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {item.icon && (
              <span style={{ display: 'flex', fontSize: 16, color: '#9ca3af' }}>
                {item.icon}
              </span>
            )}
            {item.href ? (
              <a
                href={item.href}
                onClick={(e) => {
                  if (item.onClick) {
                    e.preventDefault();
                    item.onClick();
                  }
                }}
                style={{
                  color: isLast ? '#e5e7eb' : '#9ca3af',
                  textDecoration: 'none',
                  cursor: isLast ? 'default' : 'pointer',
                  transition: 'color 0.2s ease',
                  fontWeight: isLast ? 500 : 400,
                }}
                onMouseEnter={(e) => {
                  if (!isLast) e.currentTarget.style.color = '#38bdf8';
                }}
                onMouseLeave={(e) => {
                  if (!isLast) e.currentTarget.style.color = '#9ca3af';
                }}
              >
                {item.label}
              </a>
            ) : (
              <span
                style={{
                  color: isLast ? '#e5e7eb' : '#9ca3af',
                  fontWeight: isLast ? 500 : 400,
                }}
              >
                {item.label}
              </span>
            )}
            {!isLast && (
              <span style={{ color: '#4b5563', fontSize: 12 }}>{separator}</span>
            )}
          </div>
        );
      })}
    </div>
  );
};
