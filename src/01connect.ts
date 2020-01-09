import { createConnection, ConnectionOptions, Connection } from "typeorm";
import { User } from "./entity/User";
import { Heart } from "./entity/Heart";
import { Eye } from "./entity/Eye";
import { Group } from "./entity/Group";

const options: ConnectionOptions = {
  type: "mysql",
  host: "localhost",
  port: 30678,
  username: "dev",
  password: "dev",
  database: "db",
  entities: [User, Heart, Eye, Group],
  synchronize: true,
};
var connection: Connection;
export const conn = async () => {
  try {
    connection = await createConnection(options);
    console.log("successful connect");
    return connection;
  } catch (error) {
    console.log(error)
  }
}

export async function getClient() {
  await conn();
  return connection;
}
