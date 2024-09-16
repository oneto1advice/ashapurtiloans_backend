import express from 'express';
import 'reflect-metadata';
import { AppDataSource } from './config/databaseConfig';
import loansRoutes from './routes/loanRoutes';
import dotenv from 'dotenv';

dotenv.config();


const app = express();
app.use(express.json());

// Connect to the database
AppDataSource.initialize()
  .then(() => {
    console.log('Database connected');
    app.use('/api', loansRoutes);
    // Start the server
    app.listen(3000,'0.0.0.0', () => {
      console.log('Server is running on http://localhost:3000');
    });
  })
  .catch((error) => console.error('Database connection error:', error));
