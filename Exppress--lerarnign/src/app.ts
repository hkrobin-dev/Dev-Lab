import express, { type Application, type Request, type Response } from "express"
import { pool } from "./db";
import { userRoute } from "./modules/user/user.rotue";
const app: Application = express()

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));


app.use("/app/users", userRoute);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    "message": "Express Server",
    "author": "next level"
  })
})






app.delete("/api/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await pool.query(`
    DELETE FROM users WHERE id=$1
      `, [id]);
    if (result.rowCount === 0) {
      res.status(404).json({
        success: false,
        message: "users not found",
        data: {},
      })
    }
    res.status(200).json({
      success: true,
      message: "users deleted successfully",
      data: {},
    });

  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      data: error,
    });
  }
})

export default app;