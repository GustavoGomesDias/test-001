/* eslint-disable import/first */
import dotenv from 'dotenv';

dotenv.config();

import './database';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { resolve } from 'path';
import Sale from './routes/Sale';
import Acquisition from './routes/Acquisition';
import Income from './routes/Income';

const app = express();

const whiteList = [
  'http://localhost:3000',
];

const corsOptions = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(resolve(__dirname, 'uploads')));

// Routes
app.use('/', Sale);
app.use('/', Acquisition);
app.use('/', Income);

export default app;
