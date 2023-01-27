import express, { Request, Response } from "express";
import { HelloController } from "@/controller/HelloController";
import { LogInfo } from "@/utils/logger";

// Router de Express 
const helloRouter = express.Router();

helloRouter.route('/').get(async (req: Request, res: Response) => {
    // Obtain a Query Param
    const name: any = req?.query?.name;
    LogInfo(`Query Param: ${name}`);  
    // Controller Instance to excute method
    const controller: HelloController = new HelloController();
    // Obtain Response
    const response = await controller.getMessage(name);
    // Send to the client the response
    return res.send(response)
});

// Export Hello Router
export default helloRouter;
