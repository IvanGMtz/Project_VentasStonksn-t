import {appMiddlewareRewardType, appMiddlewareRewardTypeData} from "../middleware/middlewareRewardType.js";
import {Router} from 'express';
const appRewardType = Router();

appRewardType.post("/", appMiddlewareRewardTypeData, async(req,res)=>{
    res.send(await req.body.create())
});
appRewardType.get("/", appMiddlewareRewardType, async(req,res)=>{
    res.send(await req.body.all)
});

appRewardType.delete("/:id", appMiddlewareRewardType, async(req,res)=>{
    res.send(await req.body.remove(req.params.id))
});

appRewardType.put("/:id", appMiddlewareRewardType, async(req,res)=>{
    res.send(await req.body.update(req.params.id, req.body.nombre, req.body.descripcion)) 
});

export default appRewardType;