"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMenuItem = void 0;
const client_1 = require("@prisma/client");
const menu_service_1 = require("../services/menu.service");
const prisma = new client_1.PrismaClient();
// Create a menu item
const createMenuItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description, price, menuId } = req.body;
        if (!name || !description || !price || !menuId) {
            res.status(400).json({ error: "Missing required field" });
        }
        // Ensure the menu exists before adding items
        const menuExists = yield prisma.menu.findUnique({ where: { id: menuId } });
        if (!menuExists) {
            res.status(404).json({ error: "Menu not found" });
            return;
        }
        // Create the menu item
        const newItem = yield (0, menu_service_1.addMenuItem)({ name, description, price, menuId });
        res.status(201).json(newItem);
    }
    catch (error) {
        if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                res.status(409).json({ error: 'A new menuItem cannot be created with this name' });
                return;
            }
        }
        res.status(500).json({ error: "Failed to create menuItem" });
    }
});
exports.createMenuItem = createMenuItem;
