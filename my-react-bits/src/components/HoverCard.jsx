import { useState, useRef, useEffect } from "react";

export const HoverCard = ({
  children,
  content,
  position = "top",
  delay = 300,
  width = 200,
  background = "#0b0c10",
  borderColor = "#38bdf8",
  borderRadius = 8,
  padding = 12,
  arrowSize = 8,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [cardPosition, setCardPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef(null);
  const cardRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
      updatePosition();
    }, delay);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, delay);
  };

  const updatePosition = () => {
    if (!triggerRef.current || !cardRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const cardRect = cardRef.current.getBoundingClientRect();

    let top, left;

    switch (position) {
      case "top":
        top = triggerRect.top - cardRect.height - arrowSize;
        left = triggerRect.left + triggerRect.width / 2 - cardRect.width / 2;
        break;
      case "bottom":
        top = triggerRect.bottom + arrowSize;
        left = triggerRect.left + triggerRect.width / 2 - cardRect.width / 2;
        break;
      case "left":
        top = triggerRect.top + triggerRect.height / 2 - cardRect.height / 2;
        left = triggerRect.left - cardRect.width - arrowSize;
        break;
      case "right":
      default:
        top = triggerRect.top + triggerRect.height / 2 - cardRect.height / 2;
        left = triggerRect.right + arrowSize;
        break;
    }

    setCardPosition({ top, left });
  };

  const getArrowStyles = () => {
    const arrowStyles = {
      position: "absolute",
      width: arrowSize * 2,
      height: arrowSize * 2,
      background: background,
      borderTop: `1px solid ${borderColor}`,
      borderLeft: `1px solid ${borderColor}`,
      transform: "rotate(45deg)",
    };

    switch (position) {
      case "top":
        return {
          ...arrowStyles,
          bottom: -arrowSize,
          left: "50%",
          transform: "rotate(45deg) translateX(-50%)",
        };
      case "bottom":
        return {
          ...arrowStyles,
          top: -arrowSize,
          left: "50%",
          transform: "rotate(45deg) translateX(-50%)",
        };
      case "left":
        return {
          ...arrowStyles,
          right: -arrowSize,
          top: "50%",
          transform: "rotate(45deg) translateY(-50%)",
        };
      case "right":
      default:
        return {
          ...arrowStyles,
          left: -arrowSize,
          top: "50%",
          transform: "rotate(45deg) translateY(-50%)",
        };
    }
  };

  return (
    <div
      style={{ display: "inline-block", position: "relative" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={triggerRef}>{children}</div>

      {isVisible && (
        <div
          ref={cardRef}
          style={{
            position: "fixed",
            top: cardPosition.top,
            left: cardPosition.left,
            width: width,
            background: background,
            border: `1px solid ${borderColor}`,
            borderRadius: borderRadius,
            padding: padding,
            zIndex: 1000,
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
            animation: "fadeIn 0.2s ease",
            maxWidth: "80vw",
          }}
        >
          {/* Arrow */}
          <div style={getArrowStyles()} />

          {/* Content */}
          <div style={{ color: "#fff", fontSize: 14 }}>
            {typeof content === "function" ? content() : content}
          </div>

          <style>
            {`
              @keyframes fadeIn {
                from {
                  opacity: 0;
                  transform: scale(0.95);
                }
                to {
                  opacity: 1;
                  transform: scale(1);
                }
              }
            `}
          </style>
        </div>
      )}
    </div>
  );
};
