// ejemplo 
// servidor express con TypeScript para API UniCampus

import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import estudianteRouter from './routers/estudiante.router';
import matriculaRouter from './routers/matricula.router';

// Iniciar aplicacion Express
const app: Application = express();
const PORT = process.env.PORT || 3000;


// middlewares

app.use(cors());
app.use(express.json());


// rutas API (Endpoints)

app.use('/api/estudiantes', estudianteRouter);
app.use('/api/matriculas', matriculaRouter);

// ruta: / verifica estado
app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        sistema: "UniCampus API",
        estado: "En línea",
        versión: "1.0.0"
    });
});


// manejo errores 

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(`[Error del Servidor]: ${err.message}`);
    res.status(500).json({
        error: "Ha ocurrido un error interno en el servidor"
    });
});


// Arranca servidor local

app.listen(PORT, () => {
    console.log(`**************************************************`);
    console.log(`🚀 Servidor UniCampus corriendo...  puerto: ${PORT}`);
    console.log(`👉 http://localhost:${PORT}`);
    console.log(`***************************************************`);
});

export default app;