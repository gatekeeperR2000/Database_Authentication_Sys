//import sqlite3 from 'sqlite3';
const sqlite3 = require('sqlite3');


const db = new sqlite3.Database(':memory:'); // In-memory database for demonstration

// Create users table
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        username TEXT UNIQUE,
        password TEXT
    )`);
});

export default db;
