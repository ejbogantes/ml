// Importar las bibliotecas necesarias
const tf = require("@tensorflow/tfjs-node");
const cocoSsd = require("@tensorflow-models/coco-ssd");
const fs = require("fs");
const { createCanvas, loadImage } = require("canvas");

// Función para detectar objetos en una imagen
async function detectObjectsInImage(imagePath) {
  // Cargar la imagen desde la ruta especificada
  const image = await loadImage(imagePath);

  // Crear un lienzo (canvas) con las mismas dimensiones que la imagen
  const canvas = createCanvas(image.width, image.height);
  const context = canvas.getContext("2d");
  context.drawImage(image, 0, 0);

  // Dibujar la imagen en el lienzo
  const model = await cocoSsd.load();

  // Cargar el modelo de detección de objetos de COCO-SSD
  const predictions = await model.detect(canvas);

  // Realizar la detección de objetos en el lienzo
  return predictions;
}

// Ruta de la imagen que se va a analizar
const imagePath = "test2.jpg";

// Llamar a la función de detección de objetos en la imagen
detectObjectsInImage(imagePath)
  .then((predictions) => {
    // Imprimir las predicciones de objetos detectados
    console.log("Predictions:", predictions);
  })
  .catch((error) => {
    // En caso de error, imprimir el mensaje de error
    console.error("Error:", error);
  });
