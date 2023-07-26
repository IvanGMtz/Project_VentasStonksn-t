import {appMiddlewarePayMethod, appMiddlewarePayMethodData} from "../middleware/middlewarePayMethod.js";
import {Router} from 'express';
const appPayMethod = Router();

appPayMethod.post("/", appMiddlewarePayMethodData, (req,res)=>{
    req.body.guardar = JSON.parse(req.data);
    res.json({status: 201, message: "Datos guardados"});
});
appPayMethod.get("/", appMiddlewarePayMethod, async(req,res)=>{
    res.send(await req.body.all)
});

appPayMethod.delete("/:id", appMiddlewarePayMethod, (req,res)=>{
    req.body.eliminar = req.params.id;
    res.json({status: 201, message: "Datos eliminados"});
});

export default appPayMethod;