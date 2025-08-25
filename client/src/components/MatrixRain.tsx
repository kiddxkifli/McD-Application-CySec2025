import { useEffect } from "react";

export default function MatrixRain() {
  useEffect(() => {
    const container = document.getElementById('matrixBg');
    if (!container) return;

    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    
    function createChar() {
      const char = document.createElement('div');
      char.className = 'matrix-char';
      char.textContent = chars[Math.floor(Math.random() * chars.length)];
      char.style.left = Math.random() * window.innerWidth + 'px';
      char.style.animationDuration = (Math.random() * 3 + 2) + 's';
      char.style.opacity = (Math.random() * 0.7 + 0.3).toString();
      container.appendChild(char);
      
      setTimeout(() => {
        char.remove();
      }, 5000);
    }
    
    const interval = setInterval(createChar, 100);
    
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div 
      id="matrixBg" 
      className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10"
    />
  );
}
