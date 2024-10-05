import { Router } from "express";
import { upPost } from "../controllers/upfiles.controllers";
import { upload } from "../middleware/upfiles.middleware";
const router = Router();

router.post("/", upload, upPost);// Enpoint

export default router;