import express from 'express';
import dotenv from "dotenv";
import {validateJWT} from "./middleware/middlewareJWT.js";
import appCategory from './routers/category.js';
import appProducts from './routers/product.js';
import appPayMethod from './routers/paymethod.js';
import appRewardType from './routers/rewardtype.js';
import appRewardCategory from './routers/rewardcategory.js';
import appReward from './routers/reward.js';
import appJWT from './routers/JWT.js';
dotenv.config();
const appExpress = express();

appExpress.use(express.json());
appExpress.use("/categoria", validateJWT, appCategory);
appExpress.use("/producto", validateJWT, appProducts);
appExpress.use("/metodopago", validateJWT, appPayMethod);
appExpress.use("/tipopremio", validateJWT, appRewardType);
appExpress.use("/categoriapremio", validateJWT, appRewardCategory);
appExpress.use("/premio", validateJWT, appReward);
appExpress.use("/token", appJWT);

let config = JSON.parse(process.env.MY_SERVER);
appExpress.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});