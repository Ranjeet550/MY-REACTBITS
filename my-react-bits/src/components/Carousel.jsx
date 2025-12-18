import { useState, useEffect } from "react";

export const Carousel = ({
  items,
  autoPlay = false,
  interval = 3000,
  showDots = true,
  showArrows = true,
  children
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const contentItems = children || items || [];

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === contentItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? contentItems.length - 1 : prevIndex - 1
    );
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!autoPlay || isHovered) return;

    const timer = setInterval(() => {
      goToNext();
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, isHovered, contentItems.length]);

  if (contentItems.length === 0) return null;

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        borderRadius: 12,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          display: "flex",
          transition: "transform 0.5s ease-in-out",
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${contentItems.length * 100}%`,
        }}
      >
        {contentItems.map((item, index) => (
          <div
            key={index}
            style={{
              width: `${100 / contentItems.length}%`,
              flexShrink: 0,
            }}
          >
            {item}
          </div>
        ))}
      </div>

      {showArrows && (
        <>
          <button
            onClick={goToPrev}
            style={{
              position: "absolute",
              left: 16,
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(0, 0, 0, 0.5)",
              color: "white",
              border: "none",
              borderRadius: "50%",
              width: 40,
              height: 40,
              cursor: "pointer",
              zIndex: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "rgba(0, 0, 0, 0.8)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "rgba(0, 0, 0, 0.5)"}
          >
            ‹
          </button>

          <button
            onClick={goToNext}
            style={{
              position: "absolute",
              right: 16,
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(0, 0, 0, 0.5)",
              color: "white",
              border: "none",
              borderRadius: "50%",
              width: 40,
              height: 40,
              cursor: "pointer",
              zIndex: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "rgba(0, 0, 0, 0.8)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "rgba(0, 0, 0, 0.5)"}
          >
            ›
          </button>
        </>
      )}

      {showDots && (
        <div
          style={{
            position: "absolute",
            bottom: 16,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 8,
            zIndex: 10,
          }}
        >
          {contentItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: index === currentIndex ? "#fff" : "rgba(255, 255, 255, 0.5)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.2)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            />
          ))}
        </div>
      )}
    </div>
  );
};