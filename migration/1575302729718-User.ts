import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm";

export class User1575302729718 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: "user",
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
                    name: 'email',
                    type: 'varchar',
                }
            ]
        }))

        await queryRunner.createIndex("user", new TableIndex({
            name: 'MAKE_USERID_BE_INDEX',
            columnNames: ['id']
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("user");
    }

}
