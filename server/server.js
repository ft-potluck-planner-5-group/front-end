const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 4000;
const app = express();
const token =
  'esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ';

let products = [
    {
        name: 'Orci maecenas',
        location: 'ggg', 
     },
];

app.use(bodyParser.json());

app.use(cors());

let nextId = 7;

function getNextId() {
  return nextId++;
}

function authenticator(req, res, next) {
  const { authorization } = req.headers;
  if (authorization === token) {
    next();
  } else {
    res.status(403).json({ error: 'User must be logged in to do that.' });
  }
}

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'lambda' && password === 'school') {
    req.loggedIn = true;
    res.status(200).json({
      payload: token
    });
  } else {
    res
      .status(403)
      .json({ error: 'Username or Password incorrect. Please see Readme' });
  }
});

app.post('/api/logout', authenticator, (req, res) => {
  req.loggedIn = false;
  res.status(200).json({
    payload: token
  });
});

app.get('/api/products', authenticator, (req, res) => {
  setTimeout(() => {
    res.send(products);
  }, 1000);
});

app.get('/api/products/:id', authenticator, (req, res) => {
  const product = products.find(f => f.id == req.params.id);

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).send({ msg: 'Friend not found' });
  }
});

app.post('/api/products', authenticator, (req, res) => {
  const product = { id: getNextId(), ...req.body };

  products = [...products, product];

  res.send(products);
});

app.get('/api/', (req, res) => {
  res.status(200).json({status: "served"});
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
