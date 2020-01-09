import { MigrationInterface, QueryRunner, Table, TableIndex, TableForeignKey } from "typeorm";

export class Eye1575013895430 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: "Eye",
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

        await queryRunner.createIndex("Eye", new TableIndex({
            name: 'MAKE_EYEID_BE_INDEX',
            columnNames: ['id']
        }));
        await queryRunner.createForeignKey("Eye", new TableForeignKey({
            columnNames: ["userId"],
            referencedColumnNames: ["id"],
            referencedTableName: "User",
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("Eye");
    }

}
