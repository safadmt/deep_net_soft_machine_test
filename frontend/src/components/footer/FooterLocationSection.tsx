import React from 'react';
import { MapPin } from 'lucide-react';

const FooterLocationSection: React.FC = () => {
  return (
    <div className="text-center border border-gray-800 p-4">
      <h3 className="text-blue-400 text-sm mb-2">FIND US</h3>
      <div className="flex items-center justify-center">
        <MapPin size={16} className="mr-2" />
        <span>Free Floor, Gas Station, Network City, California</span>
      </div>
    </div>
  );
};

export default FooterLocationSection;