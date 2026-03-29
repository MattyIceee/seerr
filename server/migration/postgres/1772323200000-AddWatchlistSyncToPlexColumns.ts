import type { MigrationInterface, QueryRunner } from 'typeorm';

export class AddWatchlistSyncToPlexColumns1772323200000
  implements MigrationInterface
{
  name = 'AddWatchlistSyncToPlexColumns1772323200000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user_settings" ADD "watchlistSyncToPlexMovies" boolean`
    );
    await queryRunner.query(
      `ALTER TABLE "user_settings" ADD "watchlistSyncToPlexTv" boolean`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user_settings" DROP COLUMN "watchlistSyncToPlexTv"`
    );
    await queryRunner.query(
      `ALTER TABLE "user_settings" DROP COLUMN "watchlistSyncToPlexMovies"`
    );
  }
}
