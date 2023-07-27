import {appMiddlewareEmployee, appMiddlewareEmployeeData} from "../middleware/middlewareEmployee.js";
import {Router} from 'express';
const appEmployee = Router();

appEmployee.post("/", appMiddlewareEmployeeData, (req,res)=>{
    req.body.guardar = JSON.parse(req.data);
    res.json({status: 201, message: "Datos guardados"});
});
appEmployee.get("/", appMiddlewareEmployee, async(req,res)=>{
    res.send(await req.body.all)
});

appEmployee.delete("/:id", appMiddlewareEmployee, (req,res)=>{
    req.body.eliminar = req.params.id;
    res.json({status: 201, message: "Datos eliminados"});
});

export default appEmployee;