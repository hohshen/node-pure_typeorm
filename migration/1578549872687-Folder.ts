import {MigrationInterface, QueryRunner, Table, TableForeignKey, TableIndex} from "typeorm";

export class Folder1578549872687 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: "folder",
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'name',
                    type: 'varchar',
                },  
                {
                    name: 'parentId',
                    type: 'int',
                    isNullable: true,
                    default:null
                }
            ]
        }))
        await queryRunner.createIndex("folder", new TableIndex({
            name: 'MAKE_TREEID_BE_INDEX',
            columnNames: ['id']
        }));
        await queryRunner.createForeignKey("folder", new TableForeignKey({
            columnNames: ["parentId"],
            referencedColumnNames: ["id"],
            referencedTableName: "folder",
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("folder");
    }

}
