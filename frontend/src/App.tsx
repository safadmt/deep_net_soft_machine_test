import React, { useState } from 'react';
import Header from './components/layout/Header';
import MenuSection from './components/menu/MenuSection';
import Footer from './components/layout/Footer';
import { MenuProvider } from './context/MenuContext';

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = (): void => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <MenuProvider>
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header 
        mobileMenuOpen={mobileMenuOpen} 
        toggleMobileMenu={toggleMobileMenu} 
      />
      
     
      
      <MenuSection />
      
      <Footer />
      
    </div>
    </MenuProvider>
  );
};

export default App;
