import express from "express";
const router = express.Router();
import { imageUpload, getAllPhotos } from "../controller/ImageUpload.js";
import MulterMiddleware from "../middleware/MulterMiddleware.js";

// uploading a image
router.post("/api/upload", MulterMiddleware.single("image"), imageUpload);

router.get("/api/getAll", getAllPhotos);

export default router;
