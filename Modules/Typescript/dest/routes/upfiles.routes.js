"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const upfiles_controllers_1 = require("../controllers/upfiles.controllers");
const upfiles_middleware_1 = require("../middleware/upfiles.middleware");
const router = (0, express_1.Router)();
router.post("/", upfiles_middleware_1.upload, upfiles_controllers_1.upPost);
exports.default = router;
