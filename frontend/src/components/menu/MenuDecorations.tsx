import React from 'react';

const MenuDecorations: React.FC = () => {
  return (
    <div className="relative mb-8">
      <div className="absolute -top-8 left-4">
        <img src="/api/placeholder/100/180" alt="cocktail" className="object-cover" />
      </div>
      <div className="absolute bottom-0 right-4">
        <img src="/api/placeholder/120/120" alt="cocktail" className="object-cover" />
      </div>
    </div>
  );
};

export default MenuDecorations;