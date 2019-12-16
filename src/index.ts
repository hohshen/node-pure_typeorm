import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import se from './routes/se';
import {connect} from './dbs/db'

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/se', se);
app.get('/', (req, res) => {
  res.json("hello")
})
app.listen(5278, async () => {
  await connect();
  console.log(`server started at http://localhost:${5278}`);
});

/**
 * 如果不自製連線的話（使用ormcofnig連線）
 * 就要使用import { createConnection } from "typeorm"; 灌入整個express
 * 內部的entity也要import { getRepository } from "typeorm";
 * 
 * 如果自製的話就可以直接使用該連線(重製config)
 */