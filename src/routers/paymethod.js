import {appMiddlewarePayMethod, appMiddlewarePayMethodData} from "../middleware/middlewarePayMethod.js";
import {Router} from 'express';
const appPayMethod = Router();

appPayMethod.post("/", appMiddlewarePayMethodData, async(req,res)=>{
    res.send(await req.body.create())
});
appPayMethod.get("/", appMiddlewarePayMethod, async(req,res)=>{
    res.send(await req.body.all)
});

appPayMethod.delete("/:id", appMiddlewarePayMethod, async(req,res)=>{
    res.send(await req.body.remove(req.params.id))
});

appPayMethod.put("/:id", appMiddlewarePayMethod, async(req,res)=>{
    res.send(await req.body.update(req.params.id, req.body.nombre, req.body.descripcion)) 
});

export default appPayMethod;