import { MigrationInterface, QueryRunner } from "typeorm";

export class default1660157066958 implements MigrationInterface {
    name = 'default1660157066958'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "movies" ("id" varchar PRIMARY KEY NOT NULL, "title" varchar NOT NULL, "banner" varchar NOT NULL, "description" varchar NOT NULL, "director" varchar NOT NULL, "producer" varchar NOT NULL, "created_at" date NOT NULL DEFAULT ('2022-08-10T18:44:43.518Z'))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "movies"`);
    }

}
