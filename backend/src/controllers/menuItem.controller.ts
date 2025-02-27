import { Request, Response } from "express";
import { Prisma, PrismaClient } from "@prisma/client";
import { addMenuItem } from "../services/menu.service";

const prisma = new PrismaClient();

// Create a menu item
export const createMenuItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, description, price, menuId } = req.body;

    if(!name || !description || !price || !menuId) {
        res.status(400).json({error: "Missing required field"})
    }
    // Ensure the menu exists before adding items
    const menuExists = await prisma.menu.findUnique({ where: { id: menuId } });
    if (!menuExists) {
      res.status(404).json({ error: "Menu not found" });
      return;
    }

    // Create the menu item
    const newItem = await addMenuItem({name, description, price, menuId})

    res.status(201).json(newItem);
  } catch (error) {
    if(error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
           res.status(409).json({error: 'A new menuItem cannot be created with this name'})  
            return
          }
    }
    res.status(500).json({ error: "Failed to create menuItem" });
  }
};
