const { Pool } = require('pg');

// Create a connection pool to PostgreSQL
const pool = new Pool({
  host: 'localhost', // Your host
  user: 'postgres', // Your PostgreSQL username
  password: 'mphosi88', // Your PostgreSQL password
  database: 'School', // Database name
  port: 5432, // Default PostgreSQL port
  max: 20, // Max number of connections to the database
  idleTimeoutMillis: 30000, // How long to wait before timing out idle clients
  connectionTimeoutMillis: 2000, // Max time to wait for a connection to be established
});


// Optional: add a connection error handler
pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1); // Exit process on error
});

module.exports = pool;
