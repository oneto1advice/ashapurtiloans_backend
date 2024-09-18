import { Entity, PrimaryGeneratedColumn,CreateDateColumn, Column,UpdateDateColumn } from 'typeorm';

@Entity("loans")
export class Loans {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: 'varchar', length: 255 })
  title: string | undefined;

  @Column('decimal', { precision: 12, scale: 2 })
  minimum: number | undefined;

  @Column('decimal', { precision: 12, scale: 2 })
  maximum: number | undefined;

  @Column('decimal', { precision: 5, scale: 2 })
  interestMin: number | undefined;

  @Column('decimal', { precision: 5, scale: 2 })
  interestMax: number | undefined;

  @Column({ type: 'varchar', length: 255 })
  description: string | undefined;

  @Column({ type: 'varchar', length: 255, default: null })
  minTimeLoanTenure: string | undefined;

  @Column({ type: 'varchar', length: 255, default: null })
  maxTimeLoanTenure: string | undefined;

  @Column('simple-array')
  particulars: string[] | undefined;

  @Column('simple-array')
  twelveMonthsProduct: string[] | undefined;

  @Column('simple-array')
  sixMonthsProduct: string[] | undefined;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date | undefined;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date | undefined;

  @Column({ type: 'varchar', length: 1, default: 1 })
  status: number | undefined;
}