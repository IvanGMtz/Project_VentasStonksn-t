import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {storagePayMethod} from '../controller/storagePayMethod.js'
import {validate} from 'class-validator';
const appMiddlewarePayMethodData = express();
const appMiddlewarePayMethod = express();

appMiddlewarePayMethodData.use(async(req,res,next)=>{
    try {
        let data = plainToClass(storagePayMethod, req.body, { excludeExtraneousValues: true });
        await validate(data);
        req.body = data;
        req.data = JSON.stringify(data);
        next();
    } catch (err) {
        res.status(err.status).json(err)
    }
})
appMiddlewarePayMethod.use(async(req,res,next)=>{
    let json = Object.assign(req.data.interfaceData, req.body);
    try {
        let data = plainToClass(storagePayMethod, json, { excludeExtraneousValues: true });
        await validate(data);
        req.body = data;
        next();
    } catch (err) {
        res.status(err.status).json(err)
    }
})

export {
    appMiddlewarePayMethodData,
    appMiddlewarePayMethod
};