// Example code for Logistic Regression
const LogisticRegression = require("ml-logistic-regression");

// Sample data
const data = [
  [1, 0],
  [2, 0],
  [3, 1],
  [4, 1],
  [5, 1],
];

// Separate features (X) and labels (Y)
const X = data.map(([x1, x2]) => [x1, x2]);
const Y = data.map(([, y]) => y);

// Create and train the logistic regression model
const model = new LogisticRegression(X, Y);

// Get the coefficients of the logistic regression model
const coefficients = model.coefficients;

console.log("Coefficients:", coefficients);

// Predict new values
const newX = [6, 1];
const prediction = model.predict(newX);
console.log("Prediction for", newX, ":", prediction);
