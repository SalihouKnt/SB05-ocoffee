import pg from 'pg';

// Create connexion client to Postgres database
export const client = new pg.Client(process.env.DATABASE_URL);

// Connect it
client.connect();