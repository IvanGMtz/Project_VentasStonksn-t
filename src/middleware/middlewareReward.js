import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {storageReward} from '../controller/storageReward.js'
import {validate} from 'class-validator';
const appMiddlewareRewardData = express();
const appMiddlewareReward = express();

appMiddlewareRewardData.use(async(req,res,next)=>{
    try {
        let data = plainToClass(storageReward, req.body, { excludeExtraneousValues: true });
        await validate(data);
        req.body = data;
        req.data = JSON.stringify(data);
        next();
    } catch (err) {
        res.status(err.status).json(err)
    }
})
appMiddlewareReward.use(async(req,res,next)=>{
    let json = Object.assign(req.data.interfaceData, req.body);
    try {
        let data = plainToClass(storageReward, json, { excludeExtraneousValues: true });
        await validate(data);
        req.body = data;
        next();
    } catch (err) {
        res.status(err.status).json(err)
    }
})

export {
    appMiddlewareRewardData,
    appMiddlewareReward
};