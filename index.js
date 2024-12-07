const express = require('express');
let cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to Stock portfolio analysis API!');
});

// Function to calculate the Returns of the Stocks added
function calculateReturns(boughtAt, marketPrice, quantity) {
  return (marketPrice - boughtAt) * quantity;
}

// Endpoint 1: Calculate the Returns of the Stocks added
app.get('/calculate-returns', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = parseInt(req.query.quantity);
  res.send(calculateReturns(boughtAt, marketPrice, quantity).toString());
});

// Function to calculate the Total Returns
function calculateTotalReturns(stock1, stock2, stock3, stock4) {
  return stock1 + stock2 + stock3 + stock4;
}

// Endpoint 2: Calculate the Total Returns
app.get('/total-returns', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  res.send(calculateTotalReturns(stock1, stock2, stock3, stock4).toString());
});

// Function to calculate the Return Percentages
function calculateReturnPercentage(boughtAt, returns) {
  return (returns / boughtAt) * 100;
}

// Endpoint 3: Calculate the Return Percentage
app.get('/calculate-return-percentage', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let returns = parseFloat(req.query.returns);
  res.send(calculateReturnPercentage(boughtAt, returns).toString());
});

// Function to calculate the Total Returns Percentage
function calculateTotalReturnPercentage(stock1, stock2, stock3, stock4) {
  return stock1 + stock2 + stock3 + stock4;
}

// Endpoint 4: Calculate the Total Return Percentage
app.get('/total-return-percentage', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  res.send(
    calculateTotalReturnPercentage(stock1, stock2, stock3, stock4).toString()
  );
});

// Endpoint 5: Identify the Status of Stocks based on their Return Value
app.get('/status', (req, res) => {
  let returnPercentage = parseFloat(req.query.returnPercentage);
  res.send(returnPercentage > 0 ? 'profit' : 'loss');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
