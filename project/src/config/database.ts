import { neon } from '@neondatabase/serverless';

// Get the database connection string from environment variable
const connectionString = import.meta.env.VITE_GUDCITY_DB || process.env.GUDCITY_DB;

if (!connectionString) {
  console.error('Database connection string not found. Please set GUDCITY_DB environment variable.');
}

// Create the database connection
export const sql = neon(connectionString || '');

// Export a function to test the connection
export async function testConnection() {
  try {
    await sql`SELECT 1`;
    console.log('Database connection successful');
    return true;
  } catch (error) {
    console.error('Database connection failed:', error);
    return false;
  }
} 