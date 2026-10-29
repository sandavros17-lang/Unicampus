import express from 'express';
import estudiantesRouter from './routers/estudiante.router';
import cursosRouter from './routers/curso.router';
import matriculasRouter from './routers/matricula.routers';
import profesoresRouter from './routers/profesores.router';
import asistenciaRouter from './routers/asistencia.routes';

import swaggerUi from 'swagger-ui-express';
import swaggerOutput from './swagger_output.json';

const app = express(); // 👈 Declaramos 'app' primero
const PORT = 3000;

app.use(express.json());

// Configuramos Swagger una vez que 'app' ya existe
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput));

// Montar las rutas modularizadas
app.use('/api/estudiantes', estudiantesRouter);
app.use('/api/cursos', cursosRouter);
app.use('/api/matriculas', matriculasRouter);
app.use('/api/profesores', profesoresRouter);
app.use('/api/asistencias', asistenciaRouter);
// Activar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});