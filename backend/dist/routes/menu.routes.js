"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const menu_controller_1 = require("../controllers/menu.controller");
const router = (0, express_1.Router)();
router.get("/", menu_controller_1.getMenus);
router.get('/:menuId', menu_controller_1.getMenuById);
router.post("/", menu_controller_1.createMenu);
exports.default = router;
