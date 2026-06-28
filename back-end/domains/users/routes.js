import { Router } from "express";
import { connectDB } from "../../config/db.js";
import User from "./model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

const router = Router();
const bcryptSalt = bcrypt.genSaltSync();
const { JWT_SECRET_KEY } = process.env;

router.post("/", async (req, res) => {
    await connectDB();
    try {
        const { name, email, password } = req.body;
        const encryptedPassword = bcrypt.hashSync(password, bcryptSalt);
        const newUserDoc = await User.create({
            name,
            email,
            password: encryptedPassword,
        });

        res.status(201).json({ newUserDoc });
    } catch (e) {
        console.error(e);
        res.status(500).json({ ok: false, error: String(e?.message || e) });
    }
});

router.get("/", async (req, res) => {
    await connectDB();

    try {
        const dadosUsers = await User.find({});
        res.status(200).json({ dadosUsers });
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("/profile", async (req, res) => {
    const { token } = req.cookies;

    if (token) {
        try {
            const userInfo = jwt.verify(token, JWT_SECRET_KEY);
            return res.json(userInfo);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    return res.json(null);
});

router.post("/login", async (req, res) => {
    await connectDB();

    const { email, password } = req.body;

    try {
        const userDoc = await User.findOne({ email });

        if (!userDoc) {
            return res.status(401).json("Usuario nao encontrado");
        }

        const { name, _id } = userDoc;
        const passwordCorrect = bcrypt.compareSync(password, userDoc.password);

        if (!passwordCorrect) {
            return res.status(400).json("Senha inválida");
        }

        const newUserObj = { _id, name, email };
        const token = jwt.sign(newUserObj, JWT_SECRET_KEY);

        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "lax",
        }).json(newUserObj);
    } catch (error) {
        return res.status(500).json(error);
    }
});

export default router;
