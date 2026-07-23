import httpStatus from "http-status";
import { Request, Response, Router } from "express";
import { prisma } from "../../lib/prisma.js";
import bcrypt from "bcryptjs";
import config from "../../config/index.js";
import { userController } from "./user.controller.js";

const router = Router();

router.post("/register",userController.registerUser);

export const userRouter = router;