
var pgPromise = require("pg-promise");
var pgInstance = pgPromise();

var config = {
  host: "localhost",
  port: 5432,
  database: 'school_db',
  user: process.env.DB_USER
};


var connection = pgInstance( process.env.DATABASE_URL ||config);

module.exports = connection;