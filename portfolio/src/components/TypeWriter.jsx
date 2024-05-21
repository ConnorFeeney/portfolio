import { useEffect, useState } from "react";

const TypeWriter = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setStartTyping(true);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (startTyping) {
      const intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(prevText => prevText + text[currentIndex]);
          setCurrentIndex(prevIndex => prevIndex + 1);
        } else {
          clearInterval(intervalId);
        }
      }, 130);

      return () => clearInterval(intervalId);
    }
  }, [currentIndex, startTyping, text]);

  const cursorStyle = { display: currentIndex < text.length ? 'inline' : 'none' };

  return (
    <span style={{ display: 'inline-block' }}>
      {displayText}
      <span style={cursorStyle}>|</span>
    </span>
  );
  };
  
  export default TypeWriter;