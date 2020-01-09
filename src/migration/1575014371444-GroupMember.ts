import { MigrationInterface, QueryRunner, Table, TableIndex, TableForeignKey } from "typeorm";

export class GroupMember1575014371444 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: "GroupMember",
            columns: [
                {
                    name: "id",
                    type: 'int',
                    isPrimary: true,
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
        await queryRunner.createIndex("GroupMember", new TableIndex({
            name: 'MAKE_GROUPMEMBERID_BE_INDEX',
            columnNames: ['id']
        }));
        await queryRunner.createForeignKey("GroupMember", new TableForeignKey({
            columnNames: ["groupId"],
            referencedColumnNames: ["id"],
            referencedTableName: "Group",
            onDelete: "CASCADE"
        }));
        await queryRunner.createForeignKey("GroupMember", new TableForeignKey({
            columnNames: ["userId"],
            referencedColumnNames: ["id"],
            referencedTableName: "User",
            onDelete: "CASCADE"
        }));

    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("GroupMember");
    }

}
