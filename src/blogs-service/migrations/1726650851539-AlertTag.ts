import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlertTag1726650851539 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.addColumn('tags', new TableColumn({
        //     name: 'description',
        //     type: 'varchar',
        //     length: '255'
        // }));

        // await queryRunner.addColumn('tags', new TableColumn({
        //     name: 'author',
        //     type: 'varchar',
        //     length: '255'
        // }));

        // await queryRunner.addColumn('tags', new TableColumn({
        //     name: 'reading_time',
        //     type: 'varchar',
        //     length: '10'
        // }));

        await queryRunner.renameColumn('tags', 'name', 'title');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.dropColumn('tags', 'description');
        // await queryRunner.dropColumn('tags', 'author');
        // await queryRunner.dropColumn('tags', 'reading_time');
        await queryRunner.renameColumn('tags', 'title', 'name');
    }
}
