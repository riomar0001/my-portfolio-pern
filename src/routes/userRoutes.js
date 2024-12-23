import express from "express";
import registration from "../controllers/UserControllers/registration.js";

const router = express.Router();

router.post("/registration", registration);

export default router;
