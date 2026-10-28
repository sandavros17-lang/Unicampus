import express from 'express';
import estudianteRouter from './routers/estudiante.router'; // Importa tu enrutador

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// ESTA LÍNEA ES LA CLAVE para que no te dé 404:
app.use('/api/estudiantes', estudianteRouter);

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});