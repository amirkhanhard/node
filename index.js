import express from "express"
import authRoutes from "./routes/auth.routes.js";
import dotenv from "dotenv"
// import connectDB from "./lib/connectDB.js";
import { defaultData } from "./middlewares/auth.middleware.js";

const app = express();

dotenv.config();

//GET http://localhost:5000/api/simple
//GET http://localhost:5000/api/protected
//GET http://localhost:5000/api/multimiddleware

app.use(defaultData); // default middleware
app.use("/api", authRoutes);

app.use((req, res) => {
    res.status(404).json({ error: "Route not found index" });
});

app.listen(5000, () => {
    // connectDB();
    console.log("server is running at http://localhost:5000");
})