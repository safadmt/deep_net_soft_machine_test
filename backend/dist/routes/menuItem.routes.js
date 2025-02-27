"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const menuItem_controller_1 = require("../controllers/menuItem.controller");
const router = (0, express_1.Router)();
router.post('/', menuItem_controller_1.createMenuItem);
exports.default = router;
