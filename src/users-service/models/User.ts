import { Entity, PrimaryGeneratedColumn,CreateDateColumn, Column,UpdateDateColumn } from 'typeorm';

@Entity("user")
export class User {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: 'varchar', length: 255 })
  fullName: string | undefined;

  @Column({ type: 'varchar', length: 255 })
  email: string | undefined;

  @Column({ type: 'varchar', length: 15 })
  mobile: number | undefined;

  @Column({ type: 'varchar', length: 255 })
  panCard: string | undefined;

  @Column({ type: 'varchar', length: 255, nullable: true })
  aadharCard: string | undefined;

  @Column({ type: 'varchar', length: 255 })
  password: string | undefined;

  @Column({ type: 'varchar', length: 1 })
  graduationType: number | undefined;

  @Column({ type: 'varchar', length: 1 })
  occupationType: number | undefined;

  @Column({ type: 'varchar', length: 255, default: 'user'})
  role: string | undefined;

  @Column({ type: 'varchar', length: 255, nullable: true })
  jwtToken?: string;

  @Column({ type: 'timestamp', default: 'CURRENT_TIMESTAMP' })
  lastLogin: Date | undefined;

  @Column({type: 'boolean', default: false })
  isVerified: boolean | undefined;

  @UpdateDateColumn({ type: 'timestamp', default: 'CURRENT_TIMESTAMP' })
  updatedAt: Date | undefined;

  @CreateDateColumn({ type: 'timestamp', default: 'CURRENT_TIMESTAMP' })
  createdAt: Date | undefined;
}