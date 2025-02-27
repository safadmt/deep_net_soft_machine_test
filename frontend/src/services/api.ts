import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;
console.log("Backend API URL:", apiUrl);
axios.defaults.baseURL = apiUrl

export interface Menu {
    id: string;
    name: string;
    description: string;
    items : IMenuItem[];
    createdAt?: Date;
    updatedAt?: Date;
  }
  
  export interface IMenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    menuId: string;
    createdAt?: Date;
    updatedAt?: Date;
  }
  
  // Define interface for creating a new menu
  export interface CreateMenuDto {
    name: string;
    description: string;
  }
  
  // Define interface for creating a new menu item
  export interface CreateMenuItemDto {
    name: string;
    description: string;
    price: number;
    menuId: string;
  }
  
  // Define interface for updating a menu
  export interface UpdateMenuDto {
    name?: string;
    description?: string;
  }
  
  // Define interface for updating a menu item
  export interface UpdateMenuItemDto {
    name?: string;
    description?: string;
    price?: number;
  }
  
  // Menu API methods
  export const createMenu = async (menuData: CreateMenuDto): Promise<Menu> => {
    try {
      const response = await axios.post("/api/menus", menuData);
      return response.data;
    } catch (error) {
      console.error("Error creating menu:", error);
      throw error;
    }
  };
  
  export const getMenus = async (): Promise<Menu[]> => {
    try {
      const response = await axios.get("/api/menus");
      return response.data?.data;
    } catch (error) {
      console.error("Error fetching menus:", error);
      throw error;
    }
  };
  
  export const getOneMenu = async (menuId: string): Promise<Menu> => {
    try {
      const response = await axios.get(`/api/menus/${menuId}`);
      return response.data.data;
    } catch (error) {
      console.error(`Error fetching menu with ID ${menuId}:`, error);
      throw error;
    }
  };
  
  export const updateMenu = async (menuId: string, menuData: UpdateMenuDto): Promise<Menu> => {
    try {
      const response = await axios.patch<Menu>(`/api/menus/${menuId}`, menuData);
      return response.data;
    } catch (error) {
      console.error(`Error updating menu with ID ${menuId}:`, error);
      throw error;
    }
  };
  
  export const deleteMenu = async (menuId: string): Promise<void> => {
    try {
      await axios.delete(`/api/menus/${menuId}`);
    } catch (error) {
      console.error(`Error deleting menu with ID ${menuId}:`, error);
      throw error;
    }
  };
  
  // Menu Item API methods
  export const createMenuItem = async (menuItemData: CreateMenuItemDto): Promise<IMenuItem> => {
    try {
      const response = await axios.post<IMenuItem>("/api/menuitem", menuItemData);
      return response.data;
    } catch (error) {
      console.error("Error creating menu item:", error);
      throw error;
    }
  };
  
  
  
  export const deleteMenuItem = async (menuItemId: string): Promise<void> => {
    try {
      await axios.delete(`/api/menu-items/${menuItemId}`);
    } catch (error) {
      console.error(`Error deleting menu item with ID ${menuItemId}:`, error);
      throw error;
    }
  };