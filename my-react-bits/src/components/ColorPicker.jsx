import { useState, useRef, useEffect } from "react";

export const ColorPicker = ({
  value = "#38bdf8",
  onChange,
  showAlpha = false,
  width = 200,
  height = 150,
}) => {
  const [color, setColor] = useState(value);
  const [hue, setHue] = useState(0);
  const [saturation, setSaturation] = useState(100);
  const [lightness, setLightness] = useState(50);
  const [alpha, setAlpha] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const canvasRef = useRef(null);
  const hueRef = useRef(null);
  const alphaRef = useRef(null);

  // Parse initial color
  useEffect(() => {
    if (value) {
      const parsed = parseColor(value);
      if (parsed) {
        setColor(value);
        setHue(parsed.h);
        setSaturation(parsed.s);
        setLightness(parsed.l);
        setAlpha(parsed.a !== undefined ? parsed.a : 1);
      }
    }
  }, [value]);

  // Update color when HSL values change
  useEffect(() => {
    const newColor = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
    setColor(newColor);
    if (onChange && newColor !== value) {
      onChange(newColor);
    }
  }, [hue, saturation, lightness, alpha]);

  // Draw saturation/lightness canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    // Create gradient for current hue
    const gradient = ctx.createLinearGradient(0, 0, width, 0);
    gradient.addColorStop(0, `hsl(${hue}, 100%, 50%)`);
    gradient.addColorStop(1, `hsl(${hue}, 0%, 50%)`);

    // Fill with white
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, width, height);

    // Apply hue gradient
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Apply lightness gradient (top to bottom)
    const lightnessGradient = ctx.createLinearGradient(0, 0, 0, height);
    lightnessGradient.addColorStop(0, "rgba(255, 255, 255, 0)");
    lightnessGradient.addColorStop(1, "rgba(0, 0, 0, 1)");

    ctx.fillStyle = lightnessGradient;
    ctx.fillRect(0, 0, width, height);

    // Draw crosshair
    const x = (saturation / 100) * width;
    const y = ((100 - lightness) / 100) * height;

    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(x, y, 8, 0, Math.PI * 2);
    ctx.stroke();

    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(x, y, 8, 0, Math.PI * 2);
    ctx.stroke();
  }, [hue, saturation, lightness]);

  // Draw hue slider
  useEffect(() => {
    const canvas = hueRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    // Create hue gradient
    const gradient = ctx.createLinearGradient(0, 0, width, 0);
    for (let i = 0; i <= 360; i += 30) {
      gradient.addColorStop(i / 360, `hsl(${i}, 100%, 50%)`);
    }

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Draw hue indicator
    const x = (hue / 360) * width;

    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }, [hue]);

  // Draw alpha slider
  useEffect(() => {
    if (!showAlpha || !alphaRef.current) return;

    const canvas = alphaRef.current;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    // Create alpha gradient
    const gradient = ctx.createLinearGradient(0, 0, width, 0);
    gradient.addColorStop(0, `hsla(${hue}, ${saturation}%, ${lightness}%, 0)`);
    gradient.addColorStop(1, `hsla(${hue}, ${saturation}%, ${lightness}%, 1)`);

    // Checkerboard background for transparency
    for (let y = 0; y < height; y += 10) {
      for (let x = 0; x < width; x += 10) {
        if ((Math.floor(x / 10) + Math.floor(y / 10)) % 2 === 0) {
          ctx.fillStyle = "#ccc";
        } else {
          ctx.fillStyle = "#999";
        }
        ctx.fillRect(x, y, 10, 10);
      }
    }

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Draw alpha indicator
    const x = alpha * width;

    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }, [hue, saturation, lightness, alpha, showAlpha]);

  const parseColor = (colorString) => {
    if (!colorString) return null;

    // Handle hex
    if (colorString.startsWith("#")) {
      const hex = colorString.replace("#", "");
      let r, g, b, a = 1;

      if (hex.length === 3 || hex.length === 4) {
        r = parseInt(hex[0] + hex[0], 16);
        g = parseInt(hex[1] + hex[1], 16);
        b = parseInt(hex[2] + hex[2], 16);
        if (hex.length === 4) a = parseInt(hex[3] + hex[3], 16) / 255;
      } else if (hex.length === 6 || hex.length === 8) {
        r = parseInt(hex.substring(0, 2), 16);
        g = parseInt(hex.substring(2, 4), 16);
        b = parseInt(hex.substring(4, 6), 16);
        if (hex.length === 8) a = parseInt(hex.substring(6, 8), 16) / 255;
      }

      return rgbToHsl(r, g, b, a);
    }

    // Handle rgb/rgba
    const rgbMatch = colorString.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
    if (rgbMatch) {
      const r = parseInt(rgbMatch[1]);
      const g = parseInt(rgbMatch[2]);
      const b = parseInt(rgbMatch[3]);
      const a = rgbMatch[4] ? parseFloat(rgbMatch[4]) : 1;
      return rgbToHsl(r, g, b, a);
    }

    // Handle hsl/hsla
    const hslMatch = colorString.match(/hsla?\((\d+),\s*([\d.]+)%,\s*([\d.]+)%(?:,\s*([\d.]+))?\)/);
    if (hslMatch) {
      return {
        h: parseInt(hslMatch[1]),
        s: parseFloat(hslMatch[2]),
        l: parseFloat(hslMatch[3]),
        a: hslMatch[4] ? parseFloat(hslMatch[4]) : 1,
      };
    }

    return null;
  };

  const rgbToHsl = (r, g, b, a = 1) => {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0; // achromatic
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }

      h *= 60;
    }

    return {
      h: Math.round(h),
      s: Math.round(s * 100),
      l: Math.round(l * 100),
      a: a,
    };
  };

  const handleCanvasClick = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const sat = Math.min(100, Math.max(0, (x / canvas.width) * 100));
    const light = Math.min(100, Math.max(0, 100 - (y / canvas.height) * 100));

    setSaturation(sat);
    setLightness(light);
  };

  const handleHueClick = (e) => {
    const canvas = hueRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;

    const newHue = Math.min(360, Math.max(0, (x / canvas.width) * 360));
    setHue(newHue);
  };

  const handleAlphaClick = (e) => {
    if (!showAlpha) return;

    const canvas = alphaRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;

    const newAlpha = Math.min(1, Math.max(0, x / canvas.width));
    setAlpha(newAlpha);
  };

  const handleMouseDown = (type) => {
    setIsDragging(type);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging === "saturation-lightness") {
      handleCanvasClick(e);
    } else if (isDragging === "hue") {
      handleHueClick(e);
    } else if (isDragging === "alpha") {
      handleAlphaClick(e);
    }
  };

  return (
    <div
      style={{
        width: width,
        fontFamily: "sans-serif",
        userSelect: "none",
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div style={{ marginBottom: 12 }}>
        <div
          style={{
            width: "100%",
            height: 30,
            backgroundColor: color,
            borderRadius: 6,
            marginBottom: 8,
            border: "1px solid #1f2933",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: getContrastColor(color),
              fontSize: 12,
              fontWeight: 600,
            }}
          >
            {color.toUpperCase()}
          </div>
        </div>
      </div>

      <div style={{ marginBottom: 12 }}>
        <canvas
          ref={canvasRef}
          width={width}
          height={height}
          onClick={handleCanvasClick}
          onMouseDown={() => handleMouseDown("saturation-lightness")}
          style={{
            width: "100%",
            height: height,
            borderRadius: 6,
            border: "1px solid #1f2933",
            cursor: "crosshair",
          }}
        />
      </div>

      <div style={{ marginBottom: showAlpha ? 12 : 0 }}>
        <canvas
          ref={hueRef}
          width={width}
          height={15}
          onClick={handleHueClick}
          onMouseDown={() => handleMouseDown("hue")}
          style={{
            width: "100%",
            height: 15,
            borderRadius: 4,
            border: "1px solid #1f2933",
            cursor: "pointer",
          }}
        />
      </div>

      {showAlpha && (
        <div>
          <canvas
            ref={alphaRef}
            width={width}
            height={15}
            onClick={handleAlphaClick}
            onMouseDown={() => handleMouseDown("alpha")}
            style={{
              width: "100%",
              height: 15,
              borderRadius: 4,
              border: "1px solid #1f2933",
              cursor: "pointer",
            }}
          />
        </div>
      )}
    </div>
  );
};

// Helper function to get contrast color
const getContrastColor = (hexColor) => {
  // Convert hex to RGB
  const r = parseInt(hexColor.substr(1, 2), 16);
  const g = parseInt(hexColor.substr(3, 2), 16);
  const b = parseInt(hexColor.substr(5, 2), 16);

  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Return black or white depending on luminance
  return luminance > 0.5 ? "#000" : "#fff";
};