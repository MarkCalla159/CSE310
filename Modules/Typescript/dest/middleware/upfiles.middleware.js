"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const crypto_1 = __importDefault(require("crypto"));
const path_1 = __importDefault(require("path"));
//const uuid = crypto.randomUUID();
const storage = multer_1.default.diskStorage({
    destination: path_1.default.join(__dirname, "../../public/upload"),
    filename: function (req, file, cb) {
        const uuid = crypto_1.default.randomUUID();
        const fileExtension = path_1.default.extname(file.originalname); //To get the file extension
        cb(null, `${uuid}${fileExtension}`);
    },
});
const fileFilter = (req, file, cb) => {
    console.log("File received:", file.originalname);
    console.log("MIME type:", file.mimetype);
    const fileTypes = ["image/png", "image/jpg", "image/jpeg"];
    if (fileTypes.includes(file.mimetype)) {
        console.log("File accepted");
        return cb(null, true);
    }
    else {
        console.log("File rejected: Incorrect MIME type");
        return cb(null, false);
    }
};
const maxSize = 10 * 1024 * 1024;
const upload = (req, res, next) => {
    return (0, multer_1.default)({
        storage,
        limits: { fileSize: maxSize },
        fileFilter,
    }).single("image")(req, res, (err) => {
        console.log("Multer middleware activated");
        console.log("File object:", req.file);
        if (err instanceof multer_1.default.MulterError) {
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
exports.upload = upload;
