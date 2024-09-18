import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlertBlog1726650727806 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.addColumn('blogs', new TableColumn({
        //     name: 'lastLogin',
        //     type: 'timestamp',
        //     default: 'CURRENT_TIMESTAMP'
        // }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.dropColumn('blogs', 'lastLogin');

    }
}
