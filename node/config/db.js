const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const pool = mysql.createPool({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASS, // Corrected key from DBPASS to password
    database: process.env.DBNAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool.promise();
