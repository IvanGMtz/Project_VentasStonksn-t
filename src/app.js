import express from 'express';
import dotenv from "dotenv";
dotenv.config();
const appExpress = express();

appExpress.use(express.json());

let config = JSON.parse(process.env.MY_SERVER);
appExpress.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});