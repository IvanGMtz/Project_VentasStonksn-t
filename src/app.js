import express from 'express';
import dotenv from "dotenv";
import {validateJWT} from "./middleware/middlewareJWT.js";
import appCategory from './routers/category.js';
import appJWT from './routers/JWT.js';
dotenv.config();
const appExpress = express();

appExpress.use(express.json());
appExpress.use("/categoria", validateJWT, appCategory);
appExpress.use("/token", appJWT);

let config = JSON.parse(process.env.MY_SERVER);
appExpress.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});