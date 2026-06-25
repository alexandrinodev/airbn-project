import { Router } from "express";
import { connectDB } from "../../config/db.js";
import User from "./model.js";
import bcrypt from "bcryptjs";

const router = Router();
const bcryptSalt = bcrypt.genSaltSync();

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

export default router;
