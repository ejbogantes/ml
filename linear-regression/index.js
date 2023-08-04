// yearsExp -> salary USD yearly
const data = require("./data.json");

// Example code for Linear Regression
const SLR = require("ml-regression").SLR;

// Sample data
// const x = [80, 60, 10, 20, 30];
// const y = [20, 40, 30, 50, 60];

// Extract "YearsExperience" and "Salary" into separate arrays
const x = data.map((item) => item.YearsExperience);
const y = data.map((item) => item.Salary);

// Create and train the linear regression model
const model = new SLR(x, y);

// Get the f(x)
console.log(model.toString(3));

// Predict new values
const newX = 15;
const newY = Math.round(model.predict(newX));
console.log(
  `Predicted salary for ${newX} years of experience: USD ${newY} annual`
);
