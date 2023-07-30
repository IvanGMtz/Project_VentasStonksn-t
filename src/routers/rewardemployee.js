import {appMiddlewareRewardEmployee, appMiddlewareRewardEmployeeData} from "../middleware/middlewareRewardEmployee.js";
import {Router} from 'express';
const appRewardEmployee = Router();

appRewardEmployee.post("/", appMiddlewareRewardEmployeeData, async(req,res)=>{
    res.send(await req.body.create())
});
appRewardEmployee.get("/", appMiddlewareRewardEmployee, async(req,res)=>{
    res.send(await req.body.all)
});

appRewardEmployee.delete("/:id", appMiddlewareRewardEmployee, async(req,res)=>{
    res.send(await req.body.remove(req.params.id))
});

appRewardEmployee.put("/:id", appMiddlewareRewardEmployee, async(req,res)=>{
    res.send(await req.body.update(req.params.id, req.body.empleado_id, req.body.premio_id, req.body.fecha)) 
});
export default appRewardEmployee;