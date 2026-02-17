import React from 'react';

const Loader = () => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '50vh' 
    }}>
      <div className="spinner">Loading...</div>
      {/* You can add a CSS spinner here later */}
    </div>
  );
};

export default Loader;