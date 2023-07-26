import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {storageCategory} from '../controller/storageCategory.js'
import {validate} from 'class-validator';
const appMiddlewareCategoryData = express();
const appMiddlewareCategory = express();

appMiddlewareCategoryData.use(async(req,res,next)=>{
    try {
        let data = plainToClass(storageCategory, req.body, { excludeExtraneousValues: true });
        await validate(data);
        req.body = data;
        req.data = JSON.stringify(data);
        next();
    } catch (err) {
        res.status(err.status).json(err)
    }
})
appMiddlewareCategory.use(async(req,res,next)=>{
    let json = Object.assign(req.data.interfaceData, req.body);
    try {
        let data = plainToClass(storageCategory, json, { excludeExtraneousValues: true });
        await validate(data);
        req.body = data;
        next();
    } catch (err) {
        res.status(err.status).json(err)
    }
})

export {
    appMiddlewareCategoryData,
    appMiddlewareCategory
};