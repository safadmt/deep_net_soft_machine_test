import React from 'react';
import { MenuTab } from '../../types';
import { IActiveTab } from './MenuSection';

interface MenuTabsProps {
  activeTab: IActiveTab;
  setActiveTab: (tab: IActiveTab) => void;
  menunames : IActiveTab[]
}

const MenuTabs: React.FC<MenuTabsProps> = ({ activeTab, setActiveTab, menunames}) => {
  return (
    <div className="flex justify-center space-x-2 mb-8">
      {menunames.length > 0 &&
        menunames.map((menu) => (
          <button
            key={menu.id}
            className={`px-6 py-2 ${
              activeTab.id === menu.id ? "bg-black text-white border border-white" : "bg-gray-900"
            }`}
            onClick={() => setActiveTab({name:menu.name, id:menu.id})}
          >
            {menu.name.toUpperCase()} {/* Convert menu name to uppercase */}
          </button>
        ))}

      
    </div>
  );
};

export default MenuTabs;