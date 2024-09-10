import React, { useState, useEffect } from 'react';

// Define keyframes for loading spinner
const loadingSpinnerKeyframes = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

// Add keyframes to the document head
const addKeyframes = () => {
  const style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = loadingSpinnerKeyframes;
  document.head.appendChild(style);
};

// Styles for spinner
const spinnerStyle: React.CSSProperties = {
  border: '8px solid #f3f3f3',
  borderTop: '8px solid #3498db',
  borderRadius: '50%',
  width: '60px',
  height: '60px',
  animation: 'spin 1s linear infinite',
};

// Styles for overlay
const overlayStyle: React.CSSProperties = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const LoadingSpinner: React.FC = () => {
  useEffect(() => {
    addKeyframes(); // Add keyframes to the document head
  }, []);

  return (
    <div style={overlayStyle}>
      <div style={spinnerStyle}></div>
    </div>
  );
};

// Example of a page component with loading animation
const PageWithLoading: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 3000); // 3 seconds loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? <LoadingSpinner /> : <div>Your content goes here</div>}
    </div>
  );
};

export default PageWithLoading;

