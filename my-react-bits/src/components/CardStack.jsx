import { useState, useEffect, useRef } from "react";

export const CardStack = ({
  cards = [],
  width = 300,
  height = 200,
  perspective = 1000,
  maxRotation = 15,
  spacing = 20,
  onCardClick,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const stackRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [cards.length]);

  const handleCardClick = (index) => {
    setActiveIndex(index);
    if (onCardClick) {
      onCardClick(index);
    }
  };

  return (
    <div
      ref={stackRef}
      style={{
        position: "relative",
        width: width,
        height: height,
        perspective: perspective,
      }}
    >
      {cards.map((card, index) => {
        const distanceFromActive = Math.abs(index - activeIndex);
        const isActive = index === activeIndex;
        const isNext = index === (activeIndex + 1) % cards.length;
        const isPrev = index === (activeIndex - 1 + cards.length) % cards.length;

        // Calculate transform based on position in stack
        let transform, zIndex, opacity, scale, boxShadow;

        if (isActive) {
          transform = "translateZ(0px) rotateY(0deg) rotateX(0deg)";
          zIndex = cards.length;
          opacity = 1;
          scale = 1;
          boxShadow = "0 12px 24px rgba(0, 0, 0, 0.2)";
        } else if (isNext) {
          transform = `translateZ(-${spacing}px) rotateY(${maxRotation}deg)`;
          zIndex = cards.length - 1;
          opacity = 0.8;
          scale = 0.95;
          boxShadow = "0 8px 16px rgba(0, 0, 0, 0.1)";
        } else if (isPrev) {
          transform = `translateZ(-${spacing}px) rotateY(-${maxRotation}deg)`;
          zIndex = cards.length - 1;
          opacity = 0.8;
          scale = 0.95;
          boxShadow = "0 8px 16px rgba(0, 0, 0, 0.1)";
        } else {
          transform = `translateZ(-${spacing * 2}px) rotateY(${(index - activeIndex) * maxRotation}deg)`;
          zIndex = cards.length - distanceFromActive;
          opacity = Math.max(0.5, 1 - distanceFromActive * 0.2);
          scale = Math.max(0.9, 1 - distanceFromActive * 0.05);
          boxShadow = "0 4px 8px rgba(0, 0, 0, 0.05)";
        }

        return (
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            style={{
              position: "absolute",
              width: width,
              height: height,
              transform: transform,
              transformStyle: "preserve-3d",
              transition: "transform 0.5s ease, opacity 0.5s ease, box-shadow 0.5s ease",
              cursor: "pointer",
              zIndex: zIndex,
              opacity: opacity,
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: boxShadow,
              transformOrigin: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                background: card.background || "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: 24,
                color: "white",
                transform: `scale(${scale})`,
                transition: "transform 0.5s ease",
                position: "relative",
              }}
            >
              {typeof card.content === "function" ? card.content() : card.content}

              {/* Card footer */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "rgba(0, 0, 0, 0.3)",
                  padding: "8px 16px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: 12, fontWeight: 600 }}>{card.title || `Card ${index + 1}`}</span>
                {isActive && (
                  <span style={{ fontSize: 10, opacity: 0.8 }}>Active</span>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};