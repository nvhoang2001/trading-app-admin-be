import { MigrationInterface, QueryRunner } from "typeorm";

export class InitDB1690474084976 implements MigrationInterface {
    name = 'InitDB1690474084976'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE \`issue\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`createdBy\` varchar(255) NULL,
                \`updatedAt\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`updatedBy\` varchar(255) NULL,
                \`deletedAt\` timestamp(6) NULL,
                \`userId\` int NOT NULL,
                \`title\` varchar(255) NOT NULL,
                \`description\` varchar(255) NULL,
                \`group\` varchar(255) NULL,
                \`status\` enum ('1', '2', '3', '4') NOT NULL DEFAULT '1',
                \`assignee\` varchar(255) NULL,
                \`severity\` enum ('1', '2', '3', '4') NOT NULL DEFAULT '1',
                \`note\` varchar(255) NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`key\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`createdBy\` varchar(255) NULL,
                \`updatedAt\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`updatedBy\` varchar(255) NULL,
                \`deletedAt\` timestamp(6) NULL,
                \`publicKey\` varchar(255) NOT NULL,
                \`secretKey\` varchar(255) NOT NULL,
                \`platform\` varchar(255) NOT NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`vip\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`createdBy\` varchar(255) NULL,
                \`updatedAt\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`updatedBy\` varchar(255) NULL,
                \`deletedAt\` timestamp(6) NULL,
                \`time\` timestamp NULL,
                \`price\` int NOT NULL,
                \`description\` varchar(255) NULL,
                UNIQUE INDEX \`REL_81ad4130e067b0685771a31682\` (\`createdBy\`),
                UNIQUE INDEX \`REL_86c9dca374694bbb1aca113774\` (\`updatedBy\`),
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`vip_buy_history\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`createdBy\` varchar(255) NULL,
                \`updatedAt\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`updatedBy\` varchar(255) NULL,
                \`deletedAt\` timestamp(6) NULL,
                \`vipId\` int NOT NULL,
                \`userId\` int NOT NULL,
                \`status\` enum ('1', '2', '3') NOT NULL DEFAULT '1',
                \`note\` varchar(255) NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`user\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`createdBy\` varchar(255) NULL,
                \`updatedAt\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`updatedBy\` varchar(255) NULL,
                \`deletedAt\` timestamp(6) NULL,
                \`vipId\` int NULL,
                \`vipRegisterTime\` timestamp NULL,
                \`username\` varchar(255) NOT NULL,
                \`password\` varchar(255) NOT NULL,
                \`avatar\` varchar(255) NULL,
                \`role\` enum ('1', '2', '3', '4') NOT NULL DEFAULT '1',
                UNIQUE INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` (\`username\`),
                UNIQUE INDEX \`REL_82319f64187836b307e6d6ba08\` (\`createdBy\`),
                UNIQUE INDEX \`REL_a19025a009be58684a63961aaf\` (\`updatedBy\`),
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            ALTER TABLE \`balance\` CHANGE \`createdBy\` \`createdBy\` varchar(255) NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`balance\` CHANGE \`updatedBy\` \`updatedBy\` varchar(255) NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`balance\` CHANGE \`deletedAt\` \`deletedAt\` timestamp(6) NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`config\` CHANGE \`createdBy\` \`createdBy\` varchar(255) NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`config\` CHANGE \`updatedBy\` \`updatedBy\` varchar(255) NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`config\` CHANGE \`deletedAt\` \`deletedAt\` timestamp(6) NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`config\` CHANGE \`theme\` \`theme\` varchar(255) NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`transaction\` CHANGE \`createdBy\` \`createdBy\` varchar(255) NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`transaction\` CHANGE \`updatedBy\` \`updatedBy\` varchar(255) NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`transaction\` CHANGE \`deletedAt\` \`deletedAt\` timestamp(6) NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`feedback\` CHANGE \`createdBy\` \`createdBy\` varchar(255) NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`feedback\` CHANGE \`updatedBy\` \`updatedBy\` varchar(255) NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`feedback\` CHANGE \`deletedAt\` \`deletedAt\` timestamp(6) NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`feedback\` CHANGE \`description\` \`description\` varchar(255) NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`feedback\` CHANGE \`reply\` \`reply\` varchar(255) NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`feedback\` CHANGE \`note\` \`note\` varchar(255) NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`vip\`
            ADD CONSTRAINT \`FK_81ad4130e067b0685771a31682b\` FOREIGN KEY (\`createdBy\`) REFERENCES \`user\`(\`username\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`vip\`
            ADD CONSTRAINT \`FK_86c9dca374694bbb1aca1137742\` FOREIGN KEY (\`updatedBy\`) REFERENCES \`user\`(\`username\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`vip_buy_history\`
            ADD CONSTRAINT \`FK_07a56ba90ee9d03afa0a846ad51\` FOREIGN KEY (\`vipId\`) REFERENCES \`vip\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`vip_buy_history\`
            ADD CONSTRAINT \`FK_accfd1edcbb97c2a768ad22ac45\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`user\`
            ADD CONSTRAINT \`FK_11fb0cb87355fa92bd25f02d69f\` FOREIGN KEY (\`vipId\`) REFERENCES \`vip\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`user\`
            ADD CONSTRAINT \`FK_82319f64187836b307e6d6ba08d\` FOREIGN KEY (\`createdBy\`) REFERENCES \`user\`(\`username\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`user\`
            ADD CONSTRAINT \`FK_a19025a009be58684a63961aaf3\` FOREIGN KEY (\`updatedBy\`) REFERENCES \`user\`(\`username\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`feedback\`
            ADD CONSTRAINT \`FK_4a39e6ac0cecdf18307a365cf3c\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`feedback\`
            ADD CONSTRAINT \`FK_e23922e381272dd3f99923553fb\` FOREIGN KEY (\`createdBy\`) REFERENCES \`user\`(\`username\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`feedback\`
            ADD CONSTRAINT \`FK_6ac298090724415b62d6807dbe5\` FOREIGN KEY (\`updatedBy\`) REFERENCES \`user\`(\`username\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`feedback\` DROP FOREIGN KEY \`FK_6ac298090724415b62d6807dbe5\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`feedback\` DROP FOREIGN KEY \`FK_e23922e381272dd3f99923553fb\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`feedback\` DROP FOREIGN KEY \`FK_4a39e6ac0cecdf18307a365cf3c\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_a19025a009be58684a63961aaf3\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_82319f64187836b307e6d6ba08d\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_11fb0cb87355fa92bd25f02d69f\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`vip_buy_history\` DROP FOREIGN KEY \`FK_accfd1edcbb97c2a768ad22ac45\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`vip_buy_history\` DROP FOREIGN KEY \`FK_07a56ba90ee9d03afa0a846ad51\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`vip\` DROP FOREIGN KEY \`FK_86c9dca374694bbb1aca1137742\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`vip\` DROP FOREIGN KEY \`FK_81ad4130e067b0685771a31682b\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`feedback\` CHANGE \`note\` \`note\` varchar(255) NULL DEFAULT 'NULL'
        `);
        await queryRunner.query(`
            ALTER TABLE \`feedback\` CHANGE \`reply\` \`reply\` varchar(255) NULL DEFAULT 'NULL'
        `);
        await queryRunner.query(`
            ALTER TABLE \`feedback\` CHANGE \`description\` \`description\` varchar(255) NULL DEFAULT 'NULL'
        `);
        await queryRunner.query(`
            ALTER TABLE \`feedback\` CHANGE \`deletedAt\` \`deletedAt\` timestamp(6) NULL DEFAULT 'NULL'
        `);
        await queryRunner.query(`
            ALTER TABLE \`feedback\` CHANGE \`updatedBy\` \`updatedBy\` varchar(255) NULL DEFAULT 'NULL'
        `);
        await queryRunner.query(`
            ALTER TABLE \`feedback\` CHANGE \`createdBy\` \`createdBy\` varchar(255) NULL DEFAULT 'NULL'
        `);
        await queryRunner.query(`
            ALTER TABLE \`transaction\` CHANGE \`deletedAt\` \`deletedAt\` timestamp(6) NULL DEFAULT 'NULL'
        `);
        await queryRunner.query(`
            ALTER TABLE \`transaction\` CHANGE \`updatedBy\` \`updatedBy\` varchar(255) NULL DEFAULT 'NULL'
        `);
        await queryRunner.query(`
            ALTER TABLE \`transaction\` CHANGE \`createdBy\` \`createdBy\` varchar(255) NULL DEFAULT 'NULL'
        `);
        await queryRunner.query(`
            ALTER TABLE \`config\` CHANGE \`theme\` \`theme\` varchar(255) NULL DEFAULT 'NULL'
        `);
        await queryRunner.query(`
            ALTER TABLE \`config\` CHANGE \`deletedAt\` \`deletedAt\` timestamp(6) NULL DEFAULT 'NULL'
        `);
        await queryRunner.query(`
            ALTER TABLE \`config\` CHANGE \`updatedBy\` \`updatedBy\` varchar(255) NULL DEFAULT 'NULL'
        `);
        await queryRunner.query(`
            ALTER TABLE \`config\` CHANGE \`createdBy\` \`createdBy\` varchar(255) NULL DEFAULT 'NULL'
        `);
        await queryRunner.query(`
            ALTER TABLE \`balance\` CHANGE \`deletedAt\` \`deletedAt\` timestamp(6) NULL DEFAULT 'NULL'
        `);
        await queryRunner.query(`
            ALTER TABLE \`balance\` CHANGE \`updatedBy\` \`updatedBy\` varchar(255) NULL DEFAULT 'NULL'
        `);
        await queryRunner.query(`
            ALTER TABLE \`balance\` CHANGE \`createdBy\` \`createdBy\` varchar(255) NULL DEFAULT 'NULL'
        `);
        await queryRunner.query(`
            DROP INDEX \`REL_a19025a009be58684a63961aaf\` ON \`user\`
        `);
        await queryRunner.query(`
            DROP INDEX \`REL_82319f64187836b307e6d6ba08\` ON \`user\`
        `);
        await queryRunner.query(`
            DROP INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` ON \`user\`
        `);
        await queryRunner.query(`
            DROP TABLE \`user\`
        `);
        await queryRunner.query(`
            DROP TABLE \`vip_buy_history\`
        `);
        await queryRunner.query(`
            DROP INDEX \`REL_86c9dca374694bbb1aca113774\` ON \`vip\`
        `);
        await queryRunner.query(`
            DROP INDEX \`REL_81ad4130e067b0685771a31682\` ON \`vip\`
        `);
        await queryRunner.query(`
            DROP TABLE \`vip\`
        `);
        await queryRunner.query(`
            DROP TABLE \`key\`
        `);
        await queryRunner.query(`
            DROP TABLE \`issue\`
        `);
    }

}
