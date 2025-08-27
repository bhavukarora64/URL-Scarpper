-- AlterTable
ALTER TABLE `links` MODIFY `type` ENUM('internal', 'external', 'broken') NOT NULL;
