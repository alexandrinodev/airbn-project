import express from "express";
import dotenv from "dotenv/config";
import UserRoutes from "./domains/users/routes.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const { PORT } = process.env;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    }),
);
app.use("/users", UserRoutes);

app.listen(PORT, () => {
    console.log(`Servidor esta rodando na porta ${PORT}`);
});
