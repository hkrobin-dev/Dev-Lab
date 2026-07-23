import bcrypt from "bcryptjs";
import { prisma } from "../../lib/prisma.js";
import config from "../../config/index.js";
import { RegisterUserPayload } from "./user.interface.js";




const registerUserInDB = async (payload: RegisterUserPayload) => {
    const { name, email, password, profilePhoto } = payload;
    const isUserExists = await prisma.user.findUnique({
        where: {
            email
        }
    });

    if (isUserExists) {
        throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, Number(config.BCRYPT_SALT_ROUNDS));

    const CreatedUser = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,

        }
    });
    await prisma.profile.create({
        data: {
            userId: CreatedUser.id,
            profilePhoto
        }
    });


    const user = await prisma.user.findUnique({
        where: {
            id: CreatedUser.id,
            email: CreatedUser.email || email,
        },
        omit: {
            password: true
        },
        include: {
            profile: true
        }
    })
    return user;


}

export const userService = {
    registerUserInDB
}