import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {storageRewardEmployee} from '../controller/storageRewardEmployee.js'
import {validate} from 'class-validator';
const appMiddlewareRewardEmployeeData = express();
const appMiddlewareRewardEmployee = express();

appMiddlewareRewardEmployeeData.use(async(req,res,next)=>{
    try {
        let data = plainToClass(storageRewardEmployee, req.body, { excludeExtraneousValues: true });
        await validate(data);
        req.body = data;
        req.data = JSON.stringify(data);
        next();
    } catch (err) {
        res.status(err.status).json(err)
    }
})
appMiddlewareRewardEmployee.use(async(req,res,next)=>{
    let json = Object.assign(req.data.interfaceData, req.body);
    try {
        let data = plainToClass(storageRewardEmployee, json, { excludeExtraneousValues: true });
        await validate(data);
        req.body = data;
        next();
    } catch (err) {
        res.status(err.status).json(err)
    }
})

export {
    appMiddlewareRewardEmployeeData,
    appMiddlewareRewardEmployee
};