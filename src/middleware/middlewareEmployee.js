import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {storageEmployee} from '../controller/storageEmployee.js'
import {validate} from 'class-validator';
const appMiddlewareEmployeeData = express();
const appMiddlewareEmployee = express();

appMiddlewareEmployeeData.use(async(req,res,next)=>{
    try {
        let data = plainToClass(storageEmployee, req.body, { excludeExtraneousValues: true });
        await validate(data);
        req.body = data;
        req.data = JSON.stringify(data);
        next();
    } catch (err) {
        res.status(err.status).json(err)
    }
})
appMiddlewareEmployee.use(async(req,res,next)=>{
    let json = Object.assign(req.data.interfaceData, req.body);
    try {
        let data = plainToClass(storageEmployee, json, { excludeExtraneousValues: true });
        await validate(data);
        req.body = data;
        next();
    } catch (err) {
        res.status(err.status).json(err)
    }
})

export {
    appMiddlewareEmployeeData,
    appMiddlewareEmployee
};