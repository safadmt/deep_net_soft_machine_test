import { Router } from "express";
import { createMenuItem } from "../controllers/menuItem.controller";
const router = Router();


router.post('/', createMenuItem)

export default router;