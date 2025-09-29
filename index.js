import express from "express"
import authRoutes from "./routes/auth.routes.js";
import dotenv from "dotenv"
import connectDB from "./lib/connectDB.js";

const app = express();

dotenv.config();


app.use("/api", authRoutes);

app.listen(5000, () => {
    connectDB();
    console.log("server is running at http://localhost:5000");
})