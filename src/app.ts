import express from 'express';
import estudiantesRouter from './routers/estudiante.router';
import cursosRouter from './routers/curso.router';
import matriculasRouter from './routers/matricula.routers';
import profesoresRouter from './routers/profesores.router';

const app = express();
const PORT = 3000;

app.use(express.json());

// Montar las rutas modularizadas
app.use('/api/estudiantes', estudiantesRouter);
app.use('/api/cursos', cursosRouter);
app.use('/api/matriculas', matriculasRouter);
app.use('/api/profesores', profesoresRouter);

// Activar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});