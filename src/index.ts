import { createConnection } from "typeorm";
import initExpress from './app';
import http from 'http';
(async function start() {
  try {
    await createConnection();
    console.log("Connected to DB");
  } catch (e) {
    console.log("TypeORM connection error: ", e)
  }
  const httpServer = http.createServer(
    initExpress(),
  );
  httpServer.listen(5278, () => {
    console.info('Server listening on port: ', 5278);
  });
})()