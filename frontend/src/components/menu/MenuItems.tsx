import React from 'react';
import MenuItem from './MenuItem';
import { MenuTab } from '../../types';
import { IMenuItem, Menu } from 'services/api';
import { IActiveTab } from './MenuSection';

interface MenuItemsProps {
  activeTab: IActiveTab | null;
  menuItem : Menu | null
}

const MenuItems: React.FC<MenuItemsProps> = ({ activeTab ,menuItem}) => {
  // In a real app, we would fetch menu items based on the active tab
  // For now, we'll just show brunch cocktails
  if (!menuItem) {
    return null; // Don't render anything if menuItem is null
  }

  return (
    <div className="border border-gray-800 bg-gray-900 bg-opacity-80 p-6 mb-8">
      <h3 className="text-2xl font-bold text-center mb-6 flex items-center justify-center">
        <span className="border-t border-gray-600 w-16 mr-4"></span>
       {menuItem.name.toUpperCase()}
        <span className="border-t border-gray-600 w-16 ml-4"></span>
      </h3>
      
      <div className="space-y-6">
        {menuItem.items.length > 0 ? (
          menuItem.items.map((item) => (
            <MenuItem 
              key={item.id} 
              name={item.name} 
              description={item.description} 
              price={`₹${item.price}`} 
            />
          ))
        ) : (
          <p className="text-center text-gray-400">No items available</p>
        )}
      </div>
    </div>
  );
};

export default MenuItems;