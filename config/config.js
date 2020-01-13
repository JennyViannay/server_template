// This file is to connect your server with your bdd.
// The best practice is to use .env with dotenv, 
// but if you just need to use the server personnaly so you can set your DB connection 
// directly in this file

// Uncomment this line below if you want to use dotenv and a .env file
// require('dotenv').config(process.cwd(), '.env')
// if you use dotenv, think to change connection below by VARIABLES of .env
// Report you to the README.md in the same directory to see example.
const db_name = ''
const db_port = 3306 //8889 if you use MAMP Server
const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    port: db_port,
    user: 'root',
    password: 'root',
    database: db_name
})

connection.connect(function (err) {
    if (!err) {
        console.log(`😎😎 -- MySql is connected on ${db_name}'s database on port ${db_port} -- 😎😎`);
    } else {
        console.log("-- 👎 👎  -- Error connecting MySql : -- 👎 👎 -- ", err);
    }
});

module.exports = connection