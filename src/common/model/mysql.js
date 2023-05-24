import { createPool } from "mysql2/promise.js";
import configEnv from "../../../config.js";

export const pool = createPool({
    host: configEnv.mysql.host,
    user: configEnv.mysql.user,
    password:configEnv.mysql.password,
    port: configEnv.mysql.port,
    database: configEnv.mysql.database
})