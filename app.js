import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import bodyParser from 'body-parser';
import { router as indexRouter } from './routes/index.js';

const app = express();
const port = process.env.PORT;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
