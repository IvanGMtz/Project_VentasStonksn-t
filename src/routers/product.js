import {appMiddlewareProducts, appMiddlewareProductsData} from "../middleware/middlewareProducts.js";
import {Router} from 'express';
const appProducts = Router();

appProducts.post("/", appMiddlewareProductsData, async(req,res)=>{
    res.send(await req.body.create())
});
appProducts.get("/", appMiddlewareProducts, async(req,res)=>{
    res.send(await req.body.all)
});

appProducts.delete("/:id", appMiddlewareProducts, async(req,res)=>{
    res.send(await req.body.remove(req.params.id))
});

appProducts.put("/:id", appMiddlewareProducts, async(req,res)=>{
    res.send(await req.body.update(req.params.id, req.body.nombre, req.body.precio, req.body.descripcion, req.body.categoria_id)) 
});

export default appProducts;