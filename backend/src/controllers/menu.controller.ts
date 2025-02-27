import { Request, Response } from "express";
import { Prisma, PrismaClient } from "@prisma/client";
import { createaMenu, getAllMenu, getMenu } from "../services/menu.service";

const prisma = new PrismaClient();

// Get all menus
export const getMenus = async (req: Request, res: Response) => {
  try {
    const menus = await getAllMenu()
    console.log(menus)
    res.status(200).json({data: menus});
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Failed to get Menus" });
  }
};

// Get menu by ID
export const getMenuById = async (req: Request, res: Response) => {
  try {
    const { menuId } = req.params;
    const menu = await getMenu(menuId)

    if (!menu) {
        res.status(404).json({ error: "Menu not found" });
        return
    }
    res.status(200).json({data:menu});
  } catch (error) {
    res.status(500).json({ error: "Failed to get menu" });
  }
};

// Create menu
export const createMenu = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    if(!name || !description) {
        res.status(400).json({error: "Name or Description field are required"})
    }
    const newMenu = await createaMenu({name,description})
    res.status(201).json({data: newMenu});
  } catch (error) {
    if(error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
               res.status(409).json({error: 'A new menu cannot be created with this name'})  
                return
              }
        }
    res.status(500).json({ error: "Failed create menu" });
  }
};
