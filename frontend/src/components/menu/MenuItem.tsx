import React from 'react';
import { MenuItem as MenuItemType } from '../../types';

const MenuItem: React.FC<MenuItemType> = ({ name, description, price }) => {
  return (
    <div className="flex justify-between items-start">
      <div>
        <h4 className="font-bold">{name}</h4>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
      <div className="font-bold">{price}</div>
    </div>
  );
};

export default MenuItem;