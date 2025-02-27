import React, { useEffect, useState } from 'react';
import MenuHero from './MenuHero';
import MenuTabs from './MenuTabs';
import MenuItems from './MenuItems';
import MenuDecorations from './MenuDecorations';
import { MenuTab } from '../../types';
import { getMenus, getOneMenu, IMenuItem, Menu } from '../../services/api';
import { useMenuContext } from '../../context/MenuContext';

export interface IActiveTab {
  name: string;
  id: string
}

const MenuSection: React.FC = () => {
  const {state,dispatch} = useMenuContext()
  const [menus, setMenus] = useState<Menu[]>([])
  const [menu, setMenu] = useState<Menu | null>(null)
  const [menuName, setMenuName] = useState<IActiveTab[] | []>([])
  const [activeTab, setActiveTab] = useState<IActiveTab>({name:"",id:""});
  const [menuItems, setMenuItems] = useState<IMenuItem[]>([])

  const fetchMenus = async () => {
      try {
        const data:Menu[] | [] = await getMenus();
        console.log(data)
        dispatch({type: "SET_MENUS",payload:data})
        if(data?.length > 0) {
          
          const {name,id} = data[0]
          setActiveTab({name,id})
          let menunames = data.map((menu)=> ({name:menu.name, id:menu.id}))
        setMenuName(menunames)
        setMenus(data);
      
         
        
        }
        
      } catch (error) {
        console.error("Error fetching menus:", error);
      }
    };
  useEffect(() => {
    // Fetch menus from the server
    fetchMenus();
  }, []);
async function fetchMenu (id:string)  {
        try{
          const menu : Menu = await getOneMenu(id)
          setMenu(menu)
        }catch(err) {
          console.error("Error fetching menus:", err);
        }
      }
  useEffect(()=> {
    if(activeTab.id) {
      
      fetchMenu(activeTab.id)
    }
    
  },[activeTab.id])
  
  useEffect(() => {
    console.log(state.newitem)
    if (state.newitem) {
      console.log(state.newitem, "menusecton")
      fetchMenus();
      dispatch({type:"NEW_ITEM_ADDED", payload: false})
    }
  }, [state.newitem]);
  return (
    <main className="flex-grow bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Menu Hero Section */}
        <MenuHero />
        
        {/* Menu Tabs */}
        <MenuTabs activeTab={activeTab as IActiveTab} setActiveTab={setActiveTab} menunames={menuName}/>
        
        {/* Menu Content */}
        <MenuItems activeTab={activeTab as IActiveTab} menuItem={menu}/>
        
        {/* Drink Images */}
        <MenuDecorations />
      </div>
    </main>
  );
};

export default MenuSection;