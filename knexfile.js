// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "beta",
      user: "taesukim",
      password: "",
    },
    migrations: "migrations",
  },

  production: {
    client: "postgresql",
    connection: {
      host: "ec2-54-235-98-1.compute-1.amazonaws.com",
      database: "demkp0nba6emfr",
      user: "cttgvtrzmjedmu",
      password:
        "bf2babd4b465bf886625960c0ae0fd272609314650cf2f93a3c5b7991304f4a6",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
