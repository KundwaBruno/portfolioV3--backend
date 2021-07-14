import '@babel/polyfill';
import express, { json } from 'express';
import cors from 'cors';
import passport from 'passport';
import morgan from 'morgan';
import { config } from 'dotenv';
import router from './routers/router';
import logger from './utils/logger';
import passportConfig from './configs/passport';

config();
const app = express();

passportConfig(passport);
logger.exceptions.handle();

app.use(cors());
app.use(morgan('dev', { stream: logger.stream }));
app.use(json());
app.use('/api/v1', router);

const port = process.env.PORT;
app.listen(port, console.log(`KBM server started on port ${port}`));

export default app;
