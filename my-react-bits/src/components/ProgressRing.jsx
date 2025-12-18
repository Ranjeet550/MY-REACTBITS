export const ProgressRing = ({
  progress = 0,
  size = 100,
  strokeWidth = 8,
  color = "#38bdf8",
  backgroundColor = "#1f2933",
  showText = true,
  textColor = "#fff",
  textSize = 16,
  animate = true,
  duration = 1000,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  // Ensure progress is between 0 and 100
  const clampedProgress = Math.min(100, Math.max(0, progress));

  return (
    <div style={{
      position: "relative",
      width: size,
      height: size,
    }}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ transform: "rotate(-90deg)" }}
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
        />

        {/* Progress circle with gradient */}
        <defs>
          <linearGradient id={`progressGradient-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color} />
            <stop offset="100%" stopColor={color} stopOpacity={0.7} />
          </linearGradient>
        </defs>

        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={`url(#progressGradient-${size})`}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{
            transition: animate ? `stroke-dashoffset ${duration}ms ease` : "none",
            transformOrigin: "center",
          }}
        />

        {/* Sparkle effect */}
        {clampedProgress > 0 && clampedProgress < 100 && (
          <circle
            cx={size / 2 + radius * Math.cos((clampedProgress / 100) * 2 * Math.PI - Math.PI / 2)}
            cy={size / 2 + radius * Math.sin((clampedProgress / 100) * 2 * Math.PI - Math.PI / 2)}
            r={strokeWidth / 2}
            fill="white"
            style={{
              animation: "sparkle 1.5s infinite",
            }}
          />
        )}
      </svg>

      {showText && (
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: textColor,
          fontSize: textSize,
          fontWeight: 600,
        }}>
          <div>{Math.round(clampedProgress)}%</div>
          {clampedProgress < 100 && (
            <div style={{
              fontSize: textSize * 0.6,
              color: textColor,
              opacity: 0.7,
              fontWeight: 400,
            }}>
              {clampedProgress.toFixed(0)}%
            </div>
          )}
        </div>
      )}

      <style>
        {`
          @keyframes sparkle {
            0%, 100% {
              opacity: 0;
              transform: scale(0.8);
            }
            50% {
              opacity: 1;
              transform: scale(1.2);
            }
          }
        `}
      </style>
    </div>
  );
};