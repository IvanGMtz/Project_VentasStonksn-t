import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {storageProducts} from '../controller/storageProducts.js'
import {validate} from 'class-validator';
const appMiddlewareProductsData = express();
const appMiddlewareProducts = express();

appMiddlewareProductsData.use(async(req,res,next)=>{
    try {
        let data = plainToClass(storageProducts, req.body, { excludeExtraneousValues: true });
        await validate(data);
        req.body = data;
        req.data = JSON.stringify(data);
        next();
    } catch (err) {
        res.status(err.status).json(err)
    }
})
appMiddlewareProducts.use(async(req,res,next)=>{
    let json = Object.assign(req.data.interfaceData, req.body);
    try {
        let data = plainToClass(storageProducts, json, { excludeExtraneousValues: true });
        await validate(data);
        req.body = data;
        next();
    } catch (err) {
        res.status(err.status).json(err)
    }
})

export {
    appMiddlewareProductsData,
    appMiddlewareProducts
};