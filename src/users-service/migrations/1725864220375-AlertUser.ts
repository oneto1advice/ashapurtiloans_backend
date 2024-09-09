import { MigrationInterface, QueryRunner, TableColumn  } from "typeorm";

export class AlertUser1725864220375 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.addColumn('user', new TableColumn({
        //     name: 'lastLogin',
        //     type: 'timestamp',
        //     default: 'CURRENT_TIMESTAMP'
        // }));
        // await queryRunner.dropColumn('user', new TableColumn({
        //     name: 'lastLogin',
        //        type: 'timestamp',
        //         default: 'CURRENT_TIMESTAMP'
        // }))
        // await queryRunner.addColumn('user', new TableColumn({
        //     name: 'role',
        //     type: 'varchar',
        //     length: '255',
        //     default: 'user'
        // }));

        // await queryRunner.addColumn('user', new TableColumn({
        //     name: 'createdAt',
        //     type: 'timestamp',
        //     default: 'CURRENT_TIMESTAMP',
        // }));

        // await queryRunner.addColumn('user', new TableColumn({
        //     name: 'updatedAt',
        //     type: 'timestamp',
        //     default: 'CURRENT_TIMESTAMP',
        //     onUpdate: 'CURRENT_TIMESTAMP',
        // }));

        // await queryRunner.addColumn('user', new TableColumn({
        //     name: 'isVerified',
        //     type: 'boolean',
        //     default: false,
        // }));

        await queryRunner.addColumn('user', new TableColumn({
            name: 'jwtToken',
            type: 'varchar',
            length: '255',
            isNullable: true,
          }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        //  await queryRunner.dropColumn('user', 'lastLogin');
        // await queryRunner.dropColumn('user', 'role');
        //  await queryRunner.dropColumn('user', 'createdAt');
        //  await queryRunner.dropColumn('user', 'updatedAt');
        //  await queryRunner.dropColumn('user', 'isVerified');
        await queryRunner.dropColumn('users', 'jwtToken');
    }
}
