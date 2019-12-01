import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

import { createConnection } from "typeorm";
import { databaseProviders } from "./common/app-config";
import se from './routes/se';

// createConnection().then(async connection => {
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/se', se);

app.get('/', (req, res) => {
  res.json("hello")
})
app.listen(52788, async () => {
  console.log(`server started at http://localhost:${52788}`);
});
// }).catch(error => console.log("TypeORM connection error: ", error));
// /**
// * Create connection to DB using configuration provided in 
// * appconfig file.
// */
createConnection().then(async connection => {
  console.log("Connected to DB");

}).catch(error => console.log("TypeORM connection error: ", error));
