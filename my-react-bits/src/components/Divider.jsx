export const Divider = ({ 
  orientation = 'horizontal',
  text,
  textAlign = 'center',
  spacing = 16,
  ...rest 
}) => {
  if (orientation === 'vertical') {
    return (
      <div
        style={{
          width: 1,
          height: '100%',
          background: '#1f2933',
          margin: `0 ${spacing}px`,
          ...rest.style,
        }}
      />
    );
  }

  if (text) {
    const alignStyles = {
      left: { flex: '0 0 5%' },
      center: { flex: 1 },
      right: { flex: '0 0 95%' },
    };

    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          margin: `${spacing}px 0`,
          ...rest.style,
        }}
      >
        <div
          style={{
            height: 1,
            background: '#1f2933',
            ...alignStyles[textAlign],
          }}
        />
        <span
          style={{
            fontSize: 14,
            color: '#9ca3af',
            whiteSpace: 'nowrap',
          }}
        >
          {text}
        </span>
        <div
          style={{
            height: 1,
            background: '#1f2933',
            flex: textAlign === 'left' ? '0 0 95%' : textAlign === 'right' ? '0 0 5%' : 1,
          }}
        />
      </div>
    );
  }

  return (
    <div
      style={{
        height: 1,
        background: '#1f2933',
        margin: `${spacing}px 0`,
        ...rest.style,
      }}
    />
  );
};
