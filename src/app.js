/* eslint-disable import/first */
import dotenv from 'dotenv';

dotenv.config();

import './database/index.js';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { resolve } from 'path';
import Sale from './routes/Sale.js';
import Acquisition from './routes/Acquisition.js';
import Income from './routes/Income.js';

const app = express();

const whiteList = [
  'http://localhost:3000',
  'https://test-001-frontend.vercel.app',
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

// Routes
app.use('/', Sale);
app.use('/', Acquisition);
app.use('/', Income);

const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`Server is running at 3001`);
  console.log(`CTRL + click in http://localhost:3001`);
});
