// Create web server
// 1. Create web server
// 2. Define the port
// 3. Define the routes
// 4. Start the server

// 1. Create web server
const express = require('express');
const app = express();

// 2. Define the port
const port = 3000;

// 3. Define the routes
app.get('/', (req, res) => {
  res.send('Welcome to the comments app');
});

app.get('/comments', (req, res) => {
  res.send('Here are the comments');
});

app.get('/comments/:id', (req, res) => {
  res.send('Here is the comment with id: ' + req.params.id);
});

app.post('/comments', (req, res) => {
  res.send('You just made a POST request');
});

app.put('/comments/:id', (req, res) => {
  res.send('You just made a PUT request');
});

app.delete('/comments/:id', (req, res) => {
  res.send('You just made a DELETE request');
});

// 4. Start the server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

// Run the server
// node comments.js
// http://localhost:3000/
// http://localhost:3000/comments
// http://localhost:3000/comments/1
// http://localhost:3000/comments/1?sort=asc
// http://localhost:3000/comments/1?sort=asc&filter=unread
// http://localhost:3000/comments/1?sort=asc&filter=unread&limit=10
// http://localhost:3000/comments/1?sort=asc&filter=unread&limit=10&page=2
// http://localhost:3000/comments/1?sort=asc&filter=unread&limit=10&page=2&search=hello
// http://localhost:3000/comments/1?sort=asc&filter=unread&limit=10&page=2&search=hello&sort=desc
// http://localhost:3000/comments/1?sort=asc&filter=unread&limit=10&page=2&search=hello&sort=desc&filter=unread
// http://localhost:3000/comments/1?sort=asc&filter=unread&limit=