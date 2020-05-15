const db = require('../db-config');

module.exports = {
    find,
  };
  
  function find() {
    return db("users").select("id", "username", "password", "email", "name");
  }

  