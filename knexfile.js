// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/rainforest',
    migrations: {
      directory: __dirname + '/database/migrations'
    },
    seeds: {
    directory: __dirname + '/database/seeds/development'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'rainforest',
      user:     'rain',
      password: 'forest'
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
    client: 'postgresql',
    connection: {
      database: 'rainforest',
      user:     'rain',
      password: 'forest'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
