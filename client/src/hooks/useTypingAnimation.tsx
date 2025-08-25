import { useState, useEffect } from "react";

export function useTypingAnimation(text: string, speed = 50, delay = 1000) {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
        setTimeout(typeWriter, speed);
      } else {
        setIsComplete(true);
      }
    };
    
    const timeout = setTimeout(typeWriter, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return { displayText, isComplete };
}
