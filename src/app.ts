import "reflect-metadata";
import bodyParser from "body-parser";
import express from "express";
import { InversifyExpressServer } from "inversify-express-utils";
import { createConnection } from "typeorm";
import { IOContainer } from './inversify.config';
import './routes/ioc';
createConnection().then(async connection => {
    console.log("Connected to DB");

    const server = new InversifyExpressServer(IOContainer);
    server.setConfig((app: express.Application) => {
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
    })
    const app = server.build();
    app.listen(5278, () => {
        console.log("server start!")
    })
}).catch(error => console.log("TypeORM connection error: ", error));


