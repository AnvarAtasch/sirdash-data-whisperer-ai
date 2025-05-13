
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center">
      <img 
        src="/images/sirdash-logo-circle.png" 
        alt="SirDash Logo" 
        className="h-8 w-auto"
      />
      <span className="ml-2 text-xl font-semibold text-gray-800 dark:text-white">SirDash</span>
    </div>
  );
};

export default Logo;
