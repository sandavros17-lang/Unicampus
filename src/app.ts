import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import estudiantesRouter from './routers/estudiante.router';
import cursosRouter from './routers/curso.router';
import matriculasRouter from './routers/matricula.routers';
import profesoresRouter from './routers/profesores.router';
import asistenciaRouter from './routers/asistencia.routes';

import swaggerUi from 'swagger-ui-express';
import swaggerOutput from './swagger_output.json';

const app = express();
const PORT = 3000;

app.use(express.json());

// 1. Swagger va PRIMERO para que la documentación sea pública y accesible
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput));

/* ==========================================
   CREACIÓN DEL CUSTOM MIDDLEWARE DE API KEY
   ========================================== */
function apiKeyValidator(req: Request, res: Response, next: NextFunction): void {
  const apiKey = req.headers['x-api-key'];

  // Verificar si la API Key es correcta o si existe
  if (!apiKey || apiKey !== "funval-2026-10") {
    res.status(401).json({
      ok: false,
      mensaje: "ACCESO NO AUTORIZADO - API Key inválida o faltante",
    });
    return;
  }
  
  next();
}

// 2. Aplicamos el validador de API Key antes de las rutas protegidas
app.use(apiKeyValidator);

// 3. Montar las rutas modularizadas (ahora todas protegidas con la API Key)
app.use('/api/estudiantes', estudiantesRouter);
app.use('/api/cursos', cursosRouter);
app.use('/api/matriculas', matriculasRouter);
app.use('/api/profesores', profesoresRouter);
app.use('/api/asistencias', asistenciaRouter);
// Activar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`Documentación en: http://localhost:${PORT}/api-docs`);
});