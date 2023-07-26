import {appMiddlewareRewardCategory, appMiddlewareRewardCategoryData} from "../middleware/middlewareRewardCategory.js";
import {Router} from 'express';
const appRewardCategory = Router();

appRewardCategory.post("/", appMiddlewareRewardCategoryData, (req,res)=>{
    req.body.guardar = JSON.parse(req.data);
    res.json({status: 201, message: "Datos guardados"});
});
appRewardCategory.get("/", appMiddlewareRewardCategory, async(req,res)=>{
    res.send(await req.body.all)
});

appRewardCategory.delete("/:id", appMiddlewareRewardCategory, (req,res)=>{
    req.body.eliminar = req.params.id;
    res.json({status: 201, message: "Datos eliminados"});
});

export default appRewardCategory;