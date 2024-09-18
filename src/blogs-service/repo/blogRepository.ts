import { AppDataSource } from '../config/databaseConfig';
import { Blogs, Category, Tag } from '../models/Blogs';
import { In } from 'typeorm';
export class BlogRepository {
    private blogRepository = AppDataSource.getRepository(Blogs);
    private categoryRepository = AppDataSource.getRepository(Category);
    private tagRepository = AppDataSource.getRepository(Tag);
    async createBlog(data: any): Promise<any> {
        try {

              const categories = await this.categoryRepository.findBy({
                id: In(data.categoryIds)
            });

            if (categories.length === 0) {
                throw new Error('Categories not found');
            }

            // Fetch tags by their IDs
            const tags = await this.tagRepository.findBy({
                id: In(data.tagIds)
            });

            if (tags.length === 0) {
                throw new Error('Tags not found');
            }

            // Assign categories and tags to the blog data
            const blogData = {
                ...data,
                categories: categories,  // Assign the array of categories
                tags: tags               // Assign the array of tags
            };

            const savedBlog = this.blogRepository.create(blogData);
            await this.blogRepository.save(savedBlog);
            return { statusCode: 200, message: "Create successfully.", status: "success" };
        } catch (error) {
            console.error('Error creating question:', error);
            throw error;
        }
    }

    async findByEmail(title: string): Promise<any | null> {
        return await this.blogRepository.findOneBy({ title });
    }

    

    async findAllBlogs(): Promise<Blogs[]> {
        return await this.blogRepository.find({ relations: ['categories', 'tags'] });
    }

    async findBlogById(id: number): Promise<Blogs | null> {
        return await this.blogRepository.findOne({
            where: {id: id},
            relations: ['categories', 'tags']});
    }

    async updateBlog(id: number, body: any): Promise<Blogs | null> {
        const blog = await this.blogRepository.findOne({ where: { id: id }, relations: ['categories', 'tags'] });
        if (blog) {
            // const categories = await this.categoryRepository.findBy(categoryIds);
            // const tags = await this.tagRepository.findBy(tagIds);
            // const categories = await this.tagRepository.findBy({
            //     id: In(body.categoryIds)
            // });

            const categories = body.categoryIds ? await this.categoryRepository.findBy({
                id: In(body.categoryIds)
            }) : [];


            // const tags = await this.tagRepository.findBy({
            //     id: In(body.tagIds)
            // });

            const tags = body.tagIds ? await this.tagRepository.findBy({
                id: In(body.tagIds)
            }) : [];


            Object.assign(blog, {
                ...body,
                categories: categories,  // Assign the array of categories
                tags: tags               // Assign the array of tags
            });
            return await this.blogRepository.save(blog);
        }
        return null; 
    }

    async deleteBlog(id: number): Promise<boolean> {
        const result = await this.blogRepository.delete(id);
        return (result.affected ?? 0) > 0;
    }

    async findByBlogId(id: number): Promise<any | null> {
        return this.blogRepository.findOne({ where: { id: id } });
    }

    async sendBlogLink(user: any): Promise<any> {
        await this.blogRepository.save(user);
        return { statusCode: 200, message: "Reset password has been sent successfully on your mailId.", status: "success" }
    }
}