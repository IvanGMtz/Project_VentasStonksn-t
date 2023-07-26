import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {storageRewardCategory} from '../controller/storageRewardCategory.js'
import {validate} from 'class-validator';
const appMiddlewareRewardCategoryData = express();
const appMiddlewareRewardCategory = express();

appMiddlewareRewardCategoryData.use(async(req,res,next)=>{
    try {
        let data = plainToClass(storageRewardCategory, req.body, { excludeExtraneousValues: true });
        await validate(data);
        req.body = data;
        req.data = JSON.stringify(data);
        next();
    } catch (err) {
        res.status(err.status).json(err)
    }
})
appMiddlewareRewardCategory.use(async(req,res,next)=>{
    let json = Object.assign(req.data.interfaceData, req.body);
    try {
        let data = plainToClass(storageRewardCategory, json, { excludeExtraneousValues: true });
        await validate(data);
        req.body = data;
        next();
    } catch (err) {
        res.status(err.status).json(err)
    }
})

export {
    appMiddlewareRewardCategoryData,
    appMiddlewareRewardCategory
};