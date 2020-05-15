exports.up = function(knex) {
    return knex.schema.createTable("users", table => {
      table.increments();
  
      table
        .text("username", 100)
        .notNullable()
        .unique();
  
      table.text("password", 100)
      .notNullable();
  
      table.text("email", 100)
      .notNullable()
      .unique();

      table.text("name", 100)
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users");
  };