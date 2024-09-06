import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: 'varchar', length: 255 })
  fullName: string | undefined;

  @Column({ type: 'varchar', length: 255 })
  email: string | undefined;

  @Column({ type: 'varchar', length: 15 })
  mobile: number | undefined;

  @Column({ type: 'varchar', length: 255, nullable: true })
  panCard: string | undefined;

  @Column({ type: 'varchar', length: 255, nullable: true })
  aadharCard: string | undefined;

  @Column({ type: 'varchar', length: 255 })
  password: string | undefined;

  @Column({ type: 'varchar', length: 1 })
  graduationType: number | undefined;

  @Column({ type: 'varchar', length: 1 })
  occupationType: number | undefined;
}