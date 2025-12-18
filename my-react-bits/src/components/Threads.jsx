export const Threads = ({
  color = "#667eea",
  threadCount = 20,
  speed = 1,
  opacity = 0.3,
  width = 2,
  blendMode = "screen",
  className = "",
  style = {}
}) => {
  // Generate thread positions
  const threads = Array.from({ length: threadCount }, (_, i) => ({
    id: i,
    top: `${(i / threadCount) * 100}%`,
    delay: `${(i / threadCount) * 2}s`,
    duration: `${(threadCount - i) * speed}s`
  }));

  return (
    <div 
      className={`threads-container ${className}`}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        pointerEvents: "none",
        ...style
      }}
    >
      {threads.map(thread => (
        <div
          key={thread.id}
          style={{
            position: "absolute",
            top: thread.top,
            left: "-100%",
            width: "300%",
            height: `${width}px`,
            background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
            opacity: opacity,
            mixBlendMode: blendMode,
            animation: `threadMove ${thread.duration} linear infinite`,
            animationDelay: thread.delay,
          }}
        />
      ))}
      
      <style>{`
        @keyframes threadMove {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};