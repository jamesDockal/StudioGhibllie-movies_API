import { MigrationInterface, QueryRunner } from "typeorm";

export class default1660146141279 implements MigrationInterface {
    name = 'default1660146141279'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" varchar NOT NULL, "banner" varchar NOT NULL, "description" varchar NOT NULL, "producer" varchar NOT NULL, "created_at" date NOT NULL DEFAULT ('2022-08-10T15:42:28.362Z'))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "products"`);
    }

}
