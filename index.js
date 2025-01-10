const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

function getWelcomeMessage() {
  return 'Welcome Sonam - you can do it';
}

app.get('/welcome', (req, res) => {
  res.send(getWelcomeMessage());
});

function getUserName(user) {
  return ' Hi ' + user;
}

app.get('/user-name', (req, res) => {
  let user = req.query.user;
  res.send(getUserName(user));
});

function getTwoSum(num1, num2) {
  return (num1 + num2).toString();
}

app.get('/two-sum', (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  res.send(getTwoSum(num1, num2));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
