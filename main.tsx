import React, { useState, useEffect } from 'react';

// Define keyframes for animations as JavaScript objects
const fadeInKeyframes = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const slideUpKeyframes = `
  @keyframes slideUp {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
`;

// Add keyframes to the document head
const addKeyframes = () => {
  const style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = fadeInKeyframes + slideUpKeyframes;
  document.head.appendChild(style);
};

// Define styles using JavaScript objects
const fadeInStyle: React.CSSProperties = {
  animation: 'fadeIn 1s ease-in',
};

const slideUpStyle: React.CSSProperties = {
  animation: 'slideUp 1s ease-in-out',
};

const MyComponent: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    addKeyframes(); // Add keyframes to the document head
    const timer = setTimeout(() => setShow(true), 100); // Delay to trigger animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={show ? fadeInStyle : {}}>
      <h1 style={show ? slideUpStyle : {}}>Hello, World!</h1>
    </div>
  );
};

export default MyComponent;
