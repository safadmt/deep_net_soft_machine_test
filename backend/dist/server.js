"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_config_1 = require("./config/app.config");
const expressApp_1 = __importDefault(require("./expressApp"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
console.log("hello");
expressApp_1.default.listen(app_config_1.PORT, () => {
    console.log(`Server running on PORT ${app_config_1.PORT}`);
});
