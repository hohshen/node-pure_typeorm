import { MigrationInterface, QueryRunner, Table, TableIndex, TableForeignKey } from "typeorm";

export class GroupMember1575014371444 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: "group_member_user",
            columns: [
                {
                    name: "id",
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'groupId',
                    type: 'int',
                },
                {
                    name: 'userId',
                    type: 'int',
                }
            ]
        }))
        await queryRunner.createIndex("group_member_user", new TableIndex({
            name: 'MAKE_GROUPMEMBERID_BE_INDEX',
            columnNames: ['id']
        }));
        await queryRunner.createForeignKey("group_member_user", new TableForeignKey({
            columnNames: ["groupId"],
            referencedColumnNames: ["id"],
            referencedTableName: "group",
            onDelete: "CASCADE"
        }));
        await queryRunner.createForeignKey("group_member_user", new TableForeignKey({
            columnNames: ["userId"],
            referencedColumnNames: ["id"],
            referencedTableName: "user",
            onDelete: "CASCADE"
        }));

    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("group_member_user");
    }

}
