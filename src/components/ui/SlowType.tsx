import React, { useEffect, useState } from 'react';

interface SlowTypeProps {
  text: string;
  typingSpeed?: number;
}

const SlowType: React.FC<SlowTypeProps> = ({ text, typingSpeed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let index = 0;
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

    return () => clearInterval(timer);
  }, [text, typingSpeed]);

  return <span>{displayedText}</span>;
};

export default SlowType;
