import {appMiddlewareRewardType, appMiddlewareRewardTypeData} from "../middleware/middlewareRewardType.js";
import {Router} from 'express';
const appRewardType = Router();

appRewardType.post("/", appMiddlewareRewardTypeData, (req,res)=>{
    req.body.guardar = JSON.parse(req.data);
    res.json({status: 201, message: "Datos guardados"});
});
appRewardType.get("/", appMiddlewareRewardType, async(req,res)=>{
    res.send(await req.body.all)
});

appRewardType.delete("/:id", appMiddlewareRewardType, (req,res)=>{
    req.body.eliminar = req.params.id;
    res.json({status: 201, message: "Datos eliminados"});
});

export default appRewardType;