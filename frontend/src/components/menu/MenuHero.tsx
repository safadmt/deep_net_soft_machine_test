import React from 'react';

const MenuHero: React.FC = () => {
  return (
    <div className="relative mb-8">
      <div className="absolute top-0 left-0 w-24 h-24">
        <img src="/api/placeholder/100/100" alt="plant decoration" className="object-cover" />
      </div>
      <div className="text-center py-8">
        <h2 className="text-4xl font-bold mb-4">MENU</h2>
        <p className="max-w-xl mx-auto text-sm text-gray-400">
          Taste, style, first-class comfort, food, drinks, and friends. If you live in the area or visiting, hit the "Order" button below, come enjoy our menu.
        </p>
      </div>
    </div>
  );
};

export default MenuHero;