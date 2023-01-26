import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';

//configuracion de .env file
dotenv.config();

//Create Express App
const app: Express = express();
const port: String | Number = process.env.PORT || 5001;

// Define el first Route de App
app.get('/',(req: Request, res:Response) => {
    
    const data: string = 'Hellow Work!!!'
    res.send({data})
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})





