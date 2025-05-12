const path = require('path');
const express = require('express');
const posts = require('./routes/posts');
const logger = require('./middleware/logger.js');

const port = process.env.PORT || 8000;
const app = express();

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Logger middleware
app.use(logger);

// Routes
app.use('/api/posts', posts);

app.listen(port, () => console.log(`Server started on port ${port}`));
