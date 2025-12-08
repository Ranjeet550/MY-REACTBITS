export const GlitchText = ({ 
  children, 
  color = "#667eea",
  fontSize = 32 
}) => {
  return (
    <div
      className="glitch-text"
      data-text={children}
      style={{
        fontSize: fontSize,
        fontWeight: 700,
        color: color,
        position: "relative",
        display: "inline-block",
      }}
    >
      {children}
      <style>{`
        .glitch-text {
          animation: glitch 1s linear infinite;
        }

        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .glitch-text::before {
          left: 2px;
          text-shadow: -2px 0 #ff00c1;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim 5s infinite linear alternate-reverse;
        }

        .glitch-text::after {
          left: -2px;
          text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim2 5s infinite linear alternate-reverse;
        }

        @keyframes glitch-anim {
          0% { clip: rect(10px, 9999px, 31px, 0); }
          10% { clip: rect(70px, 9999px, 71px, 0); }
          20% { clip: rect(64px, 9999px, 33px, 0); }
          30% { clip: rect(17px, 9999px, 94px, 0); }
          40% { clip: rect(84px, 9999px, 11px, 0); }
          50% { clip: rect(50px, 9999px, 96px, 0); }
          60% { clip: rect(76px, 9999px, 68px, 0); }
          70% { clip: rect(38px, 9999px, 85px, 0); }
          80% { clip: rect(2px, 9999px, 46px, 0); }
          90% { clip: rect(59px, 9999px, 8px, 0); }
          100% { clip: rect(29px, 9999px, 61px, 0); }
        }

        @keyframes glitch-anim2 {
          0% { clip: rect(65px, 9999px, 100px, 0); }
          10% { clip: rect(52px, 9999px, 74px, 0); }
          20% { clip: rect(79px, 9999px, 85px, 0); }
          30% { clip: rect(75px, 9999px, 5px, 0); }
          40% { clip: rect(67px, 9999px, 61px, 0); }
          50% { clip: rect(14px, 9999px, 79px, 0); }
          60% { clip: rect(1px, 9999px, 66px, 0); }
          70% { clip: rect(86px, 9999px, 30px, 0); }
          80% { clip: rect(23px, 9999px, 98px, 0); }
          90% { clip: rect(82px, 9999px, 87px, 0); }
          100% { clip: rect(51px, 9999px, 55px, 0); }
        }
      `}</style>
    </div>
  );
};
