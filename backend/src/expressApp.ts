import express from "express";
import cors from "cors";
import menuRoutes from "./routes/menu.routes";
import menuItemRoutes from './routes/menuItem.routes';
import { CORS_ORIGIN } from "./config/app.config";


const app = express();
const allowed_origins = CORS_ORIGIN.split(',') || []
console.log(allowed_origins)
app.use(cors({
    origin: allowed_origins, // Allow only this origin
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  }));

app.use(express.json());
app.use(express.urlencoded({extended:true}))

// Routes
app.use("/api/menus", menuRoutes);
app.use('/api/menuitem', menuItemRoutes);

export default app;
