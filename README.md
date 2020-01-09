# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm run start` command


# Migration
##### tips: If you setted up ormconfig.josn.You can created all entity,and generate `npx typeorm migration:generate -n ALL`, it will auto generate a migragion function to all table by entity.

##### note: In typeorm migration is only depend by database,it can't effect entity,so both are independency.
##### note: You need to use tsc to compile migration
##### note: Table name will depending on entity class name and name will tolowercase.(postgres not direct support uppercase table name)
```json
  "mg:gn":"typeorm migration:generate -n ALL",
  "mg:up":"typeorm migration:run",
  "mg:dw":"typeorm migration:revert"
```
### How to write migration 
* Only focus on origin database design (foreign and index...)
* When tyeporm connect ,it will import and combine all entity.

### Sequelize
* Migration only focus on origin database design (foreign and index...)
* .sequelizerc will bind migration , model and seeder.
* because relaction at each model. sequelize need to import (first second ... is important)every model and sequelize.sync() again so if you want don't open sync need to bind migration , model and seeder together.

### how to run migration
1. `npm run build`
2. `npm run mg:up`