import express from 'express';
import newsRouter from './routes.js';
import cors from 'cors';

const app = express();

app.use(cors({
  origin: '*'
}))

app.use(express.urlencoded({ extended: true }));
app.use(
  express.json(),
  newsRouter
);

export { app };
