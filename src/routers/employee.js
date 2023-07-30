import {appMiddlewareEmployee, appMiddlewareEmployeeData} from "../middleware/middlewareEmployee.js";
import {Router} from 'express';
const appEmployee = Router();

appEmployee.post("/", appMiddlewareEmployeeData, async(req,res)=>{
    res.send(await req.body.create())
});
appEmployee.get("/", appMiddlewareEmployee, async(req,res)=>{
    res.send(await req.body.all)
});

appEmployee.delete("/:id", appMiddlewareEmployee, async(req,res)=>{
    res.send(await req.body.remove(req.params.id))
});

appEmployee.put("/:id", appMiddlewareEmployee, async(req,res)=>{
    res.send(await req.body.update(req.params.id, req.body.nombre, req.body.puesto)) 
});

export default appEmployee;