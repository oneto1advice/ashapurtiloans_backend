import { MigrationInterface, QueryRunner,TableColumn } from "typeorm";

export class AlertLoan1726150550160 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.addColumn('loans', new TableColumn({
        //     name: 'lastLogin',
        //     type: 'timestamp',
        //     default: 'CURRENT_TIMESTAMP'
        // }));
        // await queryRunner.dropColumn('loans', new TableColumn({
        //     name: 'lastLogin',
        //     type: 'timestamp',
        //     default: 'CURRENT_TIMESTAMP'
        // }))
        // await queryRunner.addColumn('loans', new TableColumn({
        //     name: 'role',
        //     type: 'varchar',
        //     length: '255',
        //     default: 'user'
        // }));

        // await queryRunner.addColumn('loans', new TableColumn({
        //     name: 'createdAt',
        //     type: 'timestamp',
        //     default: 'CURRENT_TIMESTAMP',
        // }));

        // await queryRunner.addColumn('loans', new TableColumn({
        //     name: 'updatedAt',
        //     type: 'timestamp',
        //     default: 'CURRENT_TIMESTAMP',
        //     onUpdate: 'CURRENT_TIMESTAMP',
        // }));

        // await queryRunner.addColumn('loans', new TableColumn({
        //     name: 'isVerified',
        //     type: 'boolean',
        //     default: false,
        // }));

        // await queryRunner.addColumn('loans', new TableColumn({
        //     name: 'jwtToken',
        //     type: 'varchar',
        //     length: '255',
        //     isNullable: true,
        //   }));

        await queryRunner.addColumn('loans', new TableColumn({
            name: 'status',
            type: 'varchar',
            length: '1',
            default: 1,
          }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        //  await queryRunner.dropColumn('user', 'lastLogin');
        // await queryRunner.dropColumn('user', 'role');
        //  await queryRunner.dropColumn('user', 'createdAt');
        //  await queryRunner.dropColumn('user', 'updatedAt');
        //  await queryRunner.dropColumn('user', 'isVerified');
        // await queryRunner.dropColumn('users', 'jwtToken');
        await queryRunner.dropColumn('loans', 'status');
    }

}
