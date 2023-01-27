// Root Router
// Redirections to Routers

import { LogInfo } from '@/utils/logger';
import express, {Express, Request, Response } from 'express';
import helloRouter from './HelloRouter';

// Server instance
const server:Express = express()