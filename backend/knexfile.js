// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_NAME || 'clinic_stocktake',
      user: process.env.POSTGRES_USER || 'postgres',
      password: process.env.POSTGRES_USER_PW || '1234',
      port: process.env.POSTGRES_PORT || 5432,
      host:  process.env.POSTGRES_HOST || 'localhost'
    },
    migrations: {
      directory: './db/migrations'
    },
      seeds: {  
        directory: './db/seeds'
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds'
    },
  }
};