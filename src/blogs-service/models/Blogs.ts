import { Entity, PrimaryGeneratedColumn,CreateDateColumn, Column,UpdateDateColumn } from 'typeorm';

@Entity("blogs")
export class Blogs {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: 'varchar', length: 255 })
  title: string | undefined;

  @Column({ type: 'varchar', length: 255 })
  description: string | undefined;
 
  @Column({ type: 'varchar', length: 255 })
  author: string | undefined;

  @Column({ type: 'varchar', length: 10 })
  reading_time: number | undefined;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date | undefined;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date | undefined;

  @Column({ type: 'varchar', length: 1, default: 1 })
  status: number | undefined;
}