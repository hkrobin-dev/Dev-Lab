import cookieParser from "cookie-parser";
import express, { Application, Request, Response } from "express";
const app: Application = express();
import cors from "cors";
import config from "./config/index.js";
import { prisma } from "./lib/prisma.js";
import httpStatus from "http-status";
import bcrypt from "bcryptjs";
import { userRouter } from "./modules/users/user.route.js";
app.use(cors({
    origin: config.APP_URL,
    credentials: true,
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.get("/", async (req: Request, res: Response) => {

    res.send("Hello World!");
});

// app.post()
app.use("/api/users", userRouter);
export default app;