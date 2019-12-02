module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 30678,
  username: 'dev',
  password: 'dev',
  database: 'db',
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migration/**/*.js'],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'migration',
    subscribersDir: 'src/subscriber',
  },
};
