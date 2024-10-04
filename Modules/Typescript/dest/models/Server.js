"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = __importDefault(require("../config"));
//import { Request, Response, NextFunction } from 'express';
const upfiles_routes_1 = __importDefault(require("../routes/upfiles.routes"));
class Server {
    constructor() {
        this.path = {
            upload: "/upload",
        };
        this.app = (0, express_1.default)();
        this.port = config_1.default.port;
        this.listen();
        this.routes();
        this.middleware();
    }
    routes() {
        this.app.use(this.path.upload, upfiles_routes_1.default);
    }
    middleware() {
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)({
            origin: "*",
            methods: "GET, POST, DELETE, PUT",
            preflightContinue: false,
            optionsSuccessStatus: 204
        }));
    }
    //to start server
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
}
exports.default = Server;
