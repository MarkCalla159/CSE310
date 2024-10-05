import express, { Application} from "express"
import cors from "cors"
import config from "../config"
//import { Request, Response, NextFunction } from 'express';
import routerUp from "../routes/upfiles.routes"
import path from "path"
class Server{
    private app: Application;
    private port: string;
    private path = {
        upload: "/upload", // To define the route for the load
        public: "/public", // This one is for downloads
    }
    constructor() {
        this.app = express();
        this.port = config.port as string;
        this.listen();
        this.routes();
        this.middleware();
    }
    routes(){
        this.app.use(this.path.upload, routerUp) // to upload files
    }
    middleware(){
        this.app.use(express.json());
        //To use cors correctly
        this.app.use(
            cors({
                origin: "*",
                methods: "GET, POST, DELETE, PUT",
                preflightContinue: false,
                optionsSuccessStatus: 204
            })
        );
        //To use uploaded file to make a download
        this.app.use(this.path.public, express.static(path.join(__dirname, "../../public/upload")));
    }
    //to start server
    listen(){
        this.app.listen(this.port,() => {
            console.log(`Server is running on port ${this.port}`)
        })
    }
}

export default Server;