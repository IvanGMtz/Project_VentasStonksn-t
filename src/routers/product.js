import {appMiddlewareProducts, appMiddlewareProductsData} from "../middleware/middlewareProducts.js";
import {Router} from 'express';
const appProducts = Router();

appProducts.post("/", appMiddlewareProductsData, (req,res)=>{
    req.body.guardar = JSON.parse(req.data);
    res.json({status: 201, message: "Datos guardados"});
});
appProducts.get("/", appMiddlewareProducts, async(req,res)=>{
    res.send(await req.body.all)
});

appProducts.delete("/:id", appMiddlewareProducts, (req,res)=>{
    req.body.eliminar = req.params.id;
    res.json({status: 201, message: "Datos eliminados"});
});

export default appProducts;