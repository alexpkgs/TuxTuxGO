import React, { useState, useEffect } from 'react';

// Define keyframes for fade-out animation
const fadeOutKeyframes = `
  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }
`;

// Add keyframes to the document head
const addKeyframes = () => {
  const style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = fadeOutKeyframes;
  document.head.appendChild(style);
};

// Styles for fade-out effect
const fadeOutStyle: React.CSSProperties = {
  animation: 'fadeOut 1s ease-out',
};

const PageTransition: React.FC = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    addKeyframes(); // Add keyframes to the document head
    const timer = setTimeout(() => setShow(false), 3000); // 3 seconds to fade out
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={show ? {} : fadeOutStyle}>
      <h1>Page Content</h1>
    </div>
  );
};

export default PageTransition;
