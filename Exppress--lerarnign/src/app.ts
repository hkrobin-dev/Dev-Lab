import express, { type Application, type Request, type Response } from "express"
import { pool } from "./db";
import { userRoute } from "./modules/user/user.rotue";
import { profileRoute } from "./modules/profile/profile.route";
import { authRoute } from "./modules/auth/auth.route";
import fs from "fs"
import logger from "./middleware/logger";
import CookieParser from "cookie-parser"
const app: Application = express()

app.use(CookieParser())
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.use(logger);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    "message": "Express Server",
    "author": "next level"
  })
})
app.use("/api/users", userRoute);
app.use("/api/profile", profileRoute);
app.use("/api/auth", authRoute)










export default app;