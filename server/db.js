const Pool = require('pg').Pool;

require('dotenv').config();

var user = process.env.dbuser
var pass = process.env.dbpass
var db = process.env.dbname

const pool = new Pool({
    user: user,
    password: pass,
    host: "localhost",
    port: 5432,
    database: db
});

module.exports = pool;