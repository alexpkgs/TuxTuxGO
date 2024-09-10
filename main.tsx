import React, { useState, useEffect } from 'react';

// Define animation styles
const fadeInStyle: React.CSSProperties = {
  opacity: 1,
  transition: 'opacity 1s ease-in'
};

const fadeOutStyle: React.CSSProperties = {
  opacity: 0,
  transition: 'opacity 1s ease-in'
};

const slideUpStyle: React.CSSProperties = {
  transform: 'translateY(0)',
  transition: 'transform 1s ease-in-out',
};

const slideDownStyle: React.CSSProperties = {
  transform: 'translateY(20px)',
  transition: 'transform 1s ease-in-out',
};

const MyComponent: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100); // Delay to trigger animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={show ? fadeInStyle : fadeOutStyle}>
      <h1 style={show ? slideUpStyle : slideDownStyle}>Hello, World!</h1>
    </div>
  );
};

export default MyComponent;
