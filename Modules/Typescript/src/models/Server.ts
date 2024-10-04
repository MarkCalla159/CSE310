import express, { Application} from "express"
import cors from "cors"
import config from "../config"
//import { Request, Response, NextFunction } from 'express';
import routerUp from "../routes/upfiles.routes"

class Server{
    private app: express.Application;
    private port: string;
    private path = {
        upload: "/upload",
    }
    constructor() {
        this.app = express();
        this.port = config.port as string;
        this.listen();
        this.routes();
        this.middleware();
    }
    routes(){
        this.app.use(this.path.upload, routerUp)
    }
    middleware(){
        this.app.use(express.json());
        this.app.use(
            cors({
                origin: "*",
                methods: "GET, POST, DELETE, PUT",
                preflightContinue: false,
                optionsSuccessStatus: 204
            })
        )
    }
    //to start server
    listen(){
        this.app.listen(this.port,() => {
            console.log(`Server is running on port ${this.port}`)
        })
    }
}

export default Server;