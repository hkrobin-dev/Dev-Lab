const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running' });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body || {};

  if (email === 'admin@example.com' && password === 'password123') {
    return res.json({
      message: 'Login successful',
      user: {
        id: 1,
        name: 'Admin User',
        email,
      },
    });
  }

  return res.status(401).json({ message: 'Invalid email or password' });
});

app.post('/api/register', (req, res) => {
  const { name, email, password } = req.body || {};

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Please provide name, email, and password' });
  }

  return res.status(201).json({
    message: 'Registration successful',
    user: {
      id: Date.now(),
      name,
      email,
    },
  });
});

app.get('/', (req, res) => {
  res.send('Backend server is up');
});

let client;
let db;

async function connectToMongo() {
  if (db) return db;

  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.warn('MONGO_URI is not set. MongoDB connection skipped.');
    return null;
  }

  client = new MongoClient(uri);
  await client.connect();
  db = client.db(process.env.MONGO_DB_NAME || 'daisy-palace');
  console.log('MongoDB connected');
  return db;
}

connectToMongo().catch((err) => {
  console.error('MongoDB connection failed:', err.message);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
