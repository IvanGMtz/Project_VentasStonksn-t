import {appMiddlewareRewardEmployee, appMiddlewareRewardEmployeeData} from "../middleware/middlewareRewardEmployee.js";
import {Router} from 'express';
const appRewardEmployee = Router();

appRewardEmployee.post("/", appMiddlewareRewardEmployeeData, (req,res)=>{
    req.body.guardar = JSON.parse(req.data);
    res.json({status: 201, message: "Datos guardados"});
});
appRewardEmployee.get("/", appMiddlewareRewardEmployee, async(req,res)=>{
    res.send(await req.body.all)
});

appRewardEmployee.delete("/:id", appMiddlewareRewardEmployee, (req,res)=>{
    req.body.eliminar = req.params.id;
    res.json({status: 201, message: "Datos eliminados"});
});

export default appRewardEmployee;