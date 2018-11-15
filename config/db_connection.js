
var mysql = require('mysql');
var mysql2 = require('mysql2/promise');
var userConnection   = mysql.createConnection({
  supportBigNumbers: true,
  bigNumberStrings: true,
  host     : process.env.DB_USERS_DB_HOST,
  user     : process.env.DB_USERNAME,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_USERS,
  dateStrings:true,
  timezone : 'utc'
});
var testConnection   = mysql.createConnection({
  supportBigNumbers: true,
  bigNumberStrings: true,
  host     : process.env.DB_TEST_HOST,
  user     : process.env.DB_USERNAME,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_TEST,
  dateStrings:true,
  timezone : 'utc'
});
var asyncTestConnection =  mysql2.createPool({
  connectionLimit:50,
  host     : process.env.DB_TEST_HOST,
  user     : process.env.DB_USERNAME,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_TEST,
  dateStrings:true,
  timezone : 'utc'
})
module.exports.usersConnection = userConnection;
module.exports.testConnection = testConnection;
module.exports.asyncTestConnection = asyncTestConnection;