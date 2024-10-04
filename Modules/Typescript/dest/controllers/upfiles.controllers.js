"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upPost = void 0;
const upPost = (req, res) => {
    res.status(201).json({
        message: "You did it, file uploaded succesfully",
        file: req.file,
    });
};
exports.upPost = upPost;
