import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ status: "Server is okay" }); 
});

app.use(errorHandler);
app.use(notFound);

export default app;
