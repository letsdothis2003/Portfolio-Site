import React from 'react';

const Footer = () => {
  return (
    <footer style={{ 
      padding: '2rem', 
      textAlign: 'center', 
      marginTop: 'auto',
      borderTop: '1px solid #ccc' 
    }}>
      <p>&copy; {new Date().getFullYear()} Fahim T. Built with React.</p>
    </footer>
  );
};

export default Footer;