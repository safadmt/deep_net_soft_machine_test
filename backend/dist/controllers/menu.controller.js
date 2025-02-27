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
exports.createMenu = exports.getMenuById = exports.getMenus = void 0;
const client_1 = require("@prisma/client");
const menu_service_1 = require("../services/menu.service");
const prisma = new client_1.PrismaClient();
// Get all menus
const getMenus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const menus = yield (0, menu_service_1.getAllMenu)();
        console.log(menus);
        res.status(200).json({ data: menus });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Failed to get Menus" });
    }
});
exports.getMenus = getMenus;
// Get menu by ID
const getMenuById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { menuId } = req.params;
        const menu = yield (0, menu_service_1.getMenu)(menuId);
        if (!menu) {
            res.status(404).json({ error: "Menu not found" });
            return;
        }
        res.status(200).json({ data: menu });
    }
    catch (error) {
        res.status(500).json({ error: "Failed to get menu" });
    }
});
exports.getMenuById = getMenuById;
// Create menu
const createMenu = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description } = req.body;
        if (!name || !description) {
            res.status(400).json({ error: "Name or Description field are required" });
        }
        const newMenu = yield (0, menu_service_1.createaMenu)({ name, description });
        res.status(201).json({ data: newMenu });
    }
    catch (error) {
        if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                res.status(409).json({ error: 'A new menu cannot be created with this name' });
                return;
            }
        }
        res.status(500).json({ error: "Failed create menu" });
    }
});
exports.createMenu = createMenu;
