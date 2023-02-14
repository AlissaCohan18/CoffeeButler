const mySql = require('mysql2');
const fs = require('fs');
const bcrypt = require('bcryptjs');
//load .env variables
require('.env').config();
//read sql seed query
const querySeed = fs. readFileSync('db/seed.sql', {
    encoding: 'utf-8',
});
//connect to the db
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    multipleStatements: true,
});

connection.connect();

const psw = Math.random()
    .toString(36)
    .substring(2)
const hash = bcrypt.hashSync(psw, 10)

console.log('Running SQL seed...')

//run seed query
connection.query(seedQuery, [hash], err => {
    if (err) {
        throw err
    }

    console.log('SQL seed complete! Password for initial admin account: ' + psw)
    connection.end()
})


