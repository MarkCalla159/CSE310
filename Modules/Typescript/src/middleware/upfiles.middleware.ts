import multer, { FileFilterCallback } from "multer";
import crypto from "crypto";

import { Request, Response, NextFunction } from "express";
import path from "path";
//const uuid = crypto.randomUUID();
const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../public/upload"),
  filename: function (
    req: Request,
    file: Express.Multer.File,
    cb: (error: Error | null, filename: string) => void
  ) {
    const uuid = crypto.randomUUID();
    const fileExtension = path.extname(file.originalname); //To get the file extension
    cb(null, `${uuid}${fileExtension}`);
  },
});

const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
  console.log("File received:", file.originalname);
  console.log("MIME type:", file.mimetype);
  const fileTypes = ["image/png", "image/jpg", "image/jpeg"];

  if (fileTypes.includes(file.mimetype)) {
    console.log("File accepted");
    return cb(null, true);
} else {
    console.log("File rejected: Incorrect MIME type");
    return cb(null, false);
}
};

const maxSize = 10 * 1024 * 1024;

export const upload = (req: Request, res: Response, next: NextFunction) => {
  return multer({
    storage,
    limits: { fileSize: maxSize },
    fileFilter,
  }).single("image")(req, res, (err) => {
    console.log("Multer middleware activated");
    console.log("File object:", req.file); 
    
    if (err instanceof multer.MulterError) {
      return res.status(400).json({
        message: "Are you kidding me? you only have 10 Mb",
      });
    }
    if (err) {
      return res.status(400).json({ message: err.message });
    }
    if (!req.file) {
      console.log("No file uploaded or incorrect format");
      return res.status(400).json({
        message: "Please select a correct image format and then upload it",
      });
    }
    console.log("File uploaded successfully:", req.file);
    next();
  });
};
