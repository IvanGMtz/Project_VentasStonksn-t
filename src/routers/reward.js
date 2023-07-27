import {appMiddlewareReward, appMiddlewareRewardData} from "../middleware/middlewareReward.js";
import {Router} from 'express';
const appReward = Router();

appReward.post("/", appMiddlewareRewardData, (req,res)=>{
    req.body.guardar = JSON.parse(req.data);
    res.json({status: 201, message: "Datos guardados"});
});
appReward.get("/", appMiddlewareReward, async(req,res)=>{
    res.send(await req.body.all)
});

appReward.delete("/:id", appMiddlewareReward, (req,res)=>{
    req.body.eliminar = req.params.id;
    res.json({status: 201, message: "Datos eliminados"});
});

export default appReward;