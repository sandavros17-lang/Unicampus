import swaggerAutogen = require('swagger-autogen');

const doc = {
  info: {
    title: 'API Taller Modular',
    description: 'Documentación automática de la API',
  },
  host: 'localhost:3000',
  schemes: ['http'],
  
  // 🔑 Configuración de seguridad para el API Key en los headers
  securityDefinitions: {
    ApiKeyAuth: {
      type: 'apiKey',
      in: 'header',
      name: 'x-api-key',
      description: 'Introduce tu API Key para acceder a los endpoints (Ej: funval-2026-10)',
    },
  },
  security: [{ ApiKeyAuth: [] }],
};

const outputFile = './swagger_output.json';
const endpointsFiles = ['./src/app.ts'];

swaggerAutogen()(outputFile, endpointsFiles, doc).then(() => {
  console.log('Documentación de Swagger generada con éxito');
});