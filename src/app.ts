import "reflect-metadata";
// tslint:disable-next-line:ordered-imports
import bodyParser from "body-parser";
import * as express from "express";
import { Container } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";
import { UserRepoInterface, UserRepo } from './repository/User';
import UserService, { UserServiceInterface } from './service/user';
import { TYPES } from './types';
import './routes/ioc';
import { databaseProviders } from "./common/app-config";
import { createConnection } from "typeorm";
const IOContainer = new Container();
IOContainer.bind<UserServiceInterface>(TYPES.UserServiceInterface).to(UserService);
IOContainer.bind<UserRepoInterface>(TYPES.UserRepoInterface).to(UserRepo);
const server = new InversifyExpressServer(IOContainer);
server.setConfig((app: express.Application) => {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    createConnection().then(async connection => {
        console.log("Connected to DB");
    }).catch(error => console.log("TypeORM connection error: ", error));
})
const app = server.build();
app.listen(5278, () => {
    console.log("server start!")
})

