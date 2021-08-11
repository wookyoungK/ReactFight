import express, { static } from 'express';
import { urlencoded, json } from 'body-parser';
import { join } from 'path';
var app = express();
import basicAuth from 'express-basic-auth';
import indexRouter from './routes/index';

app.use(
  urlencoded({
    extended: true,
  })
);

// app.use(basicAuth({
//   users: { 'admin': 'admin123!' },
//   challenge: true
// }))

app.use(json());
app.use(static(join(__dirname, 'build')));
app.use('/', indexRouter);

export default app;
