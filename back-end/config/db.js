import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const { MONGO_URL, DB_NAME } = process.env;

export const connectDB = async () => {
    try {
        if (!MONGO_URL) throw new Error("Missing MONGO_URL in environment");

        await mongoose.connect(MONGO_URL, {
            dbName: DB_NAME || "airbnb",
        });

        console.log("Connected on database");
    } catch (error) {
        console.log("Not connected on database", error);
        throw error;
    }
};
