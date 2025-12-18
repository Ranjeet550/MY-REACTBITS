export const ProgressCircle = ({
  progress = 0,
  size = 100,
  strokeWidth = 8,
  color = "#38bdf8",
  backgroundColor = "#1f2933",
  showText = true,
  textColor = "#fff",
  textSize = 16,
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
        />

        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{
            transition: "stroke-dashoffset 0.5s ease",
          }}
        />
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
    </div>
  );
};