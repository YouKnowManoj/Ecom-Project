const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Mock products
const products = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Phone', price: 499 },
  { id: 3, name: 'Headphones', price: 199 },
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(3000, () => console.log('Backend running on port 3000'));