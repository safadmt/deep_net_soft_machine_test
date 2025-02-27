import { PrismaClient } from "@prisma/client";
import { Menu, MenuItem } from "../types/menu.types";

const prisma = new PrismaClient();

// ✅ Create a menu
export const createaMenu = async (menuData: Menu) => {
  const menu =  await prisma.menu.create({
    data: {
      name: menuData.name,
      description: menuData.description,
    },
    include: { items: true }, // Return menu with items
    
  });
  return menu
};

// ✅ Get all menus
export const getAllMenu = async (): Promise<Menu[]> => {
    return await prisma.menu.findMany({ include: { items: true } });
};

// ✅ Get a menu by ID
export const getMenu = async (menuId: string): Promise<Menu | null> => {
  return await prisma.menu.findUnique({
    where: { id: menuId },
    include: { items: true },
  });
};

// ✅ Add a menu item to an existing menu
export const addMenuItem = async (item: MenuItem) => {
  return await prisma.menuItem.create({
    data: {
      name: item.name,
      description: item.description,
      price: item.price,
      menuId: item.menuId,
    },
  });
};
