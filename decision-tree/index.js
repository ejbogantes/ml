// Example code for Decision Trees
const decisionTree = require("decision-tree");

// Sample data
const trainingData = [
  { outlook: "Sunny", temperature: 85, humidity: 85, windy: false, play: "No" },
  { outlook: "Sunny", temperature: 80, humidity: 90, windy: true, play: "No" },
  {
    outlook: "Overcast",
    temperature: 83,
    humidity: 78,
    windy: false,
    play: "Yes",
  },
  // Add more data points
];

// Create and train the decision tree model
const classColumnName = "play";
const features = ["outlook", "temperature", "humidity", "windy"];
const dt = new decisionTree(trainingData, classColumnName, features);

// Predict new values
const newDataPoint = {
  outlook: "Rainy",
  temperature: 70,
  humidity: 80,
  windy: true,
};

const prediction = dt.predict(newDataPoint);
console.log("Prediction:", prediction);
