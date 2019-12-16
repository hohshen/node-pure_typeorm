import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { createConnection } from "typeorm";
import se from './routes/se';
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/se', se);

app.get('/', (req, res) => {
  res.json("hello")
})
app.listen(5278, async () => {
  try{
    await createConnection();
    console.log("Connected to DB");
  }catch(e){
    console.log("TypeORM connection error: ", e)
  }
  console.log(`server started at http://localhost:${5278}`);
});


