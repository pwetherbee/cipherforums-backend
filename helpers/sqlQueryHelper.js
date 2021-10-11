require("dotenv").config();
let mySQL = require("mysql");
const mySQL2 = require("mysql2/promise");

const env = process.env;
let password = String(env.DB_PASSWORD);
class SQLHelper {
  createConnection() {
    let connection = mySQL.createConnection({
      //TODO: Create an env file to store password to database
      connectionLimit: 20,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: password,
      database: process.env.DB_NAME,
      multipleStatements: true,
      dateStrings: true,
    });
    return connection;
  }
  createConnection2() {
    return mySQL2.createConnection({
      connectionLimit: 20,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: password,
      database: process.env.DB_NAME,
      multipleStatements: true,
      dateStrings: true,
    });
  }
}

module.exports = new SQLHelper();
