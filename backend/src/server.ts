import { PORT } from "./config/app.config";
import app from "./expressApp";
import dotenv from "dotenv";
dotenv.config();
console.log("hello")
app.listen(PORT,()=> {
    console.log(`Server running on PORT ${PORT}`)
})