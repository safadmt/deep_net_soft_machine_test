import React from 'react';
import Logo from '../ui/Logo';
import FooterContactSection from '../footer/FooterContactSection';
import FooterLocationSection from '../footer/FooterLocationSection';
import FooterCopyright from '../footer/FooterCopyright';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FooterContactSection />
          
          <div className="text-center p-4 flex flex-col items-center">
            <Logo size="large" />
          </div>
          
          <FooterLocationSection />
        </div>
        
        <FooterCopyright />
      </div>
    </footer>
  );
};

export default Footer;