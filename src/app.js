import express from 'express';
import newsRouter from './routes.js';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(
  express.json(),
  newsRouter
);

export { app };
