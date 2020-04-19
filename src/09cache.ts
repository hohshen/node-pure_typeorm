import { createConnection, ConnectionOptions } from "typeorm";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
const options: ConnectionOptions = {
    type: "mysql",
    host: "localhost",
    port: 30678,
    username: "dev",
    password: "dev",
    database: "db",
    entities: [User],
    cache: true,//要使用catch記得開啟
    synchronize: true,
    logging: true//可以查看得到sql
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
import express = require('express');

const app: express.Application = express();
let userRepo;
app.get('/create', async (req, res) => {
    const user = new User();
    user.name = "Bear2";
    const result = await userRepo.save(user);
    res.json(result)
})
app.get('/', async (req, res) => {
    const result = await userRepo.createQueryBuilder('user')
        .where("user.name = :name", { name: 'Bear2' })
        .cache(6000)
        .getMany();
    console.log(`-----${JSON.stringify(result)}------`)
    res.json(result)
});

app.listen(3000, async () => {
    const con = await conn();
    userRepo = con.getRepository(User);
    console.log('Example app listening on port 3000!');
});

/**
 * 第一次查詢 log
query: SELECT * FROM `db`.`query-result-cache` `cache` WHERE `cache`.`query` = ? -- PARAMETERS: ["SELECT `user`.`id` AS `user_id`, `user`.`name` AS `user_name` FROM `user` `user` WHERE `user`.`name` = ? -- PARAMETERS: [\"Bear2\"]"]
query: SELECT `user`.`id` AS `user_id`, `user`.`name` AS `user_name` FROM `user` `user` WHERE `user`.`name` = ? -- PARAMETERS: ["Bear2"]
query: UPDATE `db`.`query-result-cache` SET `identifier` = ?, `query` = ?, `time` = ?, `duration` = ?, `result` = ? WHERE `query` = ? -- PARAMETERS: [null,"SELECT `user`.`id` AS `user_id`, `user`.`name` AS `user_name` FROM `user` `user` WHERE `user`.`name` = ? -- PARAMETERS: [\"Bear2\"]",1587282995759,6000,"[{\"user_id\":2,\"user_name\":\"Bear2\"}]","SELECT `user`.`id` AS `user_id`, `user`.`name` AS `user_name` FROM `user` `user` WHERE `user`.`name` = ? -- PARAMETERS: [\"Bear2\"]"]
[ User { id: 2, name: 'Bear2' } ]
 * 第二次查詢 log (只剩下查詢他的cache了)
 query: SELECT * FROM `db`.`query-result-cache` `cache` WHERE `cache`.`query` = ? -- PARAMETERS: ["SELECT `user`.`id` AS `user_id`, `user`.`name` AS `user_name` FROM `user` `user` WHERE `user`.`name` = ? -- PARAMETERS: [\"Bear2\"]"]
[ User { id: 2, name: 'Bear2' } ]
 */