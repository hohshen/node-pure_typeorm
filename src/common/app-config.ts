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