exports.up = function(knex) {
    return knex.schema.createTable("users", table => {
      table.increments();
  
      table
        .string("username", 100)
        .notNullable()
        .unique();
  
      table.string("password", 100)
      .notNullable();
  
      table.string("email", 100)
      .notNullable()
      .unique();

      table.string("name", 100)
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users");
  };