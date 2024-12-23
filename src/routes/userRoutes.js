import express from "express";
import registration from "../controllers/UserControllers/registration.js";
import auth from "../controllers/UserControllers/auth.js";
import logout from "../controllers/UserControllers/logout.js";
import getUserInfo from "../controllers/UserControllers/getUserInfo.js";

import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/registration", registration);
router.post("/auth", auth);
router.post("/logout", logout);

router.get("/info", protect, getUserInfo);

export default router;
