import { Entity, PrimaryGeneratedColumn,CreateDateColumn, Column,UpdateDateColumn,ManyToMany, JoinTable } from 'typeorm';

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

  @ManyToMany(() => Category, (category) => category.blogs)
  @JoinTable()
  categories: Category[] | undefined;

  @ManyToMany(() => Tag, (tag) => tag.blogs)
  @JoinTable()
  tags: Tag[] | undefined;


  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date | undefined;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date | undefined;

  @Column({ type: 'varchar', length: 1, default: 1 })
  status: number | undefined;
}

@Entity('categories')
export class Category {
    @PrimaryGeneratedColumn()
    id: number | undefined;

    @Column({ type: 'varchar', length: 255 })
    name: string | undefined;

    @ManyToMany(() => Blogs, (blog) => blog.categories)
    blogs: Blogs[] | undefined;
}



@Entity('tags')
export class Tag {
    @PrimaryGeneratedColumn()
    id: number | undefined;

    @Column({ type: 'varchar', length: 255 })
    name: string | undefined;

    @ManyToMany(() => Blogs, (blog) => blog.tags)
    blogs: Blogs[] | undefined;
}