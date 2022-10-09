import express from 'express';
import bodyParser from 'body-parser';
import router from "./routers/router";
import { ErrorResponder } from './middlewares/error.middleware'

const app = express();
const errorResponder = new ErrorResponder().errorResponder;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", router);

app.use(errorResponder);


export default app;
