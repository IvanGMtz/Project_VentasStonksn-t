import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {storageRewardType} from '../controller/storageRewardType.js'
import {validate} from 'class-validator';
const appMiddlewareRewardTypeData = express();
const appMiddlewareRewardType = express();

appMiddlewareRewardTypeData.use(async(req,res,next)=>{
    try {
        let data = plainToClass(storageRewardType, req.body, { excludeExtraneousValues: true });
        await validate(data);
        req.body = data;
        req.data = JSON.stringify(data);
        next();
    } catch (err) {
        res.status(err.status).json(err)
    }
})
appMiddlewareRewardType.use(async(req,res,next)=>{
    let json = Object.assign(req.data.interfaceData, req.body);
    try {
        let data = plainToClass(storageRewardType, json, { excludeExtraneousValues: true });
        await validate(data);
        req.body = data;
        next();
    } catch (err) {
        res.status(err.status).json(err)
    }
})

export {
    appMiddlewareRewardTypeData,
    appMiddlewareRewardType
};