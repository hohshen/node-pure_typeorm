import "reflect-metadata";
import {ConnectionOptions} from "typeorm";
 
 export let dbOptions: ConnectionOptions = {
    type: "mysql",
    host: "localhost",
    port: 30678,
    username: "dev",
    password: "dev",
    database: "db",
    entities: [
         "../entities/*.js"
    ]
}