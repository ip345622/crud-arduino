import app from "./app.js";
import { connectionDB } from "./db.js";
import dotenv from 'dotenv';

dotenv.config();

app.listen(process.env.PORT);
console.log('El servidor esta activo en el puerto '+process.env.PORT);
connectionDB();