import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
  text: string;
  delay?: number;
}

export function TypingEffect({ text, delay = 50 }: TypingEffectProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <span>
      {displayText}
      {currentIndex < text.length && <span className="animate-pulse">▊</span>}
    </span>
  );
}