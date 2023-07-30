import {appMiddlewareReward, appMiddlewareRewardData} from "../middleware/middlewareReward.js";
import {Router} from 'express';
const appReward = Router();

appReward.post("/", appMiddlewareRewardData, async(req,res)=>{
    res.send(await req.body.create())
});
appReward.get("/", appMiddlewareReward, async(req,res)=>{
    res.send(await req.body.all)
});

appReward.delete("/:id", appMiddlewareReward, async(req,res)=>{
    res.send(await req.body.remove(req.params.id))
});

appReward.put("/:id", appMiddlewareReward, async(req,res)=>{
    res.send(await req.body.update(req.params.id, req.body.nombre, req.body.descripcion, req.body.tipo_premio_id, req.body.categoria_premio_id))
});

export default appReward;