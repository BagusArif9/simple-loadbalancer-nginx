const express = require('express');
const app = express();

const jsonContent = [
  {
    "name": "bagus",
    "email": "bagus@demo.com"
  },
  {
    "name": "awikwok",
    "email": "awikwok@demo.com"
  },
  {
    "name": "dea",
    "email": "dea@demo.com"
  }
];

app.get('/', (req, res) => {
  res.json(jsonContent);
});

const port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

