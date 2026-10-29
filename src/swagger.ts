import swaggerAutogen = require("swagger-autogen");

const doc = {
  info: {
    title: "API Unicampus",
    description:
      "Documentación de la API REST de Unicampus: Cursos, Estudiantes, Asistencias, Matrículas y Profesores.",
  },
  host: "localhost:3000",
  schemes: ["http"],
  securityDefinitions: {
    ApiKeyAuth: {
      type: "apiKey",
      in: "header",
      name: "x-api-key",
      description: "Introduce tu API Key para acceder a los endpoints (Ej: funval-2026-10)",
    },
  },
  security: [{ ApiKeyAuth: [] }],
};

const outputFile = "./src/swagger_output.json";
const routes = ["./src/app.ts"];

swaggerAutogen()(outputFile, routes, doc).then(() => {
  console.log("Documentación de Swagger generada exitosamente");
});
