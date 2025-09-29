import express from "express";
import simpleController from "../controllers/auth.controller.js";
import multiMiddlewareController from "../controllers/multi.middleware.controller.js";
import protecRoutes, { defaultData, logData } from "../middlewares/auth.middleware.js";
import protectedController from "../controllers/protected.controller.js";


const router = express.Router();

router.get("/simple", simpleController);//No middleware
router.get("/protected",protecRoutes, protectedController);//protected middleware
router.get("/multimiddleware",[defaultData, logData, protecRoutes ], multiMiddlewareController);//multi middleware

router.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

export default router;