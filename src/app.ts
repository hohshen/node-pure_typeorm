import "reflect-metadata";
import bodyParser from "body-parser";
import express from "express";
import { InversifyExpressServer } from "inversify-express-utils";
import { IOContainer } from './inversify.config';
import './routes/ioc';
export default function(){
    const server = new InversifyExpressServer(IOContainer);
    server.setConfig(async(app: express.Application) => {
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
    })
    const app=server.build();  
    return app;
}


