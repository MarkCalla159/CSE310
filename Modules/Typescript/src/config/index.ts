import dotenv from "dotenv";

const envFound = dotenv.config();

if (envFound.error) {
    throw new Error("Something wrong is happen but I'm not telling you what");
}

export default {
    port: process.env.PORT || 5000
}