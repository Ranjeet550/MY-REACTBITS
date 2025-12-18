import { useState, useEffect, useRef } from "react";

const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

export const DatePicker = ({
  value,
  onChange,
  placeholder = "Select a date",
  minDate,
  maxDate,
}) => {
  const formatDate = (date) => {
    if (!date) return "";
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  const [isOpen, setIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(value ? new Date(value) : new Date());
  const [displayDate, setDisplayDate] = useState(value ? new Date(value) : new Date());
  const [inputValue, setInputValue] = useState(
    value ? formatDate(new Date(value)) : ""
  );
  const pickerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (value) {
      setCurrentDate(new Date(value));
      setDisplayDate(new Date(value));
      setInputValue(formatDate(new Date(value)));
    }
  }, [value]);

  const handleDateSelect = (date) => {
    setCurrentDate(date);
    setDisplayDate(date);
    setInputValue(formatDate(date));
    setIsOpen(false);
    if (onChange) {
      onChange(date);
    }
  };

  const handleInputClick = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputBlur = () => {
    // Simple date parsing - could be enhanced
    const parts = inputValue.split("/");
    if (parts.length === 3) {
      const month = parseInt(parts[0]) - 1;
      const day = parseInt(parts[1]);
      const year = parseInt(parts[2]);

      if (!isNaN(month) && !isNaN(day) && !isNaN(year)) {
        const newDate = new Date(year, month, day);
        if (!isNaN(newDate.getTime())) {
          handleDateSelect(newDate);
        }
      }
    }
  };

  const renderHeader = () => (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "8px 16px",
      backgroundColor: "#020617",
      borderBottom: "1px solid #1f2933",
    }}>
      <button
        onClick={() => {
          setDisplayDate(new Date(displayDate.getFullYear(), displayDate.getMonth() - 1, 1));
        }}
        style={{
          background: "none",
          border: "none",
          color: "#9ca3af",
          cursor: "pointer",
          fontSize: 16,
          padding: "4px 8px",
        }}
      >
        ‹
      </button>

      <div style={{ color: "#fff", fontWeight: 600 }}>
        {displayDate.toLocaleString("default", { month: "long" })} {displayDate.getFullYear()}
      </div>

      <button
        onClick={() => {
          setDisplayDate(new Date(displayDate.getFullYear(), displayDate.getMonth() + 1, 1));
        }}
        style={{
          background: "none",
          border: "none",
          color: "#9ca3af",
          cursor: "pointer",
          fontSize: 16,
          padding: "4px 8px",
        }}
      >
        ›
      </button>
    </div>
  );

  const renderDays = () => {
    const days = [];
    const firstDay = getFirstDayOfMonth(displayDate.getFullYear(), displayDate.getMonth());
    const totalDays = daysInMonth(displayDate.getFullYear(), displayDate.getMonth());

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} style={{ padding: "8px", height: 40 }}></div>);
    }

    // Add days of the month
    for (let day = 1; day <= totalDays; day++) {
      const date = new Date(displayDate.getFullYear(), displayDate.getMonth(), day);
      const isSelected =
        currentDate &&
        date.toDateString() === currentDate.toDateString();

      const isDisabled =
        (minDate && date < new Date(minDate)) ||
        (maxDate && date > new Date(maxDate));

      days.push(
        <div
          key={`day-${day}`}
          style={{
            padding: "8px",
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: isDisabled ? "not-allowed" : "pointer",
            borderRadius: 6,
            backgroundColor: isSelected ? "#38bdf8" : "transparent",
            color: isSelected ? "#000" : isDisabled ? "#4b5563" : "#fff",
            fontWeight: isSelected ? 600 : 400,
            transition: "all 0.2s",
          }}
          onClick={() => !isDisabled && handleDateSelect(date)}
          onMouseEnter={(e) => !isDisabled && (e.currentTarget.style.backgroundColor = "rgba(56, 189, 248, 0.2)")}
          onMouseLeave={(e) => !isDisabled && (e.currentTarget.style.backgroundColor = isSelected ? "#38bdf8" : "transparent")}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <div ref={pickerRef} style={{ position: "relative", width: 250 }}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onClick={handleInputClick}
        onBlur={handleInputBlur}
        placeholder={placeholder}
        style={{
          width: "100%",
          padding: "10px 12px",
          backgroundColor: "#020617",
          border: "1px solid #1f2933",
          borderRadius: 8,
          color: "#fff",
          fontSize: 14,
          outline: "none",
          transition: "all 0.2s",
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = "#38bdf8";
          e.currentTarget.style.boxShadow = "0 0 0 2px rgba(56, 189, 248, 0.2)";
        }}
        onBlurCapture={(e) => {
          e.currentTarget.style.borderColor = "#1f2933";
          e.currentTarget.style.boxShadow = "none";
        }}
      />

      {isOpen && (
        <div style={{
          position: "absolute",
          top: "100%",
          left: 0,
          marginTop: 8,
          width: "100%",
          backgroundColor: "#0b0c10",
          border: "1px solid #1f2933",
          borderRadius: 8,
          padding: "8px",
          zIndex: 1000,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
        }}>
          {renderHeader()}

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: "4px",
            padding: "8px",
          }}>
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div
                key={day}
                style={{
                  textAlign: "center",
                  fontSize: 12,
                  color: "#9ca3af",
                  padding: "4px 0",
                }}
              >
                {day}
              </div>
            ))}
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: "4px",
          }}>
            {renderDays()}
          </div>
        </div>
      )}
    </div>
  );
};