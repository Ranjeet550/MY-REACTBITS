export const CurvedLoop = ({
  size = 100,
  color = "#667eea",
  thickness = 4,
  duration = 2,
  glow = true,
  children,
}) => {
  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        filter: glow ? `drop-shadow(0 0 ${thickness}px ${color}80)` : "none",
      }}
    >
      {/* Animated curved loop */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <defs>
          <linearGradient id="loopGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="1" />
            <stop offset="50%" stopColor={color} stopOpacity="0.8" />
            <stop offset="100%" stopColor={color} stopOpacity="0.4" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation={thickness / 3} result="blur" />
            <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" mode="lighten" />
          </filter>
        </defs>
        
        {/* Main curved path - infinity loop shape */}
        <path
          d="M 25,50 Q 25,25 37.5,25 T 50,37.5 Q 50,50 62.5,50 T 75,37.5 Q 75,25 87.5,25 T 100,37.5 Q 100,50 87.5,62.5 T 75,75 Q 62.5,75 62.5,62.5 T 50,50 Q 37.5,50 37.5,62.5 T 25,75 Q 12.5,75 12.5,62.5 T 0,50 Q 0,37.5 12.5,25 T 25,25 Q 25,37.5 25,50 Z"
          fill="none"
          stroke="url(#loopGradient)"
          strokeWidth={thickness}
          strokeLinecap="round"
          filter={glow ? "url(#glow)" : "none"}
          style={{
            animation: `curvedLoop ${duration}s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
            transformOrigin: "center",
          }}
        />
        
        {/* Moving dot on the path */}
        <circle
          r={thickness * 1.2}
          fill={color}
          style={{
            animation: `moveDot ${duration}s linear infinite, pulse ${duration/2}s ease-in-out infinite`,
            transformOrigin: "center",
          }}
        >
          <animateMotion
            dur={`${duration}s`}
            repeatCount="indefinite"
            path="M 25,50 Q 25,25 37.5,25 T 50,37.5 Q 50,50 62.5,50 T 75,37.5 Q 75,25 87.5,25 T 100,37.5 Q 100,50 87.5,62.5 T 75,75 Q 62.5,75 62.5,62.5 T 50,50 Q 37.5,50 37.5,62.5 T 25,75 Q 12.5,75 12.5,62.5 T 0,50 Q 0,37.5 12.5,25 T 25,25 Q 25,37.5 25,50 Z"
          />
        </circle>
      </svg>

      {/* Content */}
      {children && (
        <div
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          {children}
        </div>
      )}

      <style>
        {`
          @keyframes curvedLoop {
            0%, 100% {
              opacity: 0.9;
              transform: scale(1) rotate(0deg);
              filter: brightness(1);
            }
            25% {
              opacity: 1;
              transform: scale(1.03) rotate(90deg);
              filter: brightness(1.2);
            }
            50% {
              opacity: 0.9;
              transform: scale(1) rotate(180deg);
              filter: brightness(1);
            }
            75% {
              opacity: 1;
              transform: scale(1.03) rotate(270deg);
              filter: brightness(1.2);
            }
          }
          
          @keyframes moveDot {
            0% {
              r: ${thickness * 1.2};
            }
            50% {
              r: ${thickness * 1.8};
            }
            100% {
              r: ${thickness * 1.2};
            }
          }
          
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
              filter: brightness(1) blur(0px);
            }
            50% {
              opacity: 0.8;
              filter: brightness(1.5) blur(0.5px);
            }
          }
        `}
      </style>
    </div>
  );
};
