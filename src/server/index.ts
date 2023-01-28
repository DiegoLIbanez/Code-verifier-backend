import express, { Express, Response, Request } from "express";
// Environment Variables    
import dotenv from 'dotenv';

// Security
import cors from 'cors';
import helmet from "helmet";

// Root Router
import rootRuter from '../routes';

// Configuration the .env file
dotenv.config();

// Create Express APP
const server: Express = express();

// Define SERVER to use /api and tootRouter from 'index.js in routes
server.use('/api', rootRuter);

// Security Config
server.use(helmet());
server.use(cors());

// Content type
server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json( {limit: '50mb'}));

// * Redirection Config
server.get('/', (req: Request, res: Response) => {
    res.redirect('/api');
});

export default server;
