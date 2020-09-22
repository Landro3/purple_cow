const express = require('express');
const path = require('path');

// Express setup
const app = express();
const port = process.env.PORT || 8000;
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (_request, response) => {
  response.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
})

app.listen(port, () => {
  console.log('Server is up!')
})