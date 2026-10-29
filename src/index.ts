<<<<<<< HEAD
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
=======

import express from "express";
import cursoRouter from "./routers/curso.router.ts";

const app = express();
const PORT = 3000;

//importante
app.use(express.json());

//rutacurso
app.use("/api/cursos", cursoRouter);

//ruta si funca
app.get("/", (_req, res) => {
    res.json({
        mensaje: "API CRUD Modular funcionando"
    });
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
>>>>>>> d367c571c3a514ae9ca74eb7ff75e3c17c2add00
