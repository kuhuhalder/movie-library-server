const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
// routes
const movies = require('./routes/api/movies');
const app = express();

// connect database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/movies', movies);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));


