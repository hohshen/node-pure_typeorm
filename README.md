# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm start` command

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

- Only focus on origin database design (foreign and index...)
- When tyeporm connect ,it will import and combine all entity.
- migration tablename need to map to entity name,m to n table name is m_r_n
- m to n, group add user || user add group is ok

### Sequelize

- Migration only focus on origin database design (foreign and index...)
- .sequelizerc will bind migration , model and seeder.
- because relaction at each model. sequelize need to import (first second ... is important)every model and sequelize.sync() again so if you want don't open sync need to bind migration , model and seeder together.

### How to let express connect typeorm
- It will connect by ormconfig.js,and use createConnection() function and then execut express.

# Tree
ref: https://github.com/typeorm/typeorm/blob/master/docs/tree-entities.md
### relation
```javascript
@Entity()
export class Folder {
    @PrimaryGeneratedColumn()id: number;
    @Column()name: string;
    @ManyToOne(type => Folder,parent=>parent.child)parent: Folder;
    @OneToMany(type => Folder, child => child.parent)child: Folder[];
}
```
### table
```shell
id(pk)
name
parentId(fk)
```
### result
```json
//create
// f1.name='grandfather',f1.parent=null; const r1 =await folderRepo.save(f1);
// f2.name='father',f2.parent=f1; const r2 =await folderRepo.save(f2);
// f3.name='son',f3.parent=f2;  const r3 =await folderRepo.save(f3);
{
    "r1": {"id": 7,"name": "grandfather","parent": null  },
    "r2": {"id": 8,"name": "father","parent": 
      {"id": 7,"name": "grandfather","parent": null}
    },   
    "r3": {"id": 9,"name": "son","parent": 
      {"id": 8,"name": "father","parent": 
        {"id": 7,"name": "grandfather","parent":nul}
      }
    }
}
```

```json
// find
//  const r1 =await folderRepo.find({ relations: ["parent"] });
//  const r2 =await folderRepo.find({ relations: ["child"] });
{
  "r1": [
    {"id": 3,"name": "son","parent":{"id": 2,"name": "father"}},
    {"id": 2,"name": "father","parent":{"id": 1,"name": "grandfather"}},
    {"id": 1,"name": "grandfather","parent": null}    
  ],
  "r2": [
    {"id": 1,"name": "grandfather","child": [{"id": 2,"name": "father"}]},
    {"id": 2,"name": "father","child": [{"id": 3,"name": "son"}]},
    {"id": 3,"name": "son","child": []}
  ]
}
```