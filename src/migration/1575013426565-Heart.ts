import {MigrationInterface, QueryRunner,Table,TableIndex,TableForeignKey} from "typeorm";

export class Heart1575013426565 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: "Heart",
            columns: [
                {
                    name: "id",
                    type: 'int',
                    isPrimary: true,
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

        await queryRunner.createIndex("Heart",new TableIndex({
            name:'MAKE_HEARTID_BE_INDEX',
            columnNames:['id']
        }));
        await queryRunner.createForeignKey("Heart", new TableForeignKey({
            columnNames: ["userId"],
            referencedColumnNames: ["id"],
            referencedTableName: "User",
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("Heart");
    }

}
