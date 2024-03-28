"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import sqlite3 from 'sqlite3';
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database(':memory:'); // In-memory database for demonstration
// Create users table
db.serialize(function () {
    db.run("CREATE TABLE IF NOT EXISTS users (\n        id INTEGER PRIMARY KEY,\n        username TEXT UNIQUE,\n        password TEXT\n    )");
});
exports.default = db;
