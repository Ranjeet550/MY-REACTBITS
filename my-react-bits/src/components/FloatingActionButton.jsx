import { useState, useEffect, useRef } from "react";
import React from "react";

export const FloatingActionButton = ({
  icon = "+",
  onClick,
  position = "bottom-right",
  size = 56,
  color = "#38bdf8",
  secondaryColor = "#667eea",
  children,
  distance = 120,
  direction = "up",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [actionItems, setActionItems] = useState([]);
  const fabRef = useRef(null);

  useEffect(() => {
    if (children && React.Children.count(children) > 0) {
      setActionItems(React.Children.toArray(children));
    }
  }, [children]);

  const getPositionStyles = () => {
    const positions = {
      "bottom-right": {
        position: "fixed",
        bottom: 24,
        right: 24,
      },
      "bottom-left": {
        position: "fixed",
        bottom: 24,
        left: 24,
      },
      "top-right": {
        position: "fixed",
        top: 24,
        right: 24,
      },
      "top-left": {
        position: "fixed",
        top: 24,
        left: 24,
      },
    };
    return positions[position] || positions["bottom-right"];
  };

  const handleMainClick = (e) => {
    if (actionItems.length > 0) {
      setIsOpen(!isOpen);
    } else if (onClick) {
      onClick(e);
    }
  };

  const handleActionClick = (childOnClick) => (e) => {
    if (childOnClick) {
      childOnClick(e);
    }
    setIsOpen(false);
  };

  return (
    <div
      ref={fabRef}
      style={{
        ...getPositionStyles(),
        zIndex: 1000,
        display: "flex",
        flexDirection: direction === "up" || direction === "down" ? "column" : "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
      }}
    >
      {/* Action items */}
      {isOpen && actionItems.map((item, index) => {
        const angle = (360 / actionItems.length) * index;
        const radians = (angle * Math.PI) / 180;

        // Calculate positions based on direction
        let transform, top, left, right, bottom;
        if (direction === "up") {
          transform = `translateY(-${distance}px) rotate(${angle}deg)`;
        } else if (direction === "down") {
          transform = `translateY(${distance}px) rotate(${angle}deg)`;
        } else if (direction === "left") {
          transform = `translateX(-${distance}px) rotate(${angle}deg)`;
        } else { // right
          transform = `translateX(${distance}px) rotate(${angle}deg)`;
        }

        return (
          <div
            key={index}
            style={{
              position: "absolute",
              transform: "translateY(0) rotate(0)",
              transition: "transform 0.3s ease, opacity 0.3s ease",
              opacity: 0,
              animation: `fabExpand 0.3s ease forwards ${index * 0.05}s`,
            }}
          >
            {React.cloneElement(item, {
              onClick: handleActionClick(item.props.onClick),
              style: {
                ...item.props.style,
                width: size * 0.8,
                height: size * 0.8,
                fontSize: size * 0.4,
              },
            })}
          </div>
        );
      })}

      {/* Main FAB button */}
      <button
        onClick={handleMainClick}
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          background: `linear-gradient(135deg, ${color} 0%, ${secondaryColor} 100%)`,
          color: "white",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: size * 0.5,
          fontWeight: 600,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
          transition: "all 0.3s ease",
          transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
          zIndex: 1,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = isOpen
            ? "rotate(45deg) scale(1.05)"
            : "rotate(0deg) scale(1.05)";
          e.currentTarget.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.3)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = isOpen
            ? "rotate(45deg) scale(1)"
            : "rotate(0deg) scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
        }}
      >
        {icon}
      </button>

      {/* Animation styles */}
      <style>
        {`
          @keyframes fabExpand {
            from {
              transform: translateY(0) rotate(0);
              opacity: 0;
            }
            to {
              transform: ${direction === "up"
                ? `translateY(-${distance}px)`
                : direction === "down"
                ? `translateY(${distance}px)`
                : direction === "left"
                ? `translateX(-${distance}px)`
                : `translateX(${distance}px)`} rotate(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};