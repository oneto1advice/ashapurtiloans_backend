import express from 'express';
import 'reflect-metadata';
import { AppDataSource } from './config/databaseConfig';
import blogsRoutes from './routes/blogRoutes';
import dotenv from 'dotenv';

dotenv.config();


const app = express();
app.use(express.json());

// Connect to the database
AppDataSource.initialize()
  .then(() => {
    console.log('Database connected');
    app.use('/api', blogsRoutes);
    // Start the server
    app.listen(3001,'0.0.0.0', () => {
      console.log('Server is running on http://localhost:3001');
    });
  })
  .catch((error: any) => console.error('Database connection error:', error));