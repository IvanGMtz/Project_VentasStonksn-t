import {appMiddlewareCategory, appMiddlewareCategoryData} from "../middleware/middlewareCategory.js";
import {Router} from 'express';
const appCategory = Router();

appCategory.post("/", appMiddlewareCategoryData, (req,res)=>{
    req.body.guardar = JSON.parse(req.data);
    res.json({status: 201, message: "Datos guardados"});
});
appCategory.get("/", appMiddlewareCategory, async(req,res)=>{
    res.send(await req.body.all)
});

appCategory.delete("/:id", appMiddlewareCategory, (req,res)=>{
    req.body.eliminar = req.params.id;
    res.json({status: 201, message: "Datos eliminados"});
});

export default appCategory;