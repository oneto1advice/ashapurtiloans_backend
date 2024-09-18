import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlertCategory1726650846092 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

      


        // await queryRunner.addColumn('categories', new TableColumn({
        //     name: 'description',
        //     type: 'varchar',
        //     length: '255'
        // }));

        // await queryRunner.addColumn('categories', new TableColumn({
        //     name: 'author',
        //     type: 'varchar',
        //     length: '255'
        // }));

        // await queryRunner.addColumn('categories', new TableColumn({
        //     name: 'reading_time',
        //     type: 'varchar',
        //     length: '10'
        // }));

        // await queryRunner.renameColumn('categories', 'name', 'title');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        // await queryRunner.dropColumn('tags', 'description');
        // await queryRunner.dropColumn('categories', 'author');
        // await queryRunner.dropColumn('categories', 'reading_time');

        // await queryRunner.renameColumn('categories', 'title', 'name');
    }

}
