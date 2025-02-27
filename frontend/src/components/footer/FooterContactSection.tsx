import React from 'react';
import { Phone, Mail } from 'lucide-react';

const FooterContactSection: React.FC = () => {
  return (
    <div className="text-center border border-gray-800 p-4">
      <h3 className="text-blue-400 text-sm mb-2">CONNECT WITH US</h3>
      <div className="flex items-center justify-center mb-2">
        <Phone size={16} className="mr-2" />
        <span>+91 1234 567890</span>
      </div>
      <div className="flex items-center justify-center">
        <Mail size={16} className="mr-2" />
        <span>info@deepnetsoft.com</span>
      </div>
    </div>
  );
};

export default FooterContactSection;