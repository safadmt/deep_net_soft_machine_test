import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../ui/Logo';
import MenuCreationModal from '../model/MenuCreationModal';
import { getMenus, Menu as MenuI } from '../../services/api';
import MenuItemCreationModal from '../model/MenuItemCreationModel';

interface HeaderProps {
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ mobileMenuOpen, toggleMobileMenu }) => {
  const [menuModalOpen, setMenuModalOpen] = useState(false);
  const [menuName, setMenuNames] = useState<{ name: string; id: string }[]>([]);
  const [showMenus, setShowMenus] = useState(false);
  const [itemModalOpen, setItemModalOpen] = useState(false);
  const [selectedMenuId, setSelectedMenuId] = useState<string | null>(null);

  const openMenuModal = () => setMenuModalOpen(true);
  const closeMenuModal = () => setMenuModalOpen(false);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const data: MenuI[] = await getMenus();
        const menunames = data.map((menu) => ({ name: menu.name, id: menu.id }));
        console.log(menunames);
        setMenuNames(menunames);
      } catch (error) {
        console.error("Error fetching menus:", error);
      }
    };

    fetchMenus();
  }, []);

  const openItemModal = (menuId: string) => {
    console.log("Opening modal for menu:", menuId);
    setSelectedMenuId(menuId);
    setItemModalOpen(true);
  };

  const closeItemModal = () => {
    setItemModalOpen(false);
    setSelectedMenuId(null);
  };

  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-blue-400">HOME</a>

          <div className="relative group">
            <a
              href="#"
              className="hover:text-blue-400 text-blue-400"
              onMouseEnter={() => setShowMenus(true)}
              onMouseLeave={() => {
                setTimeout(() => setShowMenus(false), 2000);
              }}
            >
              MENU
            </a>
            {showMenus && (
              <div
                className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md p-2"
                onMouseEnter={() => setShowMenus(true)}
              >
                {menuName.length > 0 ? (
                  menuName.map((menu, index) => (
                    <div key={index} className="flex justify-between">
                      <button
                        onClick={() => openItemModal(menu.id)}
                        className="text-blue-600 hover:cursor-pointer"
                      >
                        <span>{menu.name}</span> + Add Item
                      </button>
                    </div>
                  ))
                ) : (
                  <p className="p-2 text-gray-500">No menus found</p>
                )}
              </div>
            )}
          </div>
          <a href="#" className="hover:text-blue-400">MAKE A RESERVATION</a>
          <button className="hover:text-blue-400" onClick={openMenuModal}>CREATE MENU</button>
          <a href="#" className="hover:text-blue-400">CONTACT US</a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-black text-white p-4 mt-4">
          <a href="#" className="block hover:text-blue-400 py-2">HOME</a>

          <div className="relative">
            <button
              onClick={() => setShowMenus(!showMenus)}
              className="w-full text-left hover:text-blue-400 py-2 text-blue-400"
            >
              MENU
            </button>
            {showMenus && (
              <div className="pl-4">
                {menuName.length > 0 ? (
                  menuName.map((menu, index) => (
                    <div key={index} className="flex justify-between py-1">
                      <button
                        onClick={() => openItemModal(menu.id)}
                        className="text-blue-600 hover:cursor-pointer"
                      >
                        <span>{menu.name}</span> + Add Item
                      </button>
                    </div>
                  ))
                ) : (
                  <p className="py-2 text-gray-500">No menus found</p>
                )}
              </div>
            )}
          </div>

          <a href="#" className="block hover:text-blue-400 py-2">MAKE A RESERVATION</a>
          <button className="block hover:text-blue-400 py-2" onClick={openMenuModal}>CREATE MENU</button>
          <a href="#" className="block hover:text-blue-400 py-2">CONTACT US</a>
        </nav>
      )}

      {menuModalOpen && (
        <MenuCreationModal isOpen={menuModalOpen} onClose={closeMenuModal} />
      )}
      {itemModalOpen && selectedMenuId && (
        <MenuItemCreationModal
          isOpen={itemModalOpen}
          onClose={closeItemModal}
          menuId={selectedMenuId}
        />
      )}
    </header>
  );
};

export default Header;
