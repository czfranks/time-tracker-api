import { Pool } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();

const dbConfig = {
  host: process.env['DB_HOST'],
  port: parseInt(process.env['DB_PORT'] || '5432', 10),
  database: process.env['DB_DATABASE'],
  user: process.env['DB_USER'],
  password: process.env['DB_PASSWORD'],
};

const pool = new Pool(dbConfig);

export const testDbConnection = async () => {
  try {
    const res = await pool.query('select now()');
    console.log('Test DB connection:', res.rows);
  } catch (err) {
    console.log('Connection error:', err);
  }
};

export default pool;
