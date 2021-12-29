import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCompliments1640646664178 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "compliments",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },

          {
            name: "user_sender",
            type: "uuid",
          },

          {
            name: "user_receiver",
            type: "uuid",
          },

          {
            name: "tag_id",
            type: "uuid",
          },

          {
            name: "message",
            type: "varchar",
          },

          {
            name: "create_at",
            type: "timestamp",
            default: "now()",
          },
        ],

        foreignKeys: [
          {
            name: "fk_user_sender",
            columnNames: ["user_sender"],
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
          {
            name: "fk_user_receiver",
            columnNames: ["user_receiver"],
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
          {
            name: "fk_tag_id",
            columnNames: ["tag_id"],
            referencedTableName: "tags",
            referencedColumnNames: ["id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("compliments");
  }
}
