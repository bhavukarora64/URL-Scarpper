-- CreateTable
CREATE TABLE `headings` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `analysis_id` INTEGER NOT NULL,
    `h1` INTEGER NULL DEFAULT 0,
    `h2` INTEGER NULL DEFAULT 0,
    `h3` INTEGER NULL DEFAULT 0,
    `h4` INTEGER NULL DEFAULT 0,
    `h5` INTEGER NULL DEFAULT 0,
    `h6` INTEGER NULL DEFAULT 0,

    INDEX `analysis_id`(`analysis_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `links` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `analysis_id` INTEGER NOT NULL,
    `url` TEXT NOT NULL,
    `type` ENUM('internal', 'external') NOT NULL,
    `status_code` INTEGER NULL,
    `error_type` VARCHAR(255) NULL,

    INDEX `analysis_id`(`analysis_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `url_analyses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `url` TEXT NOT NULL,
    `title` VARCHAR(512) NULL,
    `html_version` VARCHAR(50) NULL,
    `login_form_present` BOOLEAN NULL,
    `created_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `completed_at` DATETIME(0) NULL,

    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(255) NOT NULL,
    `password_hash` VARCHAR(255) NOT NULL,
    `name` VARCHAR(100) NULL,
    `created_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `headings` ADD CONSTRAINT `headings_ibfk_1` FOREIGN KEY (`analysis_id`) REFERENCES `url_analyses`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `links` ADD CONSTRAINT `links_ibfk_1` FOREIGN KEY (`analysis_id`) REFERENCES `url_analyses`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `url_analyses` ADD CONSTRAINT `url_analyses_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
