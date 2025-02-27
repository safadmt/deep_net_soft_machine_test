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
exports.addMenuItem = exports.getMenu = exports.getAllMenu = exports.createaMenu = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// ✅ Create a menu
const createaMenu = (menuData) => __awaiter(void 0, void 0, void 0, function* () {
    const menu = yield prisma.menu.create({
        data: {
            name: menuData.name,
            description: menuData.description,
        },
        include: { items: true }, // Return menu with items
    });
    return menu;
});
exports.createaMenu = createaMenu;
// ✅ Get all menus
const getAllMenu = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.menu.findMany({ include: { items: true } });
});
exports.getAllMenu = getAllMenu;
// ✅ Get a menu by ID
const getMenu = (menuId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.menu.findUnique({
        where: { id: menuId },
        include: { items: true },
    });
});
exports.getMenu = getMenu;
// ✅ Add a menu item to an existing menu
const addMenuItem = (item) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.menuItem.create({
        data: {
            name: item.name,
            description: item.description,
            price: item.price,
            menuId: item.menuId,
        },
    });
});
exports.addMenuItem = addMenuItem;
