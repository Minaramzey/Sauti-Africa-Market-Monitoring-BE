// Update with your config settings.
require('dotenv').config()
module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './database/Sauti-Market.db3'
    },
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'sqlite3',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./database/migrations",
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: "./database/seeds",
  },
  ssl: true,

}

};