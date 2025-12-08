export const GradientText = ({ 
  children, 
  gradient = "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
  animated = false,
  ...rest 
}) => {
  return (
    <span
      {...rest}
      style={{
        background: gradient,
        backgroundSize: animated ? "200% 200%" : "100% 100%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        animation: animated ? "gradientShift 3s ease infinite" : "none",
        display: "inline-block",
        ...rest.style,
      }}
    >
      {children}
      {animated && (
        <style>
          {`
            @keyframes gradientShift {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}
        </style>
      )}
    </span>
  );
};
