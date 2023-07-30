import {appMiddlewareCategory, appMiddlewareCategoryData} from "../middleware/middlewareCategory.js";
import {Router} from 'express';
const appCategory = Router();

appCategory.post("/", appMiddlewareCategoryData, async(req,res)=>{
    res.send(await req.body.create())
});
appCategory.get("/", appMiddlewareCategory, async(req,res)=>{
    res.send(await req.body.all)
});

appCategory.delete("/:id", appMiddlewareCategory, async(req,res)=>{
    res.send(await req.body.remove(req.params.id))
});

appCategory.put("/:id", appMiddlewareCategory, async(req,res)=>{
    res.send(await req.body.update(req.params.id, req.body.nombre, req.body.descripcion)) 
});

export default appCategory;