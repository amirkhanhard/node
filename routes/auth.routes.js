import express from "express"
import authController from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/test", authController)

export default router;