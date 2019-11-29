import "reflect-metadata";
import { createConnection } from "typeorm";

export const databaseProviders = [{
  provide: 'DbConnectionToken',
  useFactory: async () => await createConnection({
    type: "mysql",
    host: "localhost",
    port: 30678,
    username: "dev",
    password: "dev",
    database: "db",
    entities: [
      "../entities/*{.ts,.js}"
    ]
  })
}]
//ref:
//http://hive.rinoy.in/creating-a-typescript-nodejs-express-app-using-typeorm-and-mysql-part2/
//https://github.com/nestjs/nest/issues/175