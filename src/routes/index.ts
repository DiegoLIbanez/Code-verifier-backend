// Root Router
// Redirections to Routers

import { LogInfo } from '../utils/logger';
import express, {Express, Request, Response } from 'express';
import helloRouter from './HelloRouter';

// Server instance
const server:Express = express();

// Router instance 
const rootRuter =  express.Router();

// Activate for requests to http://localhost:8000/api
rootRuter.get('/', (req: Request, res: Response) => {
    LogInfo('GET: http://localhost:5001/api/')
    // Send Hello World
    const data: string = 'Welcome to my API Restful: Express + TS + Nodemon + Jest + Swagger + Mongoose';
    res.send({data})
});


server.use('/', rootRuter);
server.use('/hello', helloRouter);

export default server