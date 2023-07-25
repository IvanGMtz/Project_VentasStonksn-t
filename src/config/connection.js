import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();
let config = process.env;

const con = mysql.createPool({
    host: `${config.DB_HOST}`,
    user: `${config.DB_USER}`,
    password: `${config.DB_PASSWORD}`,
    database: `${config.DB_NAME}`,
    port: 3306
});

export default  con;