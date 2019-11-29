module.exports = [
   {
      "type": "mysql",
      "host": "localhost",
      "port": 30678,
      "username": "dev",
      "password": "dev",
      "database": "db",
      "logging": false,
      "entities": [
         "dist/src/entity/**/*.js"
      ],
      "migrations": [
         "dist/migration/**/*.js"
      ],
      "cli": {
         "entitiesDir": "src/entity",
         "migrationsDir": "migration",
         "subscribersDir": "src/subscriber"
      }
   }
]