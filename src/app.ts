import express from 'express';
import estudianteRouter from './routers/estudiante.router';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


app.use('/api/estudiantes', estudianteRouter);

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});