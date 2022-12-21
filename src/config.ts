import dotenv from "dotenv";

dotenv.config();

const config = {
    NODE_ENV: process.env.NODE_ENV || "development",
};

export default config;
