import {appMiddlewareRewardCategory, appMiddlewareRewardCategoryData} from "../middleware/middlewareRewardCategory.js";
import {Router} from 'express';
const appRewardCategory = Router();

appRewardCategory.post("/", appMiddlewareRewardCategoryData, async(req,res)=>{
    res.send(await req.body.create())
});
appRewardCategory.get("/", appMiddlewareRewardCategory, async(req,res)=>{
    res.send(await req.body.all)
});

appRewardCategory.delete("/:id", appMiddlewareRewardCategory, async(req,res)=>{
    res.send(await req.body.remove(req.params.id))
});

appRewardCategory.put("/:id", appMiddlewareRewardCategory, async(req,res)=>{
    res.send(await req.body.update(req.params.id, req.body.nombre, req.body.descripcion)) 
});

export default appRewardCategory;