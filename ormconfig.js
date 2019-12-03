module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 30678,
  username: 'dev',
  password: 'dev',
  database: 'db',
  entities: ['src/**/*.entity{.ts,.js}'],
  migrations: ['migration/**/*.ts'],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'migration',
  },
};
