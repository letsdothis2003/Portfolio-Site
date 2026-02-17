import React from 'react';

const Footer = () => {
  return (
    <footer style={{ 
      padding: '2rem', 
      textAlign: 'center', 
      marginTop: 'auto',
      borderTop: '1px solid #ccc' 
    }}>
      <p>&copy; 2024-{new Date().getFullYear()} F. Tanvir. Site made with React and Github Pages.</p>
    </footer>
  );
};

export default Footer;