import express from "express";
import registration from "../controllers/UserControllers/registration.js";
import auth from "../controllers/UserControllers/auth.js";

const router = express.Router();

router.post("/registration", registration);
router.post("/auth", auth);

export default router;
