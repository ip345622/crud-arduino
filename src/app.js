import bodyParser from 'body-parser';
import  express from "express";
import morgan from "morgan";
import cors from "cors";

import arduinoRoutes from "./routes/arduino.routes.js"

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(arduinoRoutes);

export default app;