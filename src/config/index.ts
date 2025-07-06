import { config as dotEnvConfig } from "dotenv";
import path from "path";

dotEnvConfig({ path: path.resolve(process.cwd(), ".env") });

const config = {
    port: process.env.PORT || 5000,
    env: process.env.NODE_ENV || "development",
};

export default config;
