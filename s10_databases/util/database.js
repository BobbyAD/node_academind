const mysql = require("mysql2");

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: 'node-complete',
    password: process.env.DB_PASSWORD
});