const { faker } = require("@faker-js/faker");
const uuid = require("uuid");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

const csvWriter = createCsvWriter({
  path: "dataset.csv",
  header: [
    { id: "id", title: "ID" },
    { id: "nombre", title: "Nombre" },
    { id: "proteinas", title: "Proteinas" },
    { id: "carbohidratos", title: "Carbohidratos" },
    { id: "vegetales", title: "Vegetales" },
    { id: "alergias", title: "Alergias" },
    { id: "historial_ordenes", title: "Historial de Órdenes" },
    { id: "restricciones", title: "Restricciones" },
    { id: "latitud", title: "Latitud" },
    { id: "longitud", title: "Longitud" },
  ],
});

const records = [];

for (let i = 0; i < 1000000; i++) {
  records.push({
    id: uuid.v4(),
    nombre: faker.person.fullName(),
    proteinas: faker.number.int({ min: 0, max: 100 }),
    carbohidratos: faker.number.int({ min: 0, max: 100 }),
    vegetales: faker.number.int({ min: 0, max: 100 }),
    alergias: faker.lorem.words(),
    historial_ordenes: faker.lorem.paragraph(),
    restricciones: faker.word.sample(),
    latitud: faker.location.latitude(),
    longitud: faker.location.longitude(),
  });
}

csvWriter
  .writeRecords(records)
  .then(() => {
    console.log("Dataset generated successfully.");
  })
  .catch((error) => {
    console.error("Error generating dataset:", error);
  });
