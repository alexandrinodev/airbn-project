import express from "express";
import dotenv from "dotenv";
import UserRoutes from "./domains/users/routes.js";

dotenv.config();

const { PORT } = process.env;
const app = express();

app.use(express.json());
app.use("/users", UserRoutes);

app.listen(PORT, () => {
    console.log(`Servidor esta rodando na porta ${PORT}`);
});
