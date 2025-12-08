export const StatsCard = ({ 
  title,
  value,
  change,
  icon,
  color = '#38bdf8',
  trend = 'up',
  ...rest 
}) => {
  const trendColors = {
    up: '#22c55e',
    down: '#ef4444',
    neutral: '#9ca3af',
  };

  const trendIcons = {
    up: '↑',
    down: '↓',
    neutral: '→',
  };

  return (
    <div
      style={{
        padding: 24,
        borderRadius: 12,
        background: '#020617',
        border: '1px solid #1f2933',
        transition: 'all 0.3s ease',
        ...rest.style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = color;
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = `0 10px 30px ${color}20`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#1f2933';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
        <div>
          <div style={{ fontSize: 14, color: '#9ca3af', marginBottom: 8 }}>
            {title}
          </div>
          <div style={{ fontSize: 32, fontWeight: 700, color: '#fff' }}>
            {value}
          </div>
        </div>
        {icon && (
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 10,
              background: `${color}15`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 24,
              color: color,
            }}
          >
            {icon}
          </div>
        )}
      </div>
      {change !== undefined && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            fontSize: 14,
            color: trendColors[trend],
            fontWeight: 500,
          }}
        >
          <span>{trendIcons[trend]}</span>
          <span>{change}</span>
        </div>
      )}
    </div>
  );
};
