const tf = require("@tensorflow/tfjs-node");
const cocoSsd = require("@tensorflow-models/coco-ssd");
const fs = require("fs");
const { createCanvas, loadImage } = require("canvas");

async function detectObjectsInImage(imagePath) {
  const image = await loadImage(imagePath);
  const canvas = createCanvas(image.width, image.height);
  const context = canvas.getContext("2d");
  context.drawImage(image, 0, 0);

  const model = await cocoSsd.load();
  const predictions = await model.detect(canvas);

  return predictions;
}

const imagePath = "test2.jpg";
detectObjectsInImage(imagePath)
  .then((predictions) => {
    console.log("Predictions:", predictions);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
