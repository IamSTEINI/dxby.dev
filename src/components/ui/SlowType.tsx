import React, { useEffect, useState } from 'react';

interface SlowTypeProps {
  text: string;
  typingSpeed?: number;
  delay?: number; // Optional delay in milliseconds
}

const SlowType: React.FC<SlowTypeProps> = ({ text, typingSpeed = 100, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;

    const startTyping = () => {
      const timer = setInterval(() => {
        setDisplayedText((prevText) => {
          if (index < text.length) {
            return prevText + text[index++];
          } else {
            clearInterval(timer);
            return prevText;
          }
        });
      }, typingSpeed / 50);
    };

    const delayTimeout = setTimeout(startTyping, delay);

    return () => {
      clearTimeout(delayTimeout);
    };
  }, [text, typingSpeed, delay]);

  return <span>{displayedText}</span>;
};

export default SlowType;
