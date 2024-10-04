import { Request, Response } from "express";

export const upPost = (req: Request, res: Response) => {
    
    res.status(201).json({
        message: "You did it, file uploaded succesfully",
        file: req.file as Express.Multer.File,
    })
}