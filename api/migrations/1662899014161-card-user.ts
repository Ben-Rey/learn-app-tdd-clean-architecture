import { MigrationInterface, QueryRunner } from 'typeorm';

export class cardUser1662899014161 implements MigrationInterface {
  name = 'cardUser1662899014161';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "password" character varying NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "isActive" boolean NOT NULL DEFAULT true, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "category" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "card" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" date NOT NULL, "updateAt" date NOT NULL, "question" character varying NOT NULL, "answer" character varying NOT NULL, "level" character varying NOT NULL, "isActive" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_9451069b6f1199730791a7f4ae4" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user_users_cards_card" ("userId" uuid NOT NULL, "cardId" uuid NOT NULL, CONSTRAINT "PK_a39eb0e29a8ee8268ff9006cc10" PRIMARY KEY ("userId", "cardId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_f7ec33bd0eaf43f1cf7b5ae84c" ON "user_users_cards_card" ("userId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_c9fa2f5930d8279a2c1c3f3085" ON "user_users_cards_card" ("cardId") `,
    );
    await queryRunner.query(
      `CREATE TABLE "card_category_category" ("cardId" uuid NOT NULL, "categoryId" integer NOT NULL, CONSTRAINT "PK_fdd9c410cbdb190af44cd974d1d" PRIMARY KEY ("cardId", "categoryId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_ccd067c30a62b891e429a61e20" ON "card_category_category" ("cardId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_b8160a9d9b335a1cc175861431" ON "card_category_category" ("categoryId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "user_users_cards_card" ADD CONSTRAINT "FK_f7ec33bd0eaf43f1cf7b5ae84c8" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_users_cards_card" ADD CONSTRAINT "FK_c9fa2f5930d8279a2c1c3f30859" FOREIGN KEY ("cardId") REFERENCES "card"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "card_category_category" ADD CONSTRAINT "FK_ccd067c30a62b891e429a61e209" FOREIGN KEY ("cardId") REFERENCES "card"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "card_category_category" ADD CONSTRAINT "FK_b8160a9d9b335a1cc1758614316" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "card_category_category" DROP CONSTRAINT "FK_b8160a9d9b335a1cc1758614316"`,
    );
    await queryRunner.query(
      `ALTER TABLE "card_category_category" DROP CONSTRAINT "FK_ccd067c30a62b891e429a61e209"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_users_cards_card" DROP CONSTRAINT "FK_c9fa2f5930d8279a2c1c3f30859"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_users_cards_card" DROP CONSTRAINT "FK_f7ec33bd0eaf43f1cf7b5ae84c8"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_b8160a9d9b335a1cc175861431"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_ccd067c30a62b891e429a61e20"`,
    );
    await queryRunner.query(`DROP TABLE "card_category_category"`);
    await queryRunner.query(
      `DROP INDEX "public"."IDX_c9fa2f5930d8279a2c1c3f3085"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_f7ec33bd0eaf43f1cf7b5ae84c"`,
    );
    await queryRunner.query(`DROP TABLE "user_users_cards_card"`);
    await queryRunner.query(`DROP TABLE "card"`);
    await queryRunner.query(`DROP TABLE "category"`);
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
