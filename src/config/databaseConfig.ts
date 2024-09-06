import { DataSource } from 'typeorm';
import { User } from '../users-service/models/User';




export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'ashapurtiloansdb',
  entities: [User],
  synchronize: true, // Sync schema with the database
});
