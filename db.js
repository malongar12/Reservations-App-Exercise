/** Database for lunchly */

const Pool = require("pg").Pool



const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "lunchly",
    password: "malongar12",
    port: 5432,

});

module.exports = pool


const pg = require("pg");

const db = new pg.Client("postgresql:///lunchly");

db.connect();

module.exports = db;
