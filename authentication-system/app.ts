import express from 'express';
import bodyParser from 'body-parser';
import db from '../src/database';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// User Signup
app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], (err) => {
        if (err) {
            res.json({ success: false, message: 'Username already exists.' });
        } else {
            res.json({ success: true, message: 'User registered successfully.' });
        }
    });
});

// User Login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, row) => {
        if (row) {
            res.json({ success: true, message: 'Login successful.' });
        } else {
            res.json({ success: false, message: 'Invalid username or password.' });
        }
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
