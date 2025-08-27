-- AlterTable
ALTER TABLE `url_analyses` ADD COLUMN `broken_links_count` INTEGER NULL DEFAULT 0,
    ADD COLUMN `external_links_count` INTEGER NULL DEFAULT 0,
    ADD COLUMN `internal_links_count` INTEGER NULL DEFAULT 0;
