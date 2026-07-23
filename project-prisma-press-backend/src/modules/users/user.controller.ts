import { Request, Response } from "express";
import { prisma } from "../../lib/prisma.js";
import bcrypt from "bcryptjs";
import config from "../../config/index.js";
import httpStatus from "http-status";
import { userService } from "./user.service.js";

const registerUser =  async (req: Request, res: Response) => {
    try {
        const payload = req.body;

    const user = await userService.registerUserInDB(payload);

    

    res.status(httpStatus.CREATED).json({
        success: true,
        statuscode: httpStatus.CREATED,
        message: "User registered successfully",
        data : {
            user
        }
        });
    } catch (error) {
        console.log(error)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            success: false,
            statuscode: httpStatus.INTERNAL_SERVER_ERROR,
            message: "Failed to register user",
            data: null
        });
    }
}

export const userController = {
    registerUser
}