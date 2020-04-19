import { createConnection, ConnectionOptions } from "typeorm";
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
  cache: true,//要使用catch記得開啟
  synchronize: true,
};

export const conn = async () => {
  try {
    const connection = await createConnection(options);
    console.log("successful connect");
    return connection;
  } catch (error) {
    console.log(error)
  }
}
// conn();