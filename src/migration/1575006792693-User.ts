import { MigrationInterface, QueryRunner, Table ,TableIndex} from "typeorm";

export class User1575006792693 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: "User",
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
                    name: 'email',
                    type: 'varchar',
                }
            ]
        }))

        await queryRunner.createIndex("User",new TableIndex({
            name:'MAKE_USERID_BE_INDEX',
            columnNames:['id']
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("User");
    }

}
