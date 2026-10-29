import swaggerAutogen = require('swagger-autogen');

const doc = {
  info: {
    title: 'API Taller Modular',
    description: 'Documentación automática de la API',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

const outputFile = './swagger_output.json';
const endpointsFiles = ['./src/app.ts'];

swaggerAutogen()(outputFile, endpointsFiles, doc).then(() => {
  console.log('Documentación de Swagger generada con éxito');
});