import React from 'react';

interface LogoProps {
  size?: 'normal' | 'large';
}

const Logo: React.FC<LogoProps> = ({ size = 'normal' }) => {
  const sizeClass = size === 'large' ? 'w-12 h-12' : 'w-10 h-10';
  
  return (
    <div className="flex items-center">
      <div className="text-blue-400 mr-2">
        <svg className={sizeClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 10L90 30V70L50 90L10 70V30L50 10Z" fill="#2563EB" />
          <path d="M30 40L50 50L70 40M30 60L50 70L70 60" stroke="white" strokeWidth="6" />
        </svg>
      </div>
      <div>
        <h1 className="font-bold text-xl">DEEP NET SOFT</h1>
      </div>
    </div>
  );
};

export default Logo;