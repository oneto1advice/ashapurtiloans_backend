import { DataSource } from 'typeorm';
import { User } from '../models/User';
import dotenv from 'dotenv';

dotenv.config();



export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User],
  synchronize: false, // Sync schema with the database
  migrations: ['./src/users-service/migrations/*.ts'],
});
