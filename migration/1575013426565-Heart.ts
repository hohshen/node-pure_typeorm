import {MigrationInterface, QueryRunner,Table,TableIndex,TableForeignKey} from "typeorm";

export class Heart1575013426565 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: "heart",
            columns: [
                {
                    name: "id",
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
                    name: 'userId',  
                    type: 'int',
                }
            ]
        }))

        await queryRunner.createIndex("heart",new TableIndex({
            name:'MAKE_HEARTID_BE_INDEX',
            columnNames:['id']
        }));
        await queryRunner.createForeignKey("heart", new TableForeignKey({
            columnNames: ["userId"],
            referencedColumnNames: ["id"],
            referencedTableName: "user",
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("heart");
    }

}
