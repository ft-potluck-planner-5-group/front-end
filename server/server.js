const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 4000;
const app = express();
const token =
  'esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ';

let friends = [
  {
    id: 1,
    name: 'Rachel Green',
    imageUrl: 'https://raw.githubusercontent.com/ft-potluck-planner-5-group/front-end/products/src/images/food2.jpg',
    instructions: 'rachel@friends.com',
    detailed1:'a',
    detailed2:'b',
    detailed3:'c'
  },
  {
    id: 2,
    name: 'Joey Tribbiani',
    imageUrl: 'https://raw.githubusercontent.com/ft-potluck-planner-5-group/front-end/products/src/images/food2.jpg',
    instructions: 'rachel@friends.com',
    detailed1:'a',
    detailed2:'b',
    detailed3:'c'
  },
  {
    id: 3,
    name: 'Chandler Bing',
    imageUrl: 'https://raw.githubusercontent.com/ft-potluck-planner-5-group/front-end/products/src/images/food2.jpg',
    instructions: 'rachel@friends.com',
    detailed1:'a',
    detailed2:'b',
    detailed3:'c'
  },
  {
    id: 4,
    name: 'Ross Geller',
    imageUrl: 'https://raw.githubusercontent.com/ft-potluck-planner-5-group/front-end/products/src/images/food2.jpg',
    instructions: 'rachel@friends.com',
    detailed1:'a',
    detailed2:'b',
    detailed3:'c'
  },
  {
    id: 5,
    name: 'Monica Bing',
    imageUrl: 'https://raw.githubusercontent.com/ft-potluck-planner-5-group/front-end/products/src/images/food2.jpg',
    instructions: 'rachel@friends.com',
    detailed1:'a',
    detailed2:'b',
    detailed3:'c'
  },
  {
    id: 6,
    name: 'Phoebe Buffay-Hannigan',
    imageUrl: 'https://raw.githubusercontent.com/ft-potluck-planner-5-group/front-end/products/src/images/food2.jpg',
    instructions: 'rachel@friends.com',
    detailed1:'a',
    detailed2:'b',
    detailed3:'c'
  }
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

app.get('/api/friends', authenticator, (req, res) => {
  setTimeout(() => {
    res.send(friends);
  }, 1000);
});

app.get('/api/friends/:id', authenticator, (req, res) => {
  const friend = friends.find(f => f.id == req.params.id);

  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).send({ msg: 'Friend not found' });
  }
});

app.post('/api/friends', authenticator, (req, res) => {
  const friend = { id: getNextId(), ...req.body };

  friends = [...friends, friend];

  res.send(friends);
});

app.get('/api/', (req, res) => {
  res.status(200).json({status: "served"});
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
